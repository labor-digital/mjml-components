import fs from 'fs'
import glob from 'glob'
import gulp from 'gulp'
import watch from 'gulp-watch'
import babel from 'gulp-babel'
import path from 'path'
import { registerComponent } from 'mjml-core'
import mjml2html from 'mjml'
import pretty from 'pretty'
import through from 'through2'
import collect from 'gulp-collect'

const indexJSPath = './src/index.js'
const libDestination = './lib'
const srcPattern = 'src/**/*.js'

const clean = (cb) => {
  fs.rmdirSync(libDestination, { recursive: true })
  cb()
}

const filesToIgnore = ['AdobeProductMapping.js', 'index.js']
const filterNonComponent = (file) => !filesToIgnore.includes(path.basename(file))

const generateIndexJS = (cb) => {
  let fileContent = ""
  fileContent += glob
    .sync(srcPattern)
    .filter(filterNonComponent)
    .map((filePath) => {
      const relativePath = path.dirname(filePath).replace('src', '')
      const fileName = path.basename(filePath, '.js')
      const from = '.' + path.sep + path.join('.', relativePath, fileName)

      return `export { default as ${fileName}} from '${from.replace(/\\/g, '\\\\')}'`
    })
    .join('\n')
  fs.writeFileSync(indexJSPath, fileContent)
  cb()
}

const removeIndexJs = (cb) => {
  fs.unlinkSync(indexJSPath)
  cb()
}

const compileAndRegisterComponents = (files) => {
  if (typeof files == 'object') {
    for (let idx in files) {
      files[idx] = './' + path.relative(__dirname, files[idx]).replace('\\', '/')
    }
  }

  return gulp
    .src(files)
    .pipe(babel())
    .pipe(gulp.dest(libDestination))
    .pipe(collect.list((files) => files))
    .pipe(
      through.obj((file, enc, cb) => {
        delete require.cache[file.path]
        if (filterNonComponent(file.path)) {
          registerComponent(require(file.path).default)
        }
        cb(null, file)
      })
    )
}

const compileTemplates = (files) => {
  return gulp.src(files).pipe(
    through.obj((file, enc, cb) => {
      const data = fs.readFileSync(file.path, enc)
      const parsed = path.parse(file.path)
      const result = pretty(mjml2html(data).html, { ocd: true })
      fs.writeFileSync(path.normalize(parsed.dir + '/' + parsed.name + '.html'), result)
      cb(null, file)
    })
  )
}

exports.build = gulp.series(
    clean,
    generateIndexJS,
    () => {
      return compileAndRegisterComponents(srcPattern);
    },
    removeIndexJs,
    () => {
      return compileTemplates('src/index.mjml');
    }
);

exports.watch = () => {
  clean(() => {})
  generateIndexJS(() => {})
  return compileAndRegisterComponents(srcPattern).on('end', () => {
    removeIndexJs(() => {})
    watch(srcPattern, (cb) => {
      return compileAndRegisterComponents(cb.history)
    })
    watch('src/index.mjml', (cb) => {
      return compileTemplates(cb.history)
    })
  })
}
