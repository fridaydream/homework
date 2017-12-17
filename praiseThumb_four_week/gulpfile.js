
const gulp=require('gulp');
const babel=require('gulp-babel');
gulp.task('default',['praise'],()=>{
	gulp.watch(['src/**/*.js','!src/public/**/*.js'],['praise']);
});
gulp.task('praise',()=>{
	return gulp.src(['src/**/*.js','!src/public/**/*.js'])
		.pipe(babel({
			presets:[
				'es2015',
				'stage-0'
			]
		}))
		.pipe(gulp.dest('./build'));
});