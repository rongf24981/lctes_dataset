function __STRING_ARRAY__() {
  const _0x32c4c9 = ['3BUvPOY', '6fUSptL', '7312280JftHqJ', '53996734CHbjyD', 'push', '4xwWCye', 'readline', '12670ATyhXb', '9315UobQqu', 'stdin', 'log', 'Yes', '1607887JSKxMI', 'split', '3907166gFoYlo', 'line', '1090070qzLyfi', 'stdout', '6789559doegfR', 'createInterface', '12IcgaGX', 'close'];
  __STRING_ARRAY__ = function () {
    return _0x32c4c9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(qAjHOp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x150;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qAjHOp, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x152)) / 0x1 + parseInt(__DECODE_0__(0x154)) / 0x2 * (-parseInt(__DECODE_0__(0x15c)) / 0x3) + parseInt(__DECODE_0__(0x161)) / 0x4 * (parseInt(__DECODE_0__(0x156)) / 0x5) + -parseInt(__DECODE_0__(0x15d)) / 0x6 * (parseInt(__DECODE_0__(0x158)) / 0x7) + -parseInt(__DECODE_0__(0x15e)) / 0x8 + -parseInt(__DECODE_0__(0x164)) / 0x9 * (-parseInt(__DECODE_0__(0x163)) / 0xa) + -parseInt(__DECODE_0__(0x15f)) / 0xb * (-parseInt(__DECODE_0__(0x15a)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf25c7);
let lines = [];
let reader = require(__DECODE_0__(0x162))[__DECODE_0__(0x159)]({
  'input': process[__DECODE_0__(0x165)],
  'output': process[__DECODE_0__(0x157)]
});
reader['on'](__DECODE_0__(0x155), function (line) {
  lines['push'](line);
});
reader['on'](__DECODE_0__(0x15b), function () {
  let d1 = [];
  let d2 = [];
  const n = lines[0x0];
  let zorome = 'No';
  for (let i = 0x1; i < n; i++) {
    d1[__DECODE_0__(0x160)](lines[i][__DECODE_0__(0x153)]('\x20')[0x0]);
    d2[__DECODE_0__(0x160)](lines[i][__DECODE_0__(0x153)]('\x20')[0x1]);
  }
  for (let i = 0x0; i < n - 0x2; i++) {
    if (d1[i] == d2[i]) {
      if (d1[i + 0x1] == d2[i + 0x1]) {
        if (d1[i + 0x2] == d2[i + 0x2]) {
          zorome = __DECODE_0__(0x151);
          break;
        }
      }
    }
  }
  console[__DECODE_0__(0x150)](zorome);
});
