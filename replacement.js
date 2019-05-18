var fs = require('fs');
var fs = require('fs-extra');
var copydir = require('copy-dir');
var replace = require("replace");
const base_dir = "./dist/assets/css/";


var greprep = [{
        target: "/assets/",
        action: "../"
    },{
        target: "/fonts/",
        action: "../fonts/"
    } , {
        target: "/images/vendor/",
        action: "../images/vendor/"
    }
];

for (var i = 0; i < greprep.length; i++) {
    
    replace({
        regex: greprep[i].target,
        replacement:greprep[i].action,
        paths: ['./dist/assets/css/style.css'],
        recursive: true,
        silent: true,
    });
};




async function copyFiles() {
    try {
        await fs.copy('./fonts/', './dist/assets/fonts');
        await fs.copy('./images/', './dist/assets/images/');
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}
copyFiles()