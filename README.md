![MouseCase](https://yowainwright.imgix.net/mousecase/mousecase.jpg?auto=format)

---


[![CircleCI](https://circleci.com/gh/yowainwright/mousecase.svg?style=svg)](https://circleci.com/gh/yowainwright/mousecase)
[![codecov](https://codecov.io/gh/yowainwright/generate-clean-number/branch/master/graph/badge.svg)](https://codecov.io/gh/yowainwright/mousecase)

---

# Mousecase

Mousecase is a JavaScript utility supporting touch-like horizontal scrolling with a mouse!
It is a no-nonsense, 0 dependency JavaScript plugin that solves 1 use case:

> Scrolling a horizontal section of a webpage with a mouse **without** using a scrollbar.

## Synopsis

Being able to horizontally scroll is a default behavior on phones and with trackpads. With Mousecase, the archaic computer mouse can keep up! Yay. Users can click down on their computer mouse and drag scrollable horizontal webpage content without a scrollbar. This utility can help remove the need to implement a slider or carousel thingy. Therefore, it basically saves lives.

## Setup

Install it!

```javascript

yarn mousecase -D

```

Use it!

```javascript

import mousecase from 'mousecase'

const someMouseCaseInstance = mousecase('some-selector')
someMouseCaseInstance.init()

```

That's it! Are you happier now that people that use your webpage can scroll horizontal web browser interfaces with a mouse pad just like they are on their phone? I hope so. If not, I'm not a shrink so I can't help you but I empathize—life's tough.

## API

Listed below is the small API that Mousecase provides to use it.

### MouseCase Factory

MouseCase itself is a factory function that takes in 2 arguments.

#### `Arguments`

**`target`:** an `string` or `node` that is selected to use mousecase; is required
> **ex:** `const someMouseCaseInstance = mousecase('some-target')`

**`props`:** `{object}` containing plugin config
> **ex:** `someMouseCaseInstance = mousecase('some-target', { cssClass: 'mousecase-fun' })`

- **`activeClass`:** the css class added to the mousecase target element when mousecase is active
- **`cssClass`:** the css class added to the mousecase target element
- **`el`:** the formatted target element
- **`rule`:** a boolean rule that defines whether mousecase should run (or not)

- all **`props`** are added as defaults if not provided during setup

#### `Methods`

**`init()`** initiates mousecase (setup).
> **ex:** `someMouseCaseInstance.init()`

**`on()`** turns mousecase back on (after initiation)
> **ex:** `someMouseCaseInstance.on()`

**`off()`** turns mousecase off (after initiation)
> **ex:** `someMouseCaseInstance.off()`

- There are other methods used within Mousecase but not intended for general use

## Demos

Listed below is a basic Mousecase demo. Feel free to share more.

- Bill Murray single instance [CodePen](https://codepen.io/yowainwright/pen/d2fa41088f4d40dd9dd55fa72d60441f)
- Bill Murray multiple instances [CodePen](https://codepen.io/yowainwright/pen/3d442391a2e4370da4b12e7f16fddeaf)
- Please submit a PR with your demo [here](/pulls). 💕

## Help and thanks

Mousecase was made for ease of use, not to change the world. This utility addresses a common user experience issue. Please help if you'd like! You will get praise and love to the best of my ability with and updates or ideas that you have.
