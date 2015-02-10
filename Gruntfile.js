module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Keep JavaScript as lean as possible
		uglify: {
		    build: {
		    	src: 'assets/js/perfmatters.js',
		    	dest: 'js/perfmatters.min.js'
		    },
		},
		// Minify css files
		cssmin: {
			target: {
     		 	files: [
      				{src: '*.css', dest: 'css/',  expand: true,  cwd: 'assets/css', ext: '.min.css'},
      			],
      		},
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
				}
			}
	    }

    });

	// Default task.
  	grunt.registerTask('default', ['cssmin', 'uglify', 'inline']);

};