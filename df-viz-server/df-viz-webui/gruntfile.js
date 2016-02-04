module.exports = function(grunt) {
	grunt.initConfig({
	    clean: {
	        options: {force: true},
	        cleandest: {
	            src: ['dist/**/*', '!dist/favicon.ico']
	        }
	    },

	    concat: {
	        options: {
	            separator: '\n\n//----------------------------------\n',
	            banner: '\n\n//----------------------------------\n'
	        },

	        dist: {
	            src: ['app/js/vizapp.js', 'app/js/controllers/*.js'],
	            dest: 'dist/dfvizapp.js'
	        }
	    },

	    bower_concat: {
	        all: {
                dest: 'dist/dfvizlibs.js',
                cssDest: 'dist/dfvizlibs.css',
                
                mainFiles: {
                    'jquery': ['dist/jquery.js'],
                    'd3': ['d3.js'],
                    'angular': ['angular.js'],
                    'angular-ui-router': ['release/angular-ui-router.js'],
                    'bootstrap': ['dist/js/bootstrap.js', 'dist/css/bootstrap.css', 'dist/css/bootstrap-theme.css'],
                    'font-awesome': ['css/font-awesome.css'],
                    'angular-bootstrap': ['ui-bootstrap-tpls.js']
                },

                bowerOptions: {relative: false}
	        }
	    },

	    copy: {
	    	copyhtml: {
	    		src: ['**/*.html'],
	    		expand: true,
	    		cwd: 'app/',
	    		dest: 'dist//'
	    	},

	    	copybsfonts: {
	    		src: ['fonts/*'],
	    		expand: true,
	    		cwd: 'bower_components/bootstrap/dist/',
	    		dest: 'dist/fonts/',
	    		flatten: true
	    	},

	        copyfafonts: {
	    		src: ['fonts/*'],
	    		expand: true,
	    		cwd: 'bower_components/font-awesome/',
	    		dest: 'dist/fonts/',
	    		flatten: true
	    	}
	    },

	    connect: {
	    	server: {
	    		options: {
	    			hostname: 'localhost',
	    			port: 9999,
	    			base: 'dist/',
	    			livereload: true
	    		}
	    	}
	    },

	    watch: {
	    	options: {
	    		spawn: false,
	    		livereload: true
	    	},

	    	sources: {
	    		files: ['app/index.html', 'app/views/**/*.html', 'app/js/**/*.js', 'app/css/**/*.css'],
	    		tasks: ['clean', 'concat', 'bower_concat', 'copy']
	    	}
	    }

	}); // initConfig

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['clean', 'concat', 'bower_concat', 'copy', 'connect', 'watch']);
}; // wrapper function