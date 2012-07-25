module.exports = function(grunt) {
	grunt.initConfig({
		lint: {
			all: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
		},
		
		concat: {
			all: {
				src: ['lib/**/*.js'],
				dest: 'dist/benchMarkjs.js'
			}
		},
		
		jshint: {
			options: {
				browser: true
			}
		},
		
		min: {
			dist: {
				src: ['lib/**/*.js'],
				dest: 'dist/benchMarkjs.min.js'
			}
		}
	});	
	grunt.registerTask('default', 'lint concat min');
};