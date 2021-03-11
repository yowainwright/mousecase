![MouseCase](https://yowainwright.imgix.net/mousecase/mousecase.jpg?auto=format)

# Mousecase 🖱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/mousecase.svg)](https://badge.fury.io/js/mousecase)

Mousecase is a JavaScript utility supporting touch-like horizontal scrolling with a mouse!
It is a no-nonsense, 0 dependency JavaScript plugin that solves 1 use case:

> Scrolling a horizontal browser window plain with a mouse **without** using a scrollbar.

## Synopsis

Being able to horizontally scroll is a default behavior on phones and with trackpads. With Mousecase, the archaic computer mouse pad can keep up! Yay. Users can click down on their computer mouse pad and drag scrollable horizontal browser window content without a scrollbar. This utility can help remove the need to implement a slider or carousel thingy. Therefore, it basically saves lives!

## Setup

Install it!

```javascript

yarn mousecase -D

```

Use it!

```javascript

import mouseCase from 'mousecase'

const mousecase = mouseCase('some-selector')
mousecase.init()

```

That's it! Are you happier now that your customer can scroll horizontal web browser interfaces with a mouse pad just like they are on their phone? I hope so. If not, I'm not a shrink so I can't help you but I empathize—life's tough.

## API

Listed below is the small API that Mousecase provides to use it.

### MouseCase

MouseCase itself is a factory that takes in 2 arguments.

#### `Arguments`

**`target`** an `string` or `node` that is selected to use mousecase; is required
> **ex:** `mouseCase('some-target')`

**`options`:** `{object}` containing plugin config
> **ex:** `mouseCase('some-target', { cssClass: 'mousecase-fun' })`

- **`activeClass`** the css class added to the mousecase target element when mousecase is active
- **`cssClass`:** the css class added to the mousecase target element
- **`el`** the formatted target element
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

- Bill Murray [CodePen](https://codepen.io/yowainwright/pen/d2fa41088f4d40dd9dd55fa72d60441f)
- Please submit a PR with your demo [here](/pulls). 💕
