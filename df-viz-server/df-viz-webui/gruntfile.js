module.exports = function(grunt) {
	grunt.initConfig({
		karma: {
			unit: {configFile: 'karma-unit.conf.js'}
		},

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
	            dest: 'dist/js/dfvizapp.js'
	        }
	    },

	    copy: {
	    	copyhtml: {
	    		src: ['**/*.html'],
	    		expand: true,
	    		cwd: 'app/',
	    		dest: 'dist/'
	    	},

	    	copyjqueryjs: {
	    		src: 'bower_components/jquery/dist/jquery.min.js',
	    		dest: 'dist/js/jquery.min.js'
	    	},

            copybsjs: {
            	src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
            	dest: 'dist/js/bootstrap.min.js'
            }, 

            copybspapercss: {
            	src: 'bower_components/bower-bootswatch-paper/css/bootstrap.min.css',
            	dest: 'dist/css/bootswatch-paper.min.css'
            },             

	    	copybsfonts: {
	    		src: ['fonts/*'],
	    		expand: true,
	    		cwd: 'bower_components/bootstrap/dist/',
	    		dest: 'dist/fonts/',
	    		flatten: true
	    	},

            copyfacss: {
            	src: 'bower_components/font-awesome/css/font-awesome.min.css',
            	dest: 'dist/css/font-awesome.min.css'
            },   

	        copyfafonts: {
	    		src: ['fonts/*'],
	    		expand: true,
	    		cwd: 'bower_components/font-awesome/',
	    		dest: 'dist/fonts/',
	    		flatten: true
	    	},

            copyd3: {
	    		src: 'bower_components/d3/d3.min.js',
	    		dest: 'dist/js/d3.min.js'
	    	},

	    	copylodash: {
	    		src: 'bower_components/bower-lodash/dist/lodash.min.js',
	    		dest: 'dist/js/lodash.min.js'
	    	},

            copyd3parcoordsjs: {
	    		src: 'bower_components/d3.parcoords.js/d3.parcoords.js',
	    		dest: 'dist/js/d3.parcoords.js'
	    	},

	    	copyd3parcoordscss: {
	    		src: 'bower_components/d3.parcoords.js/d3.parcoords.css',
	    		dest: 'dist/css/d3.parcoords.css'
	    	},

	    	copyangular: {
	    		src: 'bower_components/angular/angular.min.js',
	    		dest: 'dist/js/angular.min.js'
	    	},

	    	copyangularuirouter: {
	    		src: 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	    		dest: 'dist/js/angular-ui-router.min.js'
	    	},

	    	copyangularbs: {
	    		src: 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
	    		dest: 'dist/js/ui-bootstrap-tpls.min.js'
	    	},

	    	copyangularuigridjs: {
	    		src: 'bower_components/angular-ui-grid/ui-grid.min.js',
	    		dest: 'dist/js/ui-grid.min.js'
	    	},

	    	copyangularuigridcss: {
	    		src: 'bower_components/angular-ui-grid/ui-grid.min.css',
	    		dest: 'dist/css/ui-grid.min.css'
	    	},

	    	copyngwigjs: {
	    		src: 'bower_components/ngWig/dist/ng-wig.min.js',
	    		dest: 'dist/js/ng-wig.min.js'
	    	},

	    	copyngwigcss: {
	    		src: 'bower_components/ngWig/dist/css/ng-wig.css',
	    		dest: 'dist/css/ng-wig.css'
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
	    		tasks: ['clean', 'concat', 'copy']
	    	}
	    }

	}); // initConfig

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['clean', 'concat', 'copy', 'connect', 'watch']);
}; // wrapper function