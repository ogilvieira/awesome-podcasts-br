module.exports = function(grunt) {
  var project_files = {
      javascript: [
        './bower_components/angular/angular.min.js',
        './bower_components/angular-slugify/angular-slugify.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-bootstrap/ui-bootstrap.min.js',
        './bower_components/angular-lazy-img/release/angular-lazy-img.js',
        './bower_components/abdmob/x2js/xml2json.js',
        './bower_components/ngMeta/dist/ngMeta.js',
        '!./app/app.min.js',
        '!./app/view/',
        './app/app.js',
        './app/directives/*.js',
        './app/factory/*.js',
        './app/filter/*.js',
        './app/controller/*.js',
        './app/routes.js',
      ],
      stylesheet: [
        './bower_components/font-awesome/css/font-awesome.css',
        '!./assets/css/app.min.css',
        './assets/css/bootstrap.css',
        './assets/css/app.css',
      ],
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      json: {
          src: ['./data/podcasts_pt_br.json','./data/podcasts_en.json'],
          dest: './data/podcasts.json'
      }
    },
    uglify: {
      options: {
        banner: '/*===================================================== \n'
                +'= <%= pkg.name %> \n'
                +'= by <%= pkg.homepage %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      build: {
        src: project_files.javascript,
        dest: './app/app.min.js'
      },
    },
    cssmin : {
      options : {
        keepSpecialComments: 0,
        rebase: false,
      },
      dist: {
        src: project_files.stylesheet,
        dest: './assets/css/app.min.css',
      }
    },
    watch: {
      scripts: {
        files: [project_files.javascript, project_files.stylesheet],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('concat', ['concat']);
  grunt.registerTask('default', ['uglify', 'cssmin']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};
