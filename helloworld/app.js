/*
    Copyright 2015 Norut Northern Research Institute
    Author : Ingar Mæhlum Arntzen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
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







   







