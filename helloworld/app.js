/*
  Copyright 2015 Norut Northern Research Institute
  Author : Ingar Mæhlum Arntzen

  This file is part of the Sequencer module.

  The Sequencer is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  The Sequencer is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with the Sequencer.  If not, see <http://www.gnu.org/licenses/>.
*/

requirejs.config({
	//By default load any module IDs from WP4 folder
	baseUrl: '../',
	//except, if the module ID starts with "app",
    //load it from the js/ directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'js': 'helloworld/js',
        'mcorp': 'http://mcorp.no/lib/mcorp-2.0',
        'sequencer': 'API/Sequencer'
    },
    shim: { 
        'mcorp': { exports: 'MCorp'}
    }
});


define (['mcorp'], function (MCorp) {
    var APPID = "8456579076771837888";
    return function (onReady) {
        var app = MCorp.app(APPID, {anon:true});
        app.run = function () {
            if (document.readyState === "complete") onReady(app.motions.shared);
        };
        window.onload = function () {
            if (app.readyState === app.STATE["OPEN"]) onReady(app.motions.shared);
        };
        app.init();
    }; 
});







   







