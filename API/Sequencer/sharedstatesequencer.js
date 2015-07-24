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
		Shared State Sequencer
		Wrapper around Sequencer to integrate with data, i.e. a storage 
		object implementing a key->value store. If the storage object is
		dynamic, the Sequencer will be able to monitor it's changes and react 
		appropriately. The Sequencer does not modify data in the storage object.

		Storage objects are required to implement the following API.
		This implies that SharedState (MediaScape) may be used directly. 

		value <- storage.getItem(key);
		[key1, key2,..] <- storage.keys();
		// optionally eventing support for dynamic data
	
		storage.on("change", changeHandler(eArgs)); // (key,value) pairs created or modified
		storage.on("remove", removeHandler(eArgs)); // (key,value) pairs removed 

		eArgs = [{key: key, value: value},...]
		for "change" event - eArgs represent new state
		for "remove" event - eArgs represent old state

		"change" event provides immediate event with (list of) current key-value pairs
	
		values are assumed to include properties with float values for defining
		Invervals, or else they will be ignored.
		.start
		.end
		If only one is present it will be used as singularity Interval.
	*/

	var SharedStateSequencer = function (motion, state) {
		this._state = state;
		seq.Sequencer.call(this, motion);
	};
	seq.inherit(SharedStateSequencer, seq.Sequencer);

	SharedStateSequencer.prototype.loadData = function () {
		var self = this;
		this._state.on("change", this.onChange, this);
		this._state.on("remove", this.onRemove, this);
	};

	SharedStateSequencer.prototype.getData = function (key) {
		return this._state.getItem(key);
	};

	SharedStateSequencer.prototype.onChange = function (e) {
		if (e.value.hasOwnProperty("start") || e.value.hasOwnProperty("end")) {
			this.addCue(e.key, new Interval(e.value.start, e.value.end), e.value);
		} 
	};

	SharedStateSequencer.prototype.onRemove = function (e) {
		this.removeCue(e.key, e.value);
	};

	return {
		SharedStateSequencer : SharedStateSequencer,
		Interval : seq.Interval,
		inherit : seq.inherit,
		SequencerError : seq.SequencerError
	};
});