/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.nextTick = require('../..');

/*!
 * Helper to load internals for cov unit tests
 */

function req (name) {
  return process.env.nextTick_COV
    ? require('../../lib-cov/nextTick/' + name)
    : require('../../lib/nextTick/' + name);
}

/*!
 * Load unexposed modules for unit tests
 */

global.__nextTick = {};
