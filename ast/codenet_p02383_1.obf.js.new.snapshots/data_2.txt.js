(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xa8)) / 0x1 + -parseInt(__DECODE_0__(0xa0)) / 0x2 * (-parseInt(__DECODE_0__(0x9f)) / 0x3) + -parseInt(__DECODE_0__(0x9c)) / 0x4 + -parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0x9a)) / 0x6) + parseInt(__DECODE_0__(0x9d)) / 0x7 + -parseInt(__DECODE_0__(0xa1)) / 0x8 + -parseInt(__DECODE_0__(0x99)) / 0x9 * (parseInt(__DECODE_0__(0xa6)) / 0xa);
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
process['stdin'][__DECODE_0__(0xa7)]();
process[__DECODE_0__(0xa5)][__DECODE_0__(0x96)](__DECODE_0__(0xa9));
const reader = require(__DECODE_0__(0x9e))[__DECODE_0__(0xa4)]({
  'input': process[__DECODE_0__(0xa5)],
  'output': process[__DECODE_0__(0xa2)]
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
reader['on'](__DECODE_0__(0x9b), line => {
  lines['push'](line);
});
reader['on'](__DECODE_0__(0xaa), () => {
  let [top, back, right, left, front, bottom] = lines[0x0][__DECODE_0__(0xac)]('\x20')[__DECODE_0__(0x97)](Number);
  const rs = lines[0x1];
  for (let i = 0x0; i < rs[__DECODE_0__(0xa3)]; i++) {
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
  console[__DECODE_0__(0xab)](top);
});
function __STRING_ARRAY__() {
  const _0x19240c = ['1549845cArMrV', 'utf8', 'close', 'log', 'split', 'setEncoding', 'map', '5HVVCHV', '955872dmDcVq', '10236228QosdQL', 'line', '562044wdXoss', '6996913sOHsIZ', 'readline', '299415ZwfPre', '30wIEEao', '11372816mSwrdW', 'stdout', 'length', 'createInterface', 'stdin', '310KjZqMs', 'resume'];
  __STRING_ARRAY__ = function () {
    return _0x19240c;
  };
  return __STRING_ARRAY__();
}
