var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var markdown = require('gulp-markdown');
gulp.task('cleandoc', function () {
	del.sync('./docs'+'/**',{force:true});
});
gulp.task('builddocs', function (cb) {
	exec('gitbook build ./component/api ./docs', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
gulp.task('cleanDemoList',function () {
	del.sync('./docs/demo/demo-list.html',{force: true})
});
gulp.task('buildDemoList',function () {
	return gulp.src('./docs/demo/demo-list.md')
		.pipe(markdown())
		.pipe(gulp.dest('./docs/demo/demo-list.html'));

});
gulp.task('default',['cleandoc', 'builddocs', 'cleanDemoList', 'buildDemoList']);