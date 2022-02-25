// @ts-check
/* eslint-disable */

// Closure 의 갯수는 ?
function foo() {
  function bar() {}
  function baz() {}
}
foo()
// 3개

function foo() {
  function bar() {}
  function baz() {}
}
foo()
foo()
// 5개

// Closure 예시1 - counter
function getCounter() {
  var result = {
    count: count,
    total: 0,
  }

  function count() {
    result.total += 1
  }

  return result
}

var counter = getCounter()
counter.count()
counter.count()

console.log(counter.total)
