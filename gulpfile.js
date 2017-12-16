/**
* 以【gulp】开头的组件 在安装后已经自动加载，无须再引入，
* 当使用【gulp-rename】和【gulp-ruby-sass】这两个插件的时候，
* 就可以使用【$.rename】和【$.rubySass】来代替了,
* 也就是原始插件名【去掉gulp-前缀】，改成【$.】，之后再转换为驼峰命名。
*/
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();



/**
* 编译sass、添加浏览器前缀、生成map文件
* http://browserl.ist   可以在这个页面输入查询参数
*/
gulp.task('sass', ['cleanDistFolder'], function() {
    return gulp.src('./src/*.scss')
               .pipe($.sourcemaps.init())
               .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
               .pipe($.autoprefixer({
                    browsers: ['last 4 Explorer versions', 'Chrome >= 0', 'Firefox >= 0', 'Opera >= 0'],
                    cascade: true,
                    remove: true
               }))
               // .pipe($.csso())
               .pipe($.sourcemaps.write('./map/'))
               .pipe(gulp.dest('./dist'))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanDistFolder', function(){
    return gulp.src('./dist/')
               .pipe($.clean());
});
gulp.watch('./src/*.scss', ['sass']);
gulp.watch('./test/**/*').on('change', browserSync.reload);



/**
* 默认任务,编译 sass启动静态服务器
*/
gulp.task('default', ['sass'], function(){
    return browserSync.init({
        server: {
            baseDir: './',
            index: './test/index.html'
        }
    });
});
