# PostCSS Alter Selector [![Build Status][ci-img]][ci]

[PostCSS] plugin Alter selector for each rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ledniy/postcss-alter-selector.svg
[ci]:      https://travis-ci.org/ledniy/postcss-alter-selector

```css
.foo {
    /* Input example */
}

.foo, .bar {
    /* Input example */
}

.foo .bar .baz {
    /* Input example */
}

html .foo {
    /* Input example */
}
```

```css
.selector .foo {
  /* Output example */
}

.selector .foo, .selector .bar {
  /* Output example */
}

.foo .bar .baz {
    /* Output example */
    /* More than 1 selectors are ignored */
}

.selector .foo {
    /* Output example */
    /* html tag is stripped out */
}
```

## Usage

```js
postcss([ require('postcss-alter-selector')( { selector: '.selector ' } ) ])
```

See [PostCSS] docs for examples for your environment.
