const env = require('dotenv').load();
const path = require('path');
const fs = require('fs');
const edge = require('edge.js');
const hound = require('hound');
const fse = require('fs-extra');
const formatter = require('html-formatter');
const recursive = require("recursive-readdir");
/// this set directory */  
const dir = __dirname.split("bin").join("") + process.env.RESOURCES_DIR + '/views';
const public = __dirname.split("bin").join("") + process.env.PUBLIC_DIR;
const blocked_dir = JSON.parse(process.env.BLOCK_DIR);
/* set edge view dir */
edge.registerViews(path.join(dir));
/* register funciton edge */
edge.global('asset', function(file) {
    return "assets/"+file;
});
/**
 ** on ready 
 ** state function
 **/

readDir()
/**
 * this compile method
 * on call state
 **/
function compile(item) {
    var name = item.split("edge").join("") + "html";
    try {
        write(name, formatter.render(edge.render(item.split("views").pop(""), {env: process.env}, {
            env: process.env
        })));
    } catch (e) {
        write(name, e.toString());
    }
}
/**
 * this unlink method
 * on call state
 **/
function unLink(file) {
    try {
        var target_dir = public + "/" + file;
        fs.unlink(target_dir, function(err) {
            if (err) {
                console.log(err);
            }
        })
    } catch (e) {
        console.log(e);
    }
}
/**
 * this write method
 * on call state
 **/
function write(name, data) {
    var target_dir = public + "/" + name;
    try {
        fse.outputFile(target_dir, data, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("writted " + target_dir)
            }
        });
    } catch (err) {
        console.log(err);
    }
}
/**
 ** this validator file 
 ** on call state
 **/
function validator(file) {
    for (var i = 0; i < blocked_dir.length; i++) {
        if (file.toLowerCase().indexOf(blocked_dir[i]) < 0) {
            return file;
        }
    }
}
/**
 * first load
 * on ready state
 **/
function readDir() {
    recursive(dir, function(err, files) {
        if (err) {
            console.log(err)
        } else {
            for (var i = 0; i < files.length; i++) {
                if (validator(files[i])) {
                    compile(files[i].split(__dirname.split("bin").join("") + process.env.RESOURCES_DIR + '/views').join(""))
                }
            }
        }
    });
}
/* this on change */
var watcher = hound.watch(dir);
watcher.on('create', function(file, stats) {
    console.log(file + '  was Created')
    if (!validator(file)) {
        readDir();
    } else {
        compile(file.split(__dirname.split("bin").join("") + process.env.RESOURCES_DIR + '/views').join("").substring(1))
    }
})
watcher.on('change', function(file, stats) {
    console.log(file + ' was Changed')
    if (!validator(file)) {
        readDir();
    } else {
        compile(file.split(__dirname.split("bin").join("") + process.env.RESOURCES_DIR + '/views').join("").substring(1))
    }
})
watcher.on('delete', function(file) {
    console.log(file + ' was Deleted')
    var filename = file.split(__dirname.split("bin").join("") + process.env.RESOURCES_DIR + '/views').join("").substring(1).split('edge').join("html");
    if (!validator(file)) {
        unLink(filename);
    } else {
        unLink(filename);
    }
    readDir();
    console.log(validator(file))
})