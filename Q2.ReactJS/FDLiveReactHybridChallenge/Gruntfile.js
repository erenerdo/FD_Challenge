module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded',
					noCache: true
				},
				files: {                         // Dictionary of files
					'./client/css/main.css': './client/css/main.scss',       // 'destination': 'source'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['sass']);

};
