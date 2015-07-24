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

define(function () {
	/* 
	   This module defines a simple viewer for timed data.
	   The viewer targets a DOM element and update it with
	   data from the sequencer, based on enter and leave events. 
   	*/
    return function (sequencer, elem) {
        var key = undefined;
        var enter = function (e) {
            key = e.key;
            elem.innerHTML = JSON.stringify(e.data);
            console.log(e.toString());
        };
        var exit = function (e) {
            if (e.key === key) {
                elem.innerHTML = "";
                key = undefined;
            }
            console.log(e.toString());
        };
        sequencer.on("enter", enter);
        sequencer.on("change", enter);
        sequencer.on("exit", exit);
    };
});