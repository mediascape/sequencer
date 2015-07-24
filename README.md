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

# Sequencer

In this folder you will find the Sequencer library developed for [MediaScape project](http://mediascapeproject.eu/).

## Navigation
[Goals][] | [Structure][] | [Documentation][] | [Authors][] | [License][]

### Goals
[Top][]

MediaScape targets applications that provide shared experiences across multiple devices.

This library provides a generic mechanism for timing-sensitive execution of timed data. 

Timed data is data associated with an interval or a point, for example (23.2,24.8) or (12.4). The Sequencer is driven by an explicit timing source (not system clock) and its main function is to emit "enter" and "exit" events for timed data, at the correct time (according to its timing source). So, in the above example, if an advancing timing source reaches 23.2, an "enter" event must be emitted, and a little later the timing source reaches 24.8 the corresponding "exit" event must also be emitted, unless the timing source have been paused in the mean time. This function makes the Sequencer similar to a HTMLTrackElement used to time-align subtitles with a playing video. However, unlike the HTMLTrackElement, the Sequencer does NOT use a HTMLMediaElement as timing source. Instead, the Sequencer uses Shared Motion, a generic, multi-device timing mechanism for the Web. This way, the Sequencer becomes a generic building block for timed execution in multi-device Web applications. The Sequencer also improves upon the HTMLTrackElement in other respects. In particular, the timing of emitted events is much more precise.

### Structure
[Top][]

The generic structure of mediascape repositories is:

  * API: The JavaScript API.
  * complements: additional elements for extra and optional features.
  * helloworld: minimal sample code.

### Documentation
[Top][]

Please find detailed documentation in [API Doc](API/Sequencer/README.md) and [DEMO Doc](helloworld/README.md)

### Authors
[Top][]

- Ingar Mæhlum Arntzen (ingar.arntzen@norut.no)

### License
[Top][]

Copyright 2015 Norut Northern Research Institute.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

[Top]: #navigation
[Goals]: #goals
[Structure]: #structure
[Documentation]: #documentation
[Authors]: #authors
[License]: #license
