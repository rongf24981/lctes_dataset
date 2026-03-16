const a0_0x2b3c45 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x59e75e = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x59e75e(0xa8)) / 0x1 + -parseInt(_0x59e75e(0xa0)) / 0x2 * (-parseInt(_0x59e75e(0x9f)) / 0x3) + -parseInt(_0x59e75e(0x9c)) / 0x4 + -parseInt(_0x59e75e(0x98)) / 0x5 * (-parseInt(_0x59e75e(0x9a)) / 0x6) + parseInt(_0x59e75e(0x9d)) / 0x7 + -parseInt(_0x59e75e(0xa1)) / 0x8 + -parseInt(_0x59e75e(0x99)) / 0x9 * (parseInt(_0x59e75e(0xa6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdb3a4);
process['stdin'][a0_0x2b3c45(0xa7)]();
process[a0_0x2b3c45(0xa5)][a0_0x2b3c45(0x96)](a0_0x2b3c45(0xa9));
const reader = require(a0_0x2b3c45(0x9e))[a0_0x2b3c45(0xa4)]({
  'input': process[a0_0x2b3c45(0xa5)],
  'output': process[a0_0x2b3c45(0xa2)]
});
function __DECODE_0__(SiwiuQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x96;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SiwiuQ, key);
}
const lines = [];
reader['on'](a0_0x2b3c45(0x9b), line => {
  lines['push'](line);
});
reader['on'](a0_0x2b3c45(0xaa), () => {
  const _0x4e3d95 = a0_0x2b3c45;
  let [top, back, right, left, front, bottom] = lines[0x0][_0x4e3d95(0xac)]('\x20')[_0x4e3d95(0x97)](Number);
  const rs = lines[0x1];
  for (let i = 0x0; i < rs[_0x4e3d95(0xa3)]; i++) {
    switch (rs[i]) {
      case 'N':
        [top, front, bottom, back] = [back, top, front, bottom];
        break;
      case 'S':
        [top, front, bottom, back] = [front, bottom, back, top];
        break;
      case 'W':
        [top, left, bottom, right] = [right, top, left, bottom];
        break;
      case 'E':
        [top, left, bottom, right] = [left, bottom, right, top];
        break;
    }
  }
  console[_0x4e3d95(0xab)](top);
});
function __STRING_ARRAY__() {
  const _0x19240c = ['1549845cArMrV', 'utf8', 'close', 'log', 'split', 'setEncoding', 'map', '5HVVCHV', '955872dmDcVq', '10236228QosdQL', 'line', '562044wdXoss', '6996913sOHsIZ', 'readline', '299415ZwfPre', '30wIEEao', '11372816mSwrdW', 'stdout', 'length', 'createInterface', 'stdin', '310KjZqMs', 'resume'];
  __STRING_ARRAY__ = function () {
    return _0x19240c;
  };
  return __STRING_ARRAY__();
}
