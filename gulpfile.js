const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
    'default',
    gulp.series(
        'clean:dev',
        gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
        gulp.parallel('server:dev', 'watch:dev')
    )
);

gulp.task('fonts:dev', function () {
    return gulp.src('src/fonts/*.{woff2,woff,ttf,otf}')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);
