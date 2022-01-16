---
title: "rmidipy"
tags: ["python", "midi", "parser"]
personal: true
date: "2018-05-13"
---

It is personal project, github link can found here [rmidipy](https://github.com/rushike/rmidipy). 

This python library is intended to open midi files as python objects. Midi file is binary files, _list_ in form of tracks.
Every _track_ contains a sequence of __events__. Each __event__ is associated __*delta time*__, which refers to time from perivous 
event, current event should occur.

In same structure __*rmidi*__  has `MIDI` as base class, `MIDI.Track` for track representation and `MIDI.Track.Event` to represent each event.
## Getting Started
`rmidi` is available on `python pip`. You can install library through below command.
```cmd
    $ pip install rmidi
```
**rmidi** has two classes for handling the midi files `MIDI` and `AbsoluteMidi`, further documentation reveals out their differences. 
You can open `**.mid**` files with `MIDI` class only, which can transform to `AbsoluteMidi` class object

### Opening and Creating the midi file
```python
>>> from rmidi.midi import MIDI
>>> mid = MIDI.parse_midi(<midi-file-path>)
>>> # do any manupulation it
>>> mid.create_file(<midi-file-name>, <dir-path> = current-dir) # if dir is not specified file is store in current directory 
```

### Create **empty** Midi File
```python
>>> from rmidi.midi import MIDI
>>> mid = MIDI(empty = True) # creates file with, format_type = 0, track_count = 0, time_div = 0x1e0
>>> mid.create_file("empyty.mid")
```

### Add **note on/off event** to track
Below shows how to add any note to midi object, thing to note specifically here is every `note_on` event, there should always be `note_off` event. You can also disable `velocity`, to have note_off event
```python
>>> from rmidi.midi import MIDI
>>> mid = MIDI(empty = True, track_count = 0) # creates file with, format_type = 0,  time_div = 0x1e0
>>> mid.track(0).add_event(0, 'note_on', note_number = 60, velocity = 90, channel_no = 0) # add note with midi number 60 to track 0
>>> mid.track(0).add_event(4, 'note_off' note_number = 60, velocity = 90, channel_no = 0) # there should be coressponding note-off event assosiated with note-on
```
Here `note_on` and `note_off` event has same parameter structure, and everything in specified above. 
param structure `(time, event, note_number, velocity, channel_no)`.
```js
    time := delta time in traditional way of note presenting, as whole = 1, half = 2, quater = 4, and so on
```
