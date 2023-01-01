<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Lévy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Lévy distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Levy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Levy = require( 'path/to/vendor/umd/stats-base-dists-levy-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Levy;
})();
</script>
```

#### Levy( \[mu, c] )

Returns a [Lévy][levy-distribution] distribution object.

```javascript
var levy = new Levy();

var median = levy.median;
// returns ~2.198
```

By default, `mu = 0.0` and `c = 1.0`. To create a distribution having a different `mu` (location parameter) and `c` (scale parameter), provide the corresponding arguments.

```javascript
var levy = new Levy( 2.0, 4.0 );

var median = levy.median;
// returns ~10.792
```

* * *

## levy

A [Lévy][levy-distribution] distribution object has the following properties and methods...

### Writable Properties

#### levy.mu

Location parameter of the distribution.

```javascript
var levy = new Levy();

var mu = levy.mu;
// returns 0.0

levy.mu = 3.0;

mu = levy.mu;
// returns 3.0
```

#### levy.c

Scale parameter of the distribution. `c` **must** be a positive number.

```javascript
var levy = new Levy( 2.0, 4.0 );

var c = levy.c;
// returns 4.0

levy.c = 3.0;

c = levy.c;
// returns 3.0
```

* * *

### Computed Properties

#### Levy.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var levy = new Levy( 4.0, 12.0 );

var entropy = levy.entropy;
// returns ~5.809
```

#### Levy.prototype.mean

Returns the [expected value][expected-value].

```javascript
var levy = new Levy( 4.0, 12.0 );

var mu = levy.mean;
// returns Infinity
```

#### Levy.prototype.median

Returns the [median][median].

```javascript
var levy = new Levy( 4.0, 12.0 );

var median = levy.median;
// returns ~30.377
```

#### Levy.prototype.mode

Returns the [mode][mode].

```javascript
var levy = new Levy( 4.0, 12.0 );

var mode = levy.mode;
// returns 8.0
```

#### Levy.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var levy = new Levy( 4.0, 12.0 );

var s = levy.stdev;
// returns Infinity
```

#### Levy.prototype.variance

Returns the [variance][variance].

```javascript
var levy = new Levy( 4.0, 12.0 );

var s2 = levy.variance;
// returns Infinity
```

* * *

### Methods

#### Levy.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var levy = new Levy( 2.0, 4.0 );

var y = levy.cdf( 2.5 );
// returns ~0.005
```

#### Levy.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var levy = new Levy( 2.0, 4.0 );

var y = levy.logcdf( 2.5 );
// returns ~-5.365
```

#### Levy.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var levy = new Levy( 2.0, 4.0 );

var y = levy.logpdf( 2.2 );
// returns ~-7.812
```

#### Levy.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var levy = new Levy( 2.0, 4.0 );

var y = levy.pdf( 2.5 );
// returns ~0.041
```

#### Levy.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var levy = new Levy( 2.0, 4.0 );

var y = levy.quantile( 0.5 );
// returns ~10.792

y = levy.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var levy = new Levy( 2.0, 4.0 );

var mean = levy.mean;
// returns Infinity

var median = levy.median;
// returns ~10.792

var s2 = levy.variance;
// returns Infinity

var y = levy.cdf( 20.0 );
// returns ~0.637

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-levy-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-levy-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-levy-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-levy-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-levy-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-levy-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-levy-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-levy-ctor/main/LICENSE

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
