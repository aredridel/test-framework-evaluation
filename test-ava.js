import test from 'ava'
import dummy from './dummy'

test('A test', async function (t) {
    t.is(await dummy(), "test");
})
