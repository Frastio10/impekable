let mix = require('laravel-mix');

//mix.setPublicPath('dist/');

mix.disableNotifications();


mix.sass('resources/sass/style.scss', 'dist/assets/css')
   .sass('resources/sass/component.scss', 'dist/assets/css')
   .sass('resources/sass/invoices.scss', 'dist/assets/css')
   .sass('resources/sass/calendar.scss', 'dist/assets/css')
   .sass('resources/sass/products.scss', 'dist/assets/css')
   .sass('resources/sass/customers.scss', 'dist/assets/css')
   .sass('resources/sass/chat-room.scss', 'dist/assets/css')
   .sass('resources/sass/login.scss', 'dist/assets/css')
   .sass('resources/sass/inbox.scss', 'dist/assets/css')
   .options({
    processCssUrls: false, 
    postCss: [
        require('autoprefixer')({
            browsers: [
                'last 2 versions',
                'iOS >= 8',
                'Safari >= 8',
            ],
            cascade: false,
            flexbox: "no-2009"
        }),
    ]
});