var fs = require('fs')
var gulp = require('gulp')
var watch = require('gulp-watch')
var exec = require('child_process').exec
var paths = {
   scripts: './app/**/*.{js,ts}',
   tests: './test/**/*.{js,ts}'
}
gulp.task('test', function() {
   exec('npm t', function(err, stdout, stderr){
       console.log(stdout)
       exec('npm run coverage', function (err, stdout, stderr){
           console.log(stdout)
           console.log('Coverage report sent')
       })
       // publishCoverageIfConfigExists()
   })
})
gulp.task('test-watch', function() {
   gulp.start('test')
   watch([paths.scripts, paths.tests], function(){
      gulp.start('test')
   })
})
function publishCoverageIfConfigExists(){
    fs.open('.coveralls.yml', 'r', function (err, fd) {
       if (!err){
           console.log('Sending coverage report to coveralls.io')
       }
    })
}