// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-obj-prop-id.case
// - src/dstr-binding/default/for-await-of-async-func-var.template
/*---
description: BindingElement with object binding pattern and initializer is not used (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
info: |
    IterationStatement :
        for await ( var ForBinding of AssignmentExpression ) Statement

    [...]
    2. Return ? ForIn/OfBodyEvaluation(ForBinding, Statement, keyResult,
        varBinding, labelSet, async).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. Let destructuring be IsDestructuring of lhs.
    [...]
    6. Repeat
       [...]
       j. If destructuring is false, then
          [...]
       k. Else
          i. If lhsKind is assignment, then
             [...]
          ii. Else if lhsKind is varBinding, then
              1. Assert: lhs is a ForBinding.
              2. Let status be the result of performing BindingInitialization
                 for lhs passing nextValue and undefined as the arguments.
          [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    [...]
    2. If iteratorRecord.[[done]] is true, let v be undefined.
    3. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be ? GetValue(defaultValue).
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.
---*/

var iterCount = 0;

async function fn() {
  for await (var [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] of [[{ u: 777, w: 888, y: 999 }]]) {
    assert.sameValue(v, 777);
    assert.sameValue(x, 888);
    assert.sameValue(z, 999);

    assert.throws(ReferenceError, function() {
      u;
    });
    assert.throws(ReferenceError, function() {
      w;
    });
    assert.throws(ReferenceError, function() {
      y;
    });

    iterCount += 1;
  }
}

fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);

