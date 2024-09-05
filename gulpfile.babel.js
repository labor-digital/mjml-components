import fs from 'fs'
import { glob } from 'glob'
import gulp, { series } from 'gulp'
import watch from 'gulp-watch'
import babel from 'gulp-babel'
import path from 'path'
import { registerComponent } from 'mjml-core'
import mjml2html from 'mjml'
import pretty from 'pretty'
import collect from 'gulp-collect'
import through2 from 'through2'

const indexJSPath = './src/index.js'
const indexMJMLPath = 'src/index.mjml'
const libDestination = './lib'
const srcPattern = 'src/**/*.js'

const clean = (done) => {
  if (fs.existsSync(libDestination)) {
    fs.rmSync(libDestination, { recursive: true, force: true })
  }
  done()
}

const filesToIgnore = ['AdobeProductMapping.js', 'index.js', 'code-example.js', 'AdobeRedStyleMapping.js', 'AdobeComponentMapping.js']
const fileTypesToIgnore = ['.style.js']
const filterNonComponent = (file) => {
  let filterFiles = function (file){
    return !filesToIgnore.includes(path.basename(file))
  }
  let filterFileExtensions = function (file){
    return !fileTypesToIgnore.includes(path.basename(file).substring(path.basename(file).indexOf('.')))
  }

  return filterFiles(file) && filterFileExtensions(file)
}

const generateIndexJS = (done) => {
  let fileContent = ''
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
  done()
}

const removeIndexJs = (done) => {
  if (fs.existsSync(indexJSPath)) {
    fs.rmSync(indexJSPath, { force: true })
  }
  done()
}

const compileAndRegisterComponents = (done) => {
  return gulp
    .src(srcPattern)
    .pipe(babel())
    .pipe(gulp.dest(libDestination))
    .pipe(collect.list((files) => files))
    .pipe(
      through2.obj((file, enc, cb) => {
        delete require.cache[file.path]
        if (filterNonComponent(file.path)) {
          registerComponent(require(file.path).default)
        }
        cb(null, file)
      }),
    )
}

const compileTemplates = (done) => {
  return gulp.src(indexMJMLPath).pipe(
    through2.obj((file, enc, cb) => {
      const data = fs.readFileSync(file.path, enc)
      const parsed = path.parse(file.path)
      const parsed_data = mjml2html(data)

      const errorsJson = path.normalize(parsed.dir + '/errors.json')
      if (fs.existsSync(errorsJson)) {
        fs.rmSync(errorsJson)
      }

      if (parsed_data.errors.length) {
        const errorMessage = `${parsed_data.errors.length} error(s) occurred. Check errors.json`
        console.log(`---- ${errorMessage}`)
        fs.writeFileSync(path.normalize(parsed.dir + '/errors.json'), JSON.stringify(parsed_data.errors))
        fs.writeFileSync(path.normalize(parsed.dir + '/' + parsed.name + '.html'), errorMessage)
        process.exit(1)
      } else {
        const result = pretty(parsed_data.html, { ocd: true })
        fs.writeFileSync(path.normalize(parsed.dir + '/' + parsed.name + '.html'), result)
      }

      cb(null, file)
    }),
  )
}

exports.build = series(
  clean,
  generateIndexJS,
  compileAndRegisterComponents,
  removeIndexJs,
  compileTemplates,
)

exports.watch = () => {
  clean(() => {
  })
  generateIndexJS(() => {
  })

  return compileAndRegisterComponents(() => {
    removeIndexJs(() => {
    })
    watch(srcPattern, (cb) => {
      return compileAndRegisterComponents(cb.history)
    })
    watch('src/index.mjml', (cb) => {
      return compileTemplates(cb.history)
    })
  })
}
