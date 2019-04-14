# Mousecase

Mousecase provides touch-like horizontal scrolling in for mouse pads in web browsers.
It is a no-nonsense, 0 dependency JavaScript plugin that solves 1 use case:

> Scrolling a horizontal browser window plain with a mouse **without** using a scrollbar.

## Synopsis

Being able to horizontally scroll is a default behavior on phones and with trackpads. With Mousecase, the archaic computer mouse pad can keep up! Yay. Users can click down on their computer mouse pad and drag scrollable horizontal browser window content without a scrollbar. This utility can help remove the need to implement a slider or carousel thingy. Therefore, it basically saves lives!
Do you want to be saved? Great! Use Mousecase and become a happier engineer today. You can use it tomorrow too. Probably.

## Why wouldn't I write these few lines of code myself?

Why **would** you write these few lines code yourself when you can use Mousecase and have a few more lines of code for **free**?

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

**`target`** an `string` or `node` that is selected to use mousecase
> **ex:** `mouseCase('some-target')`

**`props`:** `{object}` containing plugin config
> **ex:** `mouseCase('some-target', { cssClass: 'mousecase-fun' })`

- **`cssClass`:** the css class adds to the target element
- **`rule`:** a boolean rule that defines whether mousecase should run (or not)

## Demos

Listed below is a basic Mousecase demo. Feel free to share more.

- Bill Murray [CodePen](https://codepen.io/yowainwright/pen/d2fa41088f4d40dd9dd55fa72d60441f)
- Please submit a PR with your demo [here](/pulls). 💕

## Roadmap

Performance improvements

- Provide slight configurable delay to dragging
- Provide a threshold for accidental dragging

Testing

- implement puppeteer to test MouseCase

