# Test Frameworks

## AVA

Pros

- Modern JS support
- Clean handling of promises and async functions
- Easy to add code coverage with `nyc`
- Multiple failures per test, since assertions don't throw

Middling

- Has a nice watch mode (if you go all in on ava)

Cons

- No browser testing
- Have to use their test runner to run anything
- Big

Run the demo

```
nyc ava test-ava.js
```

## Tap / Tape

Pros

- Lots of tools can parse its outputs and do things with them
- Interface into test files is super simple
- Test files can just be run
- Test files & support code can be shared with browser tests in tape
- Can launch browser testing with tape
- Easy to plumb into things
- Supports code coverage built in via `nyc`
- Multiple failures per test, since assertions don't throw
- Supported by npm and the maintainers of istanbul/nyc

Middling

- Adequate ways to deal with promises

Cons

- Big
- Tests require a little explicit "I'm done" to handle asynchrony

Run the demo

```
tap --coverage test-tap.js
```

Browser demo

```
rollup -c --input test-tape.js | testling -x '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --headless'
```

## Mocha

Pros

- The most commonly used framework in javascript land
- Bring your own assertion libraries
- Bring code coverage with `nyc`

Middling

- Odd describe/it syntax for describing tests
- Some magic with what parameters a function takes and returns to change behavior
- Browser testing requires building a little tooling

Cons

- You only get a single assertion failure per test
- You have to start tests with their runner
- Transpiling code requires mocha-specific plugins
- Environment is a little different than where code will execute natively

Run the demo:

```
nyc mocha test-mocha.js
```

## Jasmine

Pros

- Bring your own assertion libraries
- Supported by Pivotal Labs

Middling

- Odd describe/it syntax for describing tests
- Browser testing requires building a little tooling

Cons

- You only get a single assertion failure per test
- You have to start tests with their runner
- Environment is a little different than where code will execute natively

Run the demo

```
jasmine test-jasmine.js
```

Browser test

```
rollup -c --input test-jasmine.js --output test-jasmine.browser.js && karma start --single-run --browsers ChromeCanaryHeadless
```

# Conclusions

Given this, I'd lean to `tap` and `tape`, or `jasmine`

Jasmine is pretty cohesive, and supports browser testing well.

Karma as a test runner is a clear winner; `testling` works with `tap` and `tape` but is a bit hacky.

Rollup makes a lot of things work well.

Enzyme was a non-starter due to being react-focused. Ava's lack of browser support is a no-go.
