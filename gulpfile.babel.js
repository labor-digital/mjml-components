import fs from 'fs'
import glob from 'glob'
import gulp from 'gulp'
import babel from 'gulp-babel'
import path from 'path'

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
  const fileContent = glob
    .sync(srcPattern)
    .filter(filterNonComponent)
    .map((filePath) => {
      const relativePath = path.dirname(filePath).replace('src', '')
      const fileName = path.basename(filePath, '.js')
      const from = './' + path.join(relativePath, fileName)

      return `export { default as ${fileName}} from '${from}'`
    })
    .join('\n')
  fs.writeFileSync(indexJSPath, fileContent)
  cb()
}

const removeIndexJs = (cb) => {
  fs.unlinkSync(indexJSPath)
  cb()
}

const compileComponents = () => gulp.src(srcPattern).pipe(babel()).pipe(gulp.dest(libDestination))

exports.build = gulp.series(clean, generateIndexJS, compileComponents, removeIndexJs)
