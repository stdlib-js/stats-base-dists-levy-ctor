/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-levy-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-levy-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-levy-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-levy-cdf' );
var pdf = require( '@stdlib/stats-base-dists-levy-pdf' );
var variance = require( '@stdlib/stats-base-dists-levy-variance' );
var entropy = require( '@stdlib/stats-base-dists-levy-entropy' );
var stdev = require( '@stdlib/stats-base-dists-levy-stdev' );
var median = require( '@stdlib/stats-base-dists-levy-median' );
var mode = require( '@stdlib/stats-base-dists-levy-mode' );
var mean = require( '@stdlib/stats-base-dists-levy-mean' );
var Levy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Levy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `mu` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Levy( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `c` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Levy( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `mu` and `c`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Levy( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var levy = new Levy();
	t.strictEqual( levy instanceof Levy, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var levy = new Levy( 2.0, 4.0 );
	t.strictEqual( levy instanceof Levy, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var levy = Levy();
	t.strictEqual( levy instanceof Levy, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	levy = Levy( 2.0, 4.0 );
	t.strictEqual( levy instanceof Levy, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var levy;

	levy = new Levy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( levy, 'mu' ), true, 'has property' );
	t.strictEqual( levy.mu, 2.0, 'returns expected value' );

	levy.mu = 3.0;
	t.strictEqual( levy.mu, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var levy = new Levy();
			levy.mu = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `c`', function test( t ) {
	var levy;

	levy = new Levy( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( levy, 'c' ), true, 'has property' );
	t.strictEqual( levy.c, 4.0, 'returns expected value' );

	levy.c = 3.0;
	t.strictEqual( levy.c, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `c` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var levy = new Levy();
			levy.c = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'entropy' ), true, 'has property' );

	levy = new Levy();
	t.strictEqual( levy.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'mean' ), true, 'has property' );

	levy = new Levy();
	t.strictEqual( levy.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'median' ), true, 'has property' );

	levy = new Levy( 5.0, 2.0 );
	t.strictEqual( levy.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'mode' ), true, 'has property' );

	levy = new Levy( 2.0, 3.0 );
	t.strictEqual( levy.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'stdev' ), true, 'has property' );

	levy = new Levy( 3.0, 1.0 );
	t.strictEqual( levy.stdev, stdev( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var levy;

	t.strictEqual( hasOwnProp( Levy.prototype, 'variance' ), true, 'has property' );

	levy = new Levy( 3.0, 1.0 );
	t.strictEqual( levy.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var levy;
	var y;

	t.strictEqual( hasOwnProp( Levy.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Levy.prototype.cdf ), true, 'has method' );

	levy = new Levy();
	y = levy.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var levy;
	var y;

	t.strictEqual( hasOwnProp( Levy.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Levy.prototype.logcdf ), true, 'has method' );

	levy = new Levy();
	y = levy.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var levy;
	var y;

	t.strictEqual( hasOwnProp( Levy.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Levy.prototype.logpdf ), true, 'has method' );

	levy = new Levy();
	y = levy.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var levy;
	var y;

	t.strictEqual( hasOwnProp( Levy.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Levy.prototype.pdf ), true, 'has method' );

	levy = new Levy();
	y = levy.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var levy;
	var y;

	t.strictEqual( hasOwnProp( Levy.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Levy.prototype.quantile ), true, 'has method' );

	levy = new Levy();
	y = levy.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
