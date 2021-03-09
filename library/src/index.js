

const asyncWrapper = async function() {
    return await import(/* webpackChunkName: "test-async-module" */ './async-module');
}

const test = require('@mihkeleidast/webpack-5-module');

module.exports.test = test;
module.exports.asyncTest = asyncWrapper();
