# @iamkhan21/media-query-js

Use like css media queries in code instead ResizeObserver

[![npm version](https://badgen.net/npm/v/@iamkhan21/media-query-js)](https://npm.im/@iamkhan21/media-query-js) [![npm downloads](https://badgen.net/npm/dm/@iamkhan21/media-query-js)](https://npm.im/@iamkhan21/media-query-js)

## Install

```bash
npm i @iamkhan21/media-query-js
```

## Usage

```ts
import { MediaQuery } from "@iamkhan21/media-query-js";

const query = "(max-width: 768px)";
function onChange(matches: boolean) {
  console.log(`Screen width is ${matches ? "less" : "more"} than 768px`);
}

// You will recieve match result after class initialization
const mq = new MediaQuery(query, onChange);
// For screen width more than 768px
// console.log("Screen width is more than 768px")

// Also you can subscribe and track width changes
mq.on();

// To unsubscribe call next:
mq.off();
```
