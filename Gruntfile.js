module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
		    build: {
		        options: {
		            //'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true
		        },
		        src: ['assets/index.html', 'assets/views/pizza.html']
		    }
		},
        // Keep JavaScript as lean as possible
		uglify: {
		    build: {
		    	src: 'assets/js/perfmatters.js',
		    	dest: 'js/perfmatters.min.js'
		    },
		},
		// keep CSS as lean as possible
		cssmin: {
		  target: {
		    files: {
		      'css/print.min.css': ['assets/css/print.css']
		    }
		  }
		},
		// inline css and js within html files
		inline: {
			dist: {
				options: {
					cssmin: true,
					uglify: true
				},
				files: {
					'views/pizza.html': 'assets/views/pizza.html',
					'index.html': 'assets/index.html',
					'project-2048.html': 'assets/project-2048.html',
					'project-webperf.html': 'assets/project-webperf.html',
					'project-mobile.html': 'assets/project-mobile.html'
				}
			}
	    },
  		// Run automated tasks when files are updated
  		watch: {
		    html: {
		        files: ['assets/index.html', 'assets/views/pizza.html', 'assets/project-2048.html', 'assets/project-webperf.html', 'assets/project-mobile.html'],
		        tasks: ['htmlhint', 'inline']
		    },
		    js: {
                files: ['assets/js/perfmatters.js'],
                tasks: ['uglify']
            },
            css: {
            	files: ['assets/css/print.css'],
                tasks: ['cssmin']
            }
		}
    });

	// Default task.
  	grunt.registerTask('default', ['htmlhint', 'cssmin', 'uglify', 'inline', 'watch']);
};