module.exports = process.env.nextTick_COV
  ? require('./lib-cov/nextTick')
  : require('./lib/nextTick');
