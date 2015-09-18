/**
 * Expand Sails features with Bower Package Manager.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to automaticaly install bower_component's
 * inside Sails data structure that compatible with Asset Pipeline.
 *
 *
 *
 */
module.exports = function(grunt) {
  'use strict';
  var path    = require('path'),
    _       = require('lodash');
 
  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: './assets',
        layout: function(type, component, source){
          var extRegex  = /[0-9a-z]{1,5}$/i,
            extension = source.match(extRegex).toString();
 
          var depend1    = ['jquery'],
            depend2   = ['angular'],
            depend3   = ['angular-translate', 'leaflet', 'leaflet-src','moment','pikaday', 'zeroclipboard'],
            js        = ['js'],
            js_exceptions = ['blueimp-file-upload', 'blueimp-load-image', 'blueimp-tmpl', 'blueimp-canvas-to-blob'],
            styles    = ['css', 'less'],
            fonts     = ['eot', 'svg', 'ttf', 'woff', 'otf'];
          //dependencies first
          if(_.contains(depend1, component)) {
            return path.join('js', 'dependencies/level1', component);
          }
          if(_.contains(depend2, component)) {
            return path.join('js', 'dependencies/level2', component);
          }
          if(_.contains(depend3, component)) {
            return path.join('js', 'dependencies/level3', component);
          }
          //other libraries later
          else if(_.contains(js, extension) && component !== 'bootstrap-sass-official' && !_.contains(js_exceptions, component)) {
              return path.join('js', 'bower', component);
          }
          else if(_.contains(styles, extension)) {
            return path.join('styles', 'bower', component);
          }
          else if(_.contains(fonts, extension)) {
            //then bower fonts
            if(component === 'font-awesome') {
              return path.join('styles', 'bower', 'fonts');
            }
            else {
              return path.join('fonts', component);
            }
          }
          else {
            return path.join('bower', component);
          }
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-bower-task');
};