/*
 * Assemble, assemble-examples-markdown
 * https://github.com/assemble/assemble-examples-markdown
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    assemble: {
      options: {
        flatten: true,
        helpers: 'src/helpers/helper-*.js',
        assets: 'dest/assets',
        layoutdir: 'src/templates/layouts',
        partials: ['src/templates/partials/*.hbs', './*.md']
      },

      index: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'index.hbs'
        },
        files: {
          'dest/': ['src/content/index.md']
        }
      },

      work: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'work.hbs'
        },
        files: {
          'dest/work/': ['src/content/work/*.md'],
          'dest/text/': ['src/content/text/*.md'],
          'dest/pages/': ['src/content/pages/*.html', 'src/content/pages/*.md']
        }
      },

      autoload: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'infinite-body.hbs'
        },
        files: {
          'dest/partials/': ['src/content/work/*.md', 'src/content/pages/*.html'],
        }
      }

    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['dest/*.{html,md}']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble']);
};

