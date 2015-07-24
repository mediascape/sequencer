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

define(['./sequencer'], function (seq) {
	'use strict';


	/* 
		ArraySequencer Works on an array of timed data which will not be modified.
		Uses array index as unique key.
		Uses "start" and "end" properties of elements in array for intervals 
	*/
	var ArraySequencer = function (motion, array) {
		this._array = array;
		seq.Sequencer.call(this, motion);
	};
	seq.inherit(ArraySequencer, seq.Sequencer);

	ArraySequencer.prototype.loadData = function () {
		if (this._array.length === 0) return;
		var r = this.request();
		for (var i=0; i<this._array.length; i++) {
			r.addCue(i.toString(), new seq.Interval(this._array[i].start, this._array[i].end), this._array[i]);
		}
		r.submit();
	};

	ArraySequencer.prototype.getData = function (key) {
		return this._array[parseInt(key)];
	};

	return {
		ArraySequencer : ArraySequencer,
		Interval : seq.Interval,
		inherit : seq.inherit,
		SequencerError : seq.SequencerError
	};
});