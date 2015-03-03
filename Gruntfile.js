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
		            'id-unique': true,
		            //'head-script-disabled': true,
		            //'style-disabled': true
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
		// Minify css files
		/*cssmin: {
			target: {
     		 	files: [
      				{src: '*.css', dest: 'css/',  expand: true,  cwd: 'assets/css', ext: '.min.css'},
      			],
      		},
		},*/
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
				}
			}
	    },
  		// Run automated tasks when files are updated
  		watch: {
		    html: {
		        files: ['assets/index.html', 'assets/views/pizza.html'],
		        tasks: ['htmlhint', 'inline']
		    },
		    js: {
                files: ['assets/js/perfmatters.js'],
                tasks: ['uglify']
            }
		}
    });

	// Default task.
  	grunt.registerTask('default', ['htmlhint', 'uglify', 'inline', 'watch']);
};