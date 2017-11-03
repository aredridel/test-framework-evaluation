const test = require('tap').test
const dummy = require('./dummy')

test('A test', async function (t) {
    t.is(await dummy(), "test")
    t.end()
})
