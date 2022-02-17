// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/main.js', 'js/main.js').sourceMaps()
    .sass('src/scss/main.scss', 'css/main.css').sourceMaps()
    .setPublicPath('dist').browserSync("http://localhost:8080");
