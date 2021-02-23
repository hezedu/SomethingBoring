var path = require('path');
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      onlyOnejs:{  //自动压缩单个文件
        files: ['public/javascripts/dev/*.js'],
        tasks: ['uglify:buildOne'],
        options: {  
          spawn: false,
   
          livereload: true
        }
      },
      allreload:{ 
        files: ['public/stylesheets/*.less','public/images/*','views/*','views/*/*'],
        options: {  
          spawn: false,
          livereload: true
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: { //压缩所有文件
        files: [{
            expand:true,
            cwd:'public/javascripts/dev',//js目录下
            src:'**/*.js',//所有js文件
            dest: 'public/javascripts/pro'//输出到此目录下
        }]
    },

    buildOne: {   //自动压缩单个文件
        src:'public/javascripts/dev/indexall.js',
        dest: 'public/javascripts/pro/indexall.js'
      }
    }

  });

    // Project configuration.
  grunt.event.on('watch', function(action, filepath,target) {
     grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
     var last=path.basename(filepath);
     grunt.config('uglify.buildOne.src', 'public/javascripts/dev/'+last);
     grunt.config('uglify.buildOne.dest', 'public/javascripts/pro/'+last);
});
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认被执行的任务列表。
  grunt.registerTask('live', ["watch"]); //自动刷新
  grunt.registerTask('jsall', ['uglify:build']);

};