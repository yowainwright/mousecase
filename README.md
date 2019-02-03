# Mousecase

Mousecase provides the mouse device support for touch-like and trackpad-like horizontal scrolling in web browsers.
It is a no-nonsense, 0 dependency JavaScript plugin that solves this 1 use case:

> Scrolling a horizontal browser window plain with a mouse **without** using a scrollbar.

## Synopsis

Beings able to scroll a horizontal browser window plain without a mouse is expected on phones and with trackpads by a user dragging with their fingers. Now with Mousecase, the archaic computer mouse can keep up! Yay. Users can click down on their computer mouse and drag scrollable horizontal browser window content without a scrollbar. This utility can help remove the need to implement a slider or carousel thingy. Therefore, it basically saves lives!
Do you want to be saved? Great! Use Mousecase and become a happier engineer today. You can use it tomorrow too, probably.

## Why wouldn't I write these few lines of code myself?

Why **would** you write these few lines code yourself when you can use Mousecase and have a few more lines of code for **free**?

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

Listed below is the small API that Mousecase provides to use it.

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

Listed below are a few demos.

- Bill Murray [CodePen](https://codepen.io/yowainwright/pen/d2fa41088f4d40dd9dd55fa72d60441f)
- Please submit a PR with your demo [here](/pulls). 💕

## Roadmap

Performance improvements

- Provide slight configurable delay to dragging
- Provide a threshold for accidental dragging

Testing

- implement puppeteer to test MouseCase

