# µce with Svelte and TypeScript

[µce](https://github.com/WebReflection/uce) is a tiny helper library to create Custom Elements. This example project helps to set up a project using µce together with Svelte/TypeScript.

- [Use with Svelte (or SPA libraries)](#use-with-svelte-or-spa-libraries)
- [Repo setup](#repo-setup)
- [Run and build](#run-and-build)
- [What about Internet Explorer?](#what-about-internet-explorer)
- [See also](#see-also)



## Use with Svelte (or SPA libraries)

Using Custom Elements as HTML elements, the typing in the µce definition object would get lost. For example, it would be valid to use a component prop that isn't specified:

```tsx
<my-counter counter={99}></my-counter>
```

When using Svelte, you can preserve typing by using a thin wrapper around the Custom Element:

```html
<script lang="ts" context="module">
  import { define } from 'uce';
  import { MyCounter } from "../uceElements/MyCounter";

  // Create the Custom Element so that we can use
  // <my-counter></my-counter>
  define('my-counter', MyCounter);
</script>
  
<script lang="ts">
  import type { Props } from "../uceElements/MyCounter";
  
  // Validate exported props against the uce type definition
  export let count: Props["count"] = 0;
</script>

<my-counter count={count} />
```

Now the wrapped Custom Element can be used as a typed component:

```tsx
<MyCounter count={99} />
```


## Repo setup

This repo was initially created with `npx degit sveltejs/template svelte-typescript-app`.

The example component is a simple (and slightly modified) counter that is used on [webcomponents.dev](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) to compare Web Component libraries.

1. Clone this repository
2. `cd uce-svelte-typescript`
3. `npm install`


## Run and build

* `npm run dev` - runs the dev server on port `3000`
* `npm run build` - creates `bundle.js` in `public/build`
* `npm run serve` - runs a server on `public`


## What about Internet Explorer?

Svelte and IE 11 - I haven't figured it out yet. 


## See also

* [uce-starter-typescript-rollup](https://github.com/ArthurClemens/uce-starter-typescript-rollup)
* [µce](https://github.com/WebReflection/uce)
