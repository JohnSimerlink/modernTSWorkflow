var gulp = require('gulp')
var exec = require('child_process').exec
gulp.task('test', function() {
   exec('npm t', function(err, stdout, stderr){
      console.log(stdout)
   })
})