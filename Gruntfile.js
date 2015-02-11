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
	    // optimize image files
	    imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 7
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'assets/img/',
		          src: ['**/*.png'],
		          dest: 'img/',
		          ext: '.png'
		        },
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'assets/views/images/',
		          src: ['**/*.png'],
		          dest: 'views/images/',
		          ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'assets/img/',
		          src: ['**/*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: 'img/',
		          ext: '.jpg'
		        },
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'assets/views/images/',
		          src: ['**/*.jpg'],
		          dest: 'views/images/',
		          ext: '.jpg'
		        }
		      ]
		    }
  		}
    });

	// Default task.
  	grunt.registerTask('default', ['uglify', 'inline', 'imagemin']);
};