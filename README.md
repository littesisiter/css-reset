# 重置样式表

## 开发者
> 需要 `node` 环境，并且全局安装了 `gulp`

### 涉及的插件

```js
browser-sync              自动刷新，静态服务
gulp-load-plugins         自动加载gulp插件
gulp-autoprefixer         设置浏览器版本自动处理浏览器前缀
gulp-csso                 压缩优化css
gulp-sass                 编译sass
gulp-sourcemaps           生层map文件
gulp-clean                删除文件
```

### 初次运行
```js
npm install 
```

### 启动
```js
gulp default 
```

---

## 使用者
> `common.scss` 文件中声明了诸多 **混合(mixin)**，可以根据实际需求拷贝至自己的 **sass** 文件中

### 相关文件说明
 - `src` 为源码目录，使用 `sass` 编写
 - `dist` 为产出目录，`map` 是方便后期调试追踪，建议保留
 - `resetPc.css` 是 **PC端**重置样式表
 - `resetMobile.css` 是**移动端**重置样式表，和**PC端重置样式表**几乎一致，
 - `common.css` 是项目中经常使用的一些自定义样式，可根据实际需求进行拷贝
 
