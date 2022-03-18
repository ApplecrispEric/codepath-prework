# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Eric Brown**

Time spent: **3** hours spent in total

Link to project: [https://catnip-dark-meteoroid.glitch.me/](https://catnip-dark-meteoroid.glitch.me/)

It doesn't start with https://glitch.com... so I'm not totally sure if it is the correct link.

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- Added labels to the buttons that show which musical note they corresponded to.
- Changed the size of text on the page to make it more readable.
- Added an option to change the length of the game.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://recordit.co/llLodbiXnR)
![](http://recordit.co/NBERSjz9Yr)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- Mozilla JS Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- Google Hex Color Picker: https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enUS919US919&oq=hex+color+picker&aqs=chrome..69i57.3877j0j7&sourceid=chrome&ie=UTF-8
- Web Safe Fonts: https://www.w3schools.com/css//css_font_websafe.asp
- HTML Number Field: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
- JS Input Number: https://www.w3schools.com/jsref/prop_number_value.asp
- Parsing a String as Int: https://www.w3schools.com/jsref/jsref_parseint.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

A specific challenge that I encountered when I was creating this submission occured when I was trying to implement the random
sequence generation. I found out that the Math module in JS comes with a function to generate a random float from 0 to 1 using
the Mozilla JS Docs listed above. This is a problem because I needed a set of integers from 1 to 5 corresponding to the buttons
in the game, not a float. After looking through the Math module some more, I found that the .floor() method was just what I needed.
After I multiplied the float from .random(), I could then truncate the float with .floor() to turn it into an int. Because I am truncating,
there is a bias towards lower integers making 5 show up in the pattern much less often than 1 - 4 because .random() would have to generate 1
in order for 5 to show up in the pattern which is extremely unlikely. To work around this, I multiply the float by 5 first, truncate,
and then add 1 to get a range of 1 - 6. I then check if the number is 6, and reduce it to 5 in that case. This way, there is no bias for selecting the pattern
and index errors are prevented.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After working through this project, and being new to web development specifically, a few questions popped up:

- What does the workflow look like for creating and maintaining a website, and how does it differ for a team environment?
- How are elements on a website scaled and maintained to work on different devices such as a phone?
- How are animations implemented through Javascript? (i.e. moving elements as the page scrolls, pictures changing, etc.)
- How are accessablility features implemented for websites such as text-to-speech, touchscreen controls, or different languages?
- How does the backend connect with the frontend?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

Given more time for the project, I would've added a few more optional features. I would've added a timer for the user's answer that speeds up the longer the
game goes on and added a visual clock for that timer. I would've made the page prettier too and adjusted the colors and styling of the page while
keeping it easy to read. I would've also added different sounds for the buttons and maybe some pictures for the buttons as well. I think adding sounds
for when you win or lose the game would benefit the user experience as well. In terms of refactoring, I might've taken a look at the code to see if I could perhaps simplify it
and maybe added some more whitespace to make it even easier to read.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/f28ca7d387494eab8f6c8266d451dafd)

## License

    Copyright [Eric Brown]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
