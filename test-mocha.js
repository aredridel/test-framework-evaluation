const assert = require('assert');
const dummy = require('./dummy')

describe('A test group', function () {
    it('A test', async function () {
        assert.equal(await dummy(), "test")
    })
})
