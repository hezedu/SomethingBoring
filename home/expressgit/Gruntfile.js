module.exports = function (grunt) {
    'use strict';
    /*//�ļ�����
    //grunt.file.read(filepath [, options])   // ���ļ�
    //grunt.file.readJSON(filepath [, options])   // ���ļ���json
    //grunt.file.write(filepath, contents [, options])    // д�ļ�
    //grunt.file.copy(srcpath, destpath [, options])  // �����ļ�
    //grunt.file.delete(filepath [, options]) // ɾ���ļ�
    //Ŀ¼����
    //grunt.file.mkdir(dirpath [, mode])  // ����
    //grunt.file.recurse(rootdir, callback)   // ����
    //�ļ�����
    //grunt.file.exists(path1 [, path2 [, ...]])  // ָ����·���Ƿ����
    //grunt.file.isDir(path1 [, path2 [, ...]])   // ָ����·���Ƿ�Ŀ¼
    //grunt.file.isFile(path1 [, path2 [, ...]])  // ָ����·���Ƿ��ļ�
    //·��
    //grunt.file.isPathAbsolute(path1 [, path2 [, ...]])  // �Ƿ����·��
    //grunt.file.arePathsEquivalent(path1 [, path2 [, ...]])  // �Ƿ�ȼ�·��
    //grunt.file.doesPathContain(ancestorPath, descendantPath1 [, descendantPath2 [, ...]]) // �����·���Ƿ���ancestorPath����·��
    //API�� ��־
    //grunt.log.write(msg)
    //grunt.log.writeln(msg)
    //grunt.log.error([msg])  // ��ӡ��־�����ж�ִ��
    //grunt.log.errorlns(msg)
    //grunt.log.debug(msg)    // ֻ�м���--debug�����Ż��ӡ��־
    //API������ ��Ҫ�����¼���
    //grunt.task.loadNpmTasks(pluginName) // ����grunt���
    //grunt.task.registerTask(taskName, description, taskFunction)    // ע������ || ��һϵ������ָ����ݷ�ʽ
    //grunt.task.run(taskList)    // �����ڲ���������
    //grunt.task.loadTasks(tasksPath) // �����ⲿ��
    //grunt.task.registerMultiTask(taskName, description, taskFunction)   // ע����
    //�Զ�������
    //grunt.registerTask('hello', function(name){ console.log('hello  ' + name); });
    //ָ������
    //ָ��Ĭ��task(���� grunt ����ʱ����û��ָ����������Ĭ������ grunt default )
    //grunt.registerTask('default', ['concat']);
    //��һϵ�е�����ָ������
    //grunt.registerTask('dist', ['clean', 'concat', 'uglify']);*/
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        clean: {
            //files: ['dist/*']
            dist: 'dist',
            css: 'css/*.*'
        },
        cssmin: {
            minify: {//ѹ��
                expand: true, //�����Ϊtrue���ͱ�ʾ�����ļ�����ռλ������*�ţ���Ҫ��չ�ɾ�����ļ�����
                cwd: 'css', //��Ҫ������ļ���input�����ڵ�Ŀ¼��
                src: ['*.css', '!*.min.css'], //��ʾ��Ҫ������ļ����������������ʽ�������ÿһ�����һ���ļ���������ʹ��ͨ�����
                dest: 'css', //��ʾ�������ļ���������Ŀ¼��
                ext: '.min.css' //��ʾ�������ļ���׺����
            },
            combine: {//�ϲ�
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