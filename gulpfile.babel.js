import fs from 'fs'
import { glob } from 'glob'
import gulp, {series} from 'gulp'
import watch from 'gulp-watch'
import babel from 'gulp-babel'
import path from 'path'
import { registerComponent } from 'mjml-core'
import mjml2html from 'mjml'
import pretty from 'pretty'
import collect from 'gulp-collect'
import through2 from "through2"

const indexJSPath = './src/index.js'
const indexMJMLPath = 'src/index.mjml'
const libDestination = './lib'
const srcPattern = 'src/**/*.js'

const clean = (done) => {
    if(fs.existsSync(libDestination)) {
        fs.rmSync(libDestination, { recursive: true, force: true });
    }
    done();
}

const filesToIgnore = ['AdobeProductMapping.js', 'index.js', 'code-example.js']
const filterNonComponent = (file) => !filesToIgnore.includes(path.basename(file));
const filterStorybook = (file) => !path.basename(file).endsWith('stories.js');

const generateIndexJS = (done) => {

    let fileContent = ""
    fileContent += glob
        .sync(srcPattern)
        .filter(filterNonComponent)
        .filter(filterStorybook)
        .map((filePath) => {
            const relativePath = path.dirname(filePath).replace('src', '')
            const fileName = path.basename(filePath, '.js')
            const from = '.' + path.sep + path.join('.', relativePath, fileName)

            return `export { default as ${fileName}} from '${from.replace(/\\/g, '\\\\')}'`
        })
        .join('\n')
    fs.writeFileSync(indexJSPath, fileContent)
    done();
}

const removeIndexJs = (done) => {
    if(fs.existsSync(indexJSPath)) {
        fs.rmSync(indexJSPath, { force: true });
    }
    done();
}

const compileAndRegisterComponents = (done) => {
    const files = srcPattern;
    if (typeof files == 'object') {
        for (let idx in files) {
            files[idx] = './' + path.relative(__dirname, files[idx]).replace('\\', '/')
        }
    }
    return gulp.src(files)
        .pipe(babel())
        .pipe(gulp.dest(libDestination))
        .pipe(collect.list((files) => files))
        .pipe(
            through2.obj(function (file, enc, callback) {
                delete require.cache[file.path]
                if (filterNonComponent(file.path)) {
                    registerComponent(require(file.path).default)
                }
                done();
            })
        )
}

const compileTemplates = (done) => {
    return gulp.src(indexMJMLPath).pipe(
        through2.obj((file, enc, cb) => {
            const data = fs.readFileSync(file.path, enc)
            const parsed = path.parse(file.path)
            const result = pretty(mjml2html(data).html, {ocd: true})
            fs.writeFileSync(path.normalize(parsed.dir + '/' + parsed.name + '.html'), result)
            done();
        })
    )
}

exports.build = series(
    clean,
    generateIndexJS,
    compileAndRegisterComponents,
    removeIndexJs,
    compileTemplates
);

exports.watch = () => {
    clean(() => {})
    generateIndexJS(() => {})

    return compileAndRegisterComponents(() => {
        removeIndexJs(() => {
        })
        watch(srcPattern, (cb) => {
            return compileAndRegisterComponents(cb.history)
        })
        watch('src/index.mjml', (cb) => {
            return compileTemplates(cb.history)
        })
    });
}
