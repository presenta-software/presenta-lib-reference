---
title: Guide
---

# Guide

In this section you'll learn the basics of **PRESENTA Lib**.

[[toc]]

## Installation

You can start with the library in several ways depending of your favorite setup.

### Playground

This is the quickest way to get started using our hosted [playground tool](https://play.presenta.cc) where you can play with **PRESENTA Lib** using **Markdown**, **Text**, **JSON**, **YAML** or **Javascript** code, your call!

### Local starterkit

You can download this [zip](https://github.com/presenta-software/presenta-lib-starterkit/archive/master.zip) that contains a **markdown based** setup with an example you can edit locally. 

### Remote starterkit

You can start with a **config based** example by forking this [Codepen](https://codepen.io/abusedmedia/full/ZEOWyqM), [Glitch](https://glitch.com/edit/#!/presenta-starterkit?path=config.js),[Repl](https://repl.it/@fabiofranchino/presenta-starterkit#config.js) or [CodeSandox](https://codesandbox.io/s/presenta-starterkit-o2oif) project. This is a bit more technical that the previous one since you have to deal with the JSON object. 

### Unpkg

If you want to include it in an existing HTML file quickly:

```html
<script src="https://unpkg.com/@presenta/lib"></script>
```

### Npm+ES6

If you have a local development toolchain up and running:

```shell
npm install @presenta/lib
```

then include in the browser with:

```html
<script src="/node_modules/@presenta/lib/dist/presenta.min.js"></script>
```

or using with a ES6 bundler:

```js
import * as Presenta from '@presenta/lib'
```



## Getting started with the config

First thing first: each **PRESENTA Lib** document requires an HTML wrapper:

```html
<div id="app"></div>
```

Then, bind it (passing both a selector or a DOM node) with the config object: 

```js
new Presenta('#app', {
    scenes: []
})
```

Add a `scene`, an object that contains, at least, the `blocks` array:

```js
new Presenta('#app', {
    scenes: [{
    	blocks:[]
    }]
})
```

A `block` object is the minimal unit of content. The are many block **types**,  `text` is one of them:

```js
new Presenta('#app', {
    scenes: [{
      blocks:[{
        type: 'text',
        text: '<h1>Welcome PRESENTA</h1>'
      }]
    }]
})
```

::: tip TEXT Block and HTML

The built-in `text` block renders a subset of HTML tags properly. However, there is a markdown-to-HTML  [plugin](/plugins/#controllers) to avoid writing raw tags.

:::

## Blocks and content types

Each `scene` can include one or more blocks.  A `block` is responsible to render a specific content or media, such as `text`, `image` or `video`.

**PRESENTA Lib** includes the following built-in blocks you can explore briefly here:

<pDemoBlockText />

<br />

<pDemoBlockImage />

<br />

<pDemoBlockVideo />

<br />

<pDemoBlockEmbed />

<br />

<pDemoBlockSvg />



You can find additional block types [here](/plugins/#blocks) as external plugins.

To learn more about each block specific settings, jump to [this section](/reference/#blocks) of the Reference.

## Controls and behaviors

**PRESENTA Lib** comes with an internal `router` that can be configured and extended by means of `controllers`. A controller can provide also global functionality and behaviors that are independent of the routing activity.

Controllers config live in their proper field:

```js
{
  scenes:[...],
  controllers: {
    keyboard: true,
    arrows: true,
    ...
  },
}
```

To learn more about the available controllers and their specific settings, jump to [this section](/reference/#controllers) of the Reference.



## Styles and Transitions

A **PRESENTA Lib** document can be styled by leveraging the combination of some properties:

```javascript
new Presenta('#app', {
  	colors: 'adele',
  	fonts: 'duck',
  	colorVar: 'alt',
  	transition: 'hSlide',
    scenes:[...]
})
```

Refer to [this section](/reference/#styles) of the Reference to learn about the available values.





## Property inheritance 

An important concept to remember is the properties inheritance depending where they are set. Any **property** (be aware, not **option**) can be set at **presentation** level, **scene** level and **block** level as well. The more specific place, the higher priority, just like CSS.

On the other hand, options are context specific, therefore, they don't inherit from higher levels.



