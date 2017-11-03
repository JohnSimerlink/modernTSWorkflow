var gulp = require('gulp')
var watch = require('gulp-watch')
var exec = require('child_process').exec
var paths = {
   scripts: './app/**/*.js',
   tests: './test/**/*.js'
}
gulp.task('test', function() {
   exec('npm t', function(err, stdout, stderr){
       console.log(stdout)
       console.log('Sending coverage report to coveralls.io')
       exec('npm run coverage', function (err, stdout, stderr){
           console.log(stdout)
           console.log('Coverage report sent')
       })
   })
})
gulp.task('test-watch', function() {
   gulp.start('test')
   watch([paths.scripts, paths.tests], function(){
      gulp.start('test')
   })
})