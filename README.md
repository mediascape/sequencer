# Sequencer

In this folder you will find the Sequencer library developed for [MediaScape project](http://mediascapeproject.eu/).

## Navigation
[Goals][] | [Structure][] | [Authors][] | [License][]

### Goals
[Top][]

MediaScape targets applications that provide shared experiences across multiple devices.

This library provides a generic mechanism for timing-sensitive execution of timed data. 

Timed data is data associated with an interval or a point, say (23.2,24.8) or (12.4). The Sequencer is driven by an explicit timing source (not system clock) and its main function is to emit "enter" and "exit" events for timed data, at the correct time (according to its timing source). This way the Sequencer is similar to a HTMLTrackElement. However, unlike the HTMLTrackElement, the Sequencer does not use a HTMLMediaElement as timing source. Instead, the Sequencer uses Shared Motion, a generic, multi-device timing mechanism for the Web. This way, the Sequencer becomes a generic building block for timed execution in multi-device Web applications. The Sequencer also improves upon the HTMLTrackElement in other respects. In particular, the timing of emitted events is much more precise.

### Structure
[Top][]

The generic structure of mediascape repositories is:

  * API: The JavaScript API.
  * complements: additional elements for extra and optional features.
  * helloworld: minimal sample code.

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
[Authors]: #authors
[License]: #license
