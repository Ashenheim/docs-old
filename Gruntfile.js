module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			site: {
				files: [ 'index.html',
							'_includes/*',
							'_sections/*',
							'_config.yml',
							'images/**/*' ],
				tasks: [ 'shell:jekyllBuild' ]
			},
			sass: {
				files: [ 'assets/css/**/*.sass',
							'assets/css/**/*.scss' ],
				tasks: [ 'shell:jekyllBuild' ]
			},
			scripts: {
				files: [ 'assets/js/scripts.js', 'assets/js/**/*.js' ],
				tasks: [ 'shell:jekyllBuild' ]
			},
			options: {
				livereload: true
			}
		},

		shell: {
			jekyllBuild: {
				command: 'jekyll build'
			},
			jekyllServe: {
				command: 'jekyll serve'
			}
		},

		connect: {
			server: {
				options: {
					port: 4000,
					base: '_site/'
				}
			}
		},


	});

	// Enable Plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	
	// Tasks
	grunt.registerTask('default', [
		'connect', 
		'watch'
	]);
	grunt.registerTask('build', [
		'shell:jekyllBuild'
	]);

};