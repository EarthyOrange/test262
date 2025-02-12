// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.plaindateiso
description: TypeError thrown if timeZone.getOffsetNanosecondsFor is not callable
features: [BigInt, Symbol, Temporal, arrow-function]
---*/

[undefined, null, true, Math.PI, 'string', Symbol('sym'), 42n, {}].forEach(notCallable => {
  const timeZone = new Temporal.TimeZone("UTC");

  timeZone.getOffsetNanosecondsFor = notCallable;
  assert.throws(
    TypeError,
    () => Temporal.Now.plainDateISO(timeZone),
    `Uncallable ${typeof notCallable} ${notCallable} getOffsetNanosecondsFor should throw TypeError`
  );
});
