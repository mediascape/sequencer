<!--
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
-->


# Sequencer

In this folder you will find the Sequencer library developed for [MediaScape project](http://mediascapeproject.eu/).

## Navigation
[Goals][] | [Dependencies][] | [Structure][] | [Documentation][] | [Authors][] | [License][]

### Goals
[Top][]

MediaScape targets applications that provide shared experiences across multiple devices.

This library provides a generic mechanism for timing-sensitive execution of timed data. 

Timed data is data associated with an interval or a point, for example (23.2,24.8) or (12.4). The Sequencer is driven by an explicit timing source (not system clock) and its main function is to emit "enter" and "exit" events for timed data, at the correct time (according to its timing source). So, in the above example, if an advancing timing source reaches 23.2, an "enter" event must be emitted, and a little later the timing source reaches 24.8 the corresponding "exit" event must also be emitted, unless the timing source have been paused in the mean time. This function makes the Sequencer similar to a HTMLTrackElement used to time-align subtitles with a playing video. However, unlike the HTMLTrackElement, the Sequencer does NOT use a HTMLMediaElement as timing source. Instead, the Sequencer uses Shared Motion, a generic, multi-device timing mechanism for the Web. This way, the Sequencer becomes a generic building block for timed execution in multi-device Web applications. The Sequencer also improves upon the HTMLTrackElement in several other respects. Here's a list of reasons why you should consider using the Sequencer.

- Sequencer uses Shared Motion as timing source
  - Shared Motion does not require any (master) audio/video element for playback, implying applicability for timed presentations which do not include audio/video
  - Shared Motion provides a more precise timing model than the HTMLMediaElement
  - Shared Motion provides a wide set of navigational primitives, e.g. step-wise, slow-motion, backwards or acceleration. 
  - Shared Motion enables time-coordinated playback (synchronization) with multiple video/audio elements (using Shared Motion Media Sync library)
  - Shared Motion enables multi-device playback for any connected Web client (globally).
  - Shared Motion is proposed for standardization as HTMLTimingObject by W3C Multi-device Timing Community Group   

- Sequencer emits events more precisely than say HTMLTrackElement - typically correct down to a single millisecond, whereas HTMLTrackElement may be off by hundreds of milliseconds.
- Sequencer logic proposed for standardization by W3C Multi-device Timing Community Group as extension on HTMLTextTracks. This is the reference implementation.
- Sequencer is data-independent, implying that applications are not required to adopt a specific data format for timed data. It also implies that any data can be timed and visualized, in particular arbitrary application specific JSON data.
- Sequencer is UI-independent, implying full freedom with respect to visualization. Crafting application specific timed-visualizations requires only basic Web programming skills.
- Sequencer encapsulates all the complexity of timing, allowing programmers to focus on UI design.
- Sequencer is generic and supports any timed data as long as timing aspects can be mapped to singular points in time or time-intervals.
- Sequencer has full support for dynamic data, allowing the timing aspects of data to be changed safely during playback, without introducing any extra complexity for the programmer.
- Sequencer is fun and easy to use.


### Dependencies
[Top][]

The Sequencer implementation depends on the MediaScape Shared Motion API as timing source. Shared Motions are implemented and provided by Motion Corporation http://motioncorporation.com. Shared Motion is currently prepared for standardization by W3C Multi-device Timing Community Group https://www.w3.org/community/webtiming/.  Current demoes are set up to use a single, public motion. For further experimentation with the Sequencer, please create a developer account and create your motions at Motion Corporation http://dev.motioncorporation.com.

Sequencer and Shared Motion are vanilla JavaScript and should run in every modern browser.

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
Author : Ingar Mæhlum Arntzen

The Sequencer is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

The Sequencer is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with the Sequencer.  If not, see <http://www.gnu.org/licenses/>.


[Top]: #navigation
[Goals]: #goals
[Dependencies]: #dependencies
[Structure]: #structure
[Documentation]: #documentation
[Authors]: #authors
[License]: #license
