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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-levy-entropy' );
var mean = require( '@stdlib/stats-base-dists-levy-mean' );
var median = require( '@stdlib/stats-base-dists-levy-median' );
var mode = require( '@stdlib/stats-base-dists-levy-mode' );
var stdev = require( '@stdlib/stats-base-dists-levy-stdev' );
var variance = require( '@stdlib/stats-base-dists-levy-variance' );
var cdf = require( '@stdlib/stats-base-dists-levy-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-levy-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-levy-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-levy-pdf' );
var quantile = require( '@stdlib/stats-base-dists-levy-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function levyCDF( x ) {
	return cdf( x, this.mu, this.c );
}

/**
* Evaluates the logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function levyLogCDF( x ) {
	return logcdf( x, this.mu, this.c );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function levyLogPDF( x ) {
	return logpdf( x, this.mu, this.c );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function levyPDF( x ) {
	return pdf( x, this.mu, this.c );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function levyQuantile( p ) {
	return quantile( p, this.mu, this.c );
}


// MAIN //

/**
* Lévy distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [c=1.0] - scale parameter
* @throws {TypeError} `c` must be a positive number
* @returns {Levy} distribution instance
*
* @example
* var levy = new Levy( 1.0, 1.0 );
*
* var y = levy.cdf( 3.0 );
* // returns ~0.48
*
* var v = levy.mode;
* // returns ~1.333
*/
function Levy() {
	var mu;
	var c;
	if ( !(this instanceof Levy) ) {
		if ( arguments.length === 0 ) {
			return new Levy();
		}
		return new Levy( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		c = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( c ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', c ) );
		}
	} else {
		mu = 0.0;
		c = 1.0;
	}
	defineProperty( this, 'mu', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mu;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			mu = value;
		}
	});
	defineProperty( this, 'c', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return c;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			c = value;
		}
	});
	return this;
}

/**
* Lévy distribution differential entropy.
*
* @name entropy
* @memberof Levy.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.entropy;
* // returns ~5.809
*/
setReadOnlyAccessor( Levy.prototype, 'entropy', function get() {
	return entropy( this.mu, this.c );
});

/**
* Lévy distribution expected value.
*
* @name mean
* @memberof Levy.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.mean;
* // returns Infinity
*/
setReadOnlyAccessor( Levy.prototype, 'mean', function get() {
	return mean( this.mu, this.c );
});

/**
* Lévy distribution median.
*
* @name median
* @memberof Levy.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.median;
* // returns ~30.377
*/
setReadOnlyAccessor( Levy.prototype, 'median', function get() {
	return median( this.mu, this.c );
});

/**
* Lévy distribution mode.
*
* @name mode
* @memberof Levy.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.mode;
* // returns 8.0
*/
setReadOnlyAccessor( Levy.prototype, 'mode', function get() {
	return mode( this.mu, this.c );
});

/**
* Lévy distribution standard deviation.
*
* @name stdev
* @memberof Levy.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.stdev;
* // returns Infinity
*/
setReadOnlyAccessor( Levy.prototype, 'stdev', function get() {
	return stdev( this.mu, this.c );
});

/**
* Lévy distribution variance.
*
* @name variance
* @memberof Levy.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var levy = new Levy( 4.0, 12.0 );
*
* var v = levy.variance;
* // returns Infinity
*/
setReadOnlyAccessor( Levy.prototype, 'variance', function get() {
	return variance( this.mu, this.c );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Levy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var levy = new Levy( 2.0, 4.0 );
*
* var v = levy.cdf( 2.5 );
* // returns ~0.005
*/
setReadOnly( Levy.prototype, 'cdf', levyCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Levy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var levy = new Levy( 2.0, 4.0 );
*
* var v = levy.logcdf( 2.5 );
* // returns ~-5.365
*/
setReadOnly( Levy.prototype, 'logcdf', levyLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Levy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var levy = new Levy( 2.0, 4.0 );
*
* var v = levy.logpdf( 2.5 );
* // returns ~-3.186
*/
setReadOnly( Levy.prototype, 'logpdf', levyLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Levy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var levy = new Levy( 2.0, 4.0 );
*
* var v = levy.pdf( 2.5 );
* // returns ~0.041
*/
setReadOnly( Levy.prototype, 'pdf', levyPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Levy.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var levy = new Levy( 2.0, 4.0 );
*
* var v = levy.quantile( 0.5 );
* // returns ~10.792
*/
setReadOnly( Levy.prototype, 'quantile', levyQuantile );


// EXPORTS //

module.exports = Levy;
