<!--
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
-->

# Demo Documentation

These are demoes for the Sequencer.

All demoes may be run directly by opening the local file in the browser. 

Open at least ctrl.html and <X>.html in two different tabs/windows.

Open <X>.html in multiple tabs/windows in order to appreciate precise sync. 

You may also verify multi-device sync by opening links on different computers. 

Resources
* js/viewer.js - simplistic viewer used by most demoes to update DOM based on timed sequencer events.
* js/timeddata.js - collection of timeddata resources used by demonstrations.
* js/localstorage.js - sequencer, viewer and editor for timed data persisted and shared using LocalStorage - relevant for dynamic.html
* js/test.js - test code - relevant for test.html
* app.js - main application - loads motion

Demoes
* ctrl.html - all demoes are controlled by the same motion. You may control it by opening ctrl.html.
* index.html is the most basic demonstration of the Sequencer 
* array.html demoes how to sequence and array with timed data using the Sequencer
* special.html demoes how the Sequencer may be specialized to integrate with a specific data format
* minimal.html demoes how timed data, motion, sequencer and viewer may be connected essentially in ONE(!) line of code
* dynamic.html demoes Sequencer support for dynamic changes of timed data. Includes viewer and editor for working with timed data.
* test.html runs some precoded tests
