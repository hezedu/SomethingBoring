module.exports = function (grunt) {
    'use strict';
    /*//文件操作
    //grunt.file.read(filepath [, options])   // 读文件
    //grunt.file.readJSON(filepath [, options])   // 读文件：json
    //grunt.file.write(filepath, contents [, options])    // 写文件
    //grunt.file.copy(srcpath, destpath [, options])  // 拷贝文件
    //grunt.file.delete(filepath [, options]) // 删除文件
    //目录操作
    //grunt.file.mkdir(dirpath [, mode])  // 创建
    //grunt.file.recurse(rootdir, callback)   // 遍历
    //文件类型
    //grunt.file.exists(path1 [, path2 [, ...]])  // 指定的路径是否存在
    //grunt.file.isDir(path1 [, path2 [, ...]])   // 指定的路径是否目录
    //grunt.file.isFile(path1 [, path2 [, ...]])  // 指定的路径是否文件
    //路径
    //grunt.file.isPathAbsolute(path1 [, path2 [, ...]])  // 是否绝对路径
    //grunt.file.arePathsEquivalent(path1 [, path2 [, ...]])  // 是否等价路径
    //grunt.file.doesPathContain(ancestorPath, descendantPath1 [, descendantPath2 [, ...]]) // 后面的路径是否都是ancestorPath的子路径
    //API： 日志
    //grunt.log.write(msg)
    //grunt.log.writeln(msg)
    //grunt.log.error([msg])  // 打印日志，并中断执行
    //grunt.log.errorlns(msg)
    //grunt.log.debug(msg)    // 只有加了--debug参数才会打印日志
    //API：任务 主要有以下几个
    //grunt.task.loadNpmTasks(pluginName) // 加载grunt插件
    //grunt.task.registerTask(taskName, description, taskFunction)    // 注册任务 || 给一系列任务指定快捷方式
    //grunt.task.run(taskList)    // 代码内部运行任务
    //grunt.task.loadTasks(tasksPath) // 加载外部任
    //grunt.task.registerMultiTask(taskName, description, taskFunction)   // 注册插件
    //自定义任务
    //grunt.registerTask('hello', function(name){ console.log('hello  ' + name); });
    //指定别名
    //指定默认task(运行 grunt 任务时，如没有指定任务名，默认运行 grunt default )
    //grunt.registerTask('default', ['concat']);
    //给一系列的任务指定别名
    //grunt.registerTask('dist', ['clean', 'concat', 'uglify']);*/
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        clean: {
            //files: ['dist/*']
            dist: 'dist',
            css: 'css/*.*'
        },
        cssmin: {
            minify: {//压缩
                expand: true, //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
                cwd: 'css', //需要处理的文件（input）所在的目录。
                src: ['*.css', '!*.min.css'], //表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符。
                dest: 'css', //表示处理后的文件名或所在目录。
                ext: '.min.css' //表示处理后的文件后缀名。
            },
            combine: {//合并
                files: {
                    'libs/css/out.min.css': ['css/*.min.css']
                }
                /* or
                 files: [
                     {src: ['src/aa.css', 'src/aaa.css'], dest: 'dest/a.css'},
                     {src: ['src/aa1.css', 'src/aaa1.css'], dest: 'dest/a1.css'},
                 ],
                */
            }
        },
        less: {
            development: {
                /*options: {
                    compress: false,
                    yuicompress: false
                },*/
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['*.less'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
            /*,
            production: {
                options: {
                    paths: ["assets/css"],
                    plugins: [
                        new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
                        new require('less-plugin-clean-css')(cleanCssOptions)
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            }*/
        },
        watch: {
            stylesheets: {
                files: 'less/*.less',
                tasks: ['less:development']
            }//,
         /*publicJs: {
                files: 'build/js/public.js',
                tasks: [ 'uglify:publicJs' ]
            },
            scripts: {
                files: ['build/js/!*.js', '!build/js/!**!/public.js' ],
                tasks: [ 'uglify:build' ]
            },
            componentJS: {
                files: ['build/js/component/!*.js'],
                tasks: [ 'uglify:component' ]
            }*/
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('default', [/*'clean','cssmin:minify','cssmin:combine'*/]);

};