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

var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var uniform = require( '@stdlib/random-base-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;
var Levy = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var i;

	len = 100;
	mu = new Float64Array( len );
	c = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		mu[ i ] = uniform( EPS, 10.0 );
		c[ i ] = uniform( EPS, 20.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Levy( mu[ i % len ], c[ i % len ] );
		if ( !( dist instanceof Levy ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Levy ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:mu', function benchmark( b ) {
	var dist;
	var mu;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	dist = new Levy( mu, c );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.mu;
		if ( y !== mu ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set:mu', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	y = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = y[ i % len ];
		if ( dist.mu !== y[ i % len ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:c', function benchmark( b ) {
	var dist;
	var mu;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	dist = new Levy( mu, c );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.c;
		if ( y !== c ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set:c', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	y = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.c = y[ i % len ];
		if ( dist.c !== y[ i % len ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':entropy', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.entropy;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mean', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.mean;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':median', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.median;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.mode;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':stdev', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.stdev;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':variance', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var x;
	var c;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % len ];
		y = dist.variance;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':cdf', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var x;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.cdf( x[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':logpdf', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var x;
	var y;
	var i;

	mu = 1.0;
	c = 2.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpdf( x[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':pdf', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var x;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pdf( x[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':quantile', function benchmark( b ) {
	var dist;
	var len;
	var mu;
	var c;
	var x;
	var y;
	var i;

	mu = 2.0;
	c = 3.0;
	len = 100;
	x = new Float64Array( len );
	dist = new Levy( mu, c );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.quantile( x[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
