# Mousecase

Mousecase provides the mouse support for touch or trackpad-like horizontal scrolling in web browsers.
It is a no-nonsense, 0 dependency JavaScript plugin that solves a simple usecase:

> Scrolling a horizontal browser window plain with a mouse **without** using a scrollbar.

Beings able to scroll a horizontal browser window plain without a mouse is expected on phones and with trackpads by a user dragging with their fingers. Now, with Mousecase, the archaic computer mouse can keep up! Yay. Users can click down on their computer mouse and drag scrollable horizontal browser window content without a scrollbar. This utility can help remove the need to implement a slider or carousel thingy. Therefore, it basically saves lives!
Do you want to be saved? Great! Use Mousecase and become a happier engineer today. You can use it tomorrow too, probably.

## Why wouldn't I write these few lines of code myself?

Why **would** you write these few lines code yourself when you can use Mousecase and have a few more lines of code for **free**?

## Is it tested?

Hell no! Tests are coming soon.


## Setup

Install it!

```javascript

yarn mousecase -D

```

Use it!

```javascript

import MouseCase from 'mousecase'

const mousecase = new MouseCase('some-selector')

```

Das it! Are you happier now that your customer's scrollable horizontal web browser interfaces are congruent? I hope so. If not, I'm not a shrink so I can't help you but I empathize—life's tough.

## API

Listed below is the small API that mousecase provides to use it.

### MouseCase

MouseCase itself is a class that takes in 2 arguments.

#### `Arguments`

**`target`** an `string` or `node` that is selected to use mousecase
> **ex:** `new MouseCase('some-target')`

**`props`:** `{object}` containing plugin config
> **ex:** `new MouseCase('some-target', { debug: true })`

- **debug:** `boolean`
  > **ex:** `new MouseCase('some-target', { debug: true })`

## Demos

Listed below are demos...

- 1st hacky [codepen](https://codepen.io/yowainwright/pen/d2fa41088f4d40dd9dd55fa72d60441f)
