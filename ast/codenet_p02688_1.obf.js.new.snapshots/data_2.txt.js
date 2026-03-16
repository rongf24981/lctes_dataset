(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1c7)) / 0x1 + parseInt(__DECODE_0__(0x1c8)) / 0x2 + -parseInt(__DECODE_0__(0x1c9)) / 0x3 * (parseInt(__DECODE_0__(0x1ba)) / 0x4) + -parseInt(__DECODE_0__(0x1b9)) / 0x5 + parseInt(__DECODE_0__(0x1c3)) / 0x6 + -parseInt(__DECODE_0__(0x1bf)) / 0x7 * (-parseInt(__DECODE_0__(0x1bc)) / 0x8) + -parseInt(__DECODE_0__(0x1c1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4f30a);
function __STRING_ARRAY__() {
  const _0x241e0e = ['1627164gevjHZ', 'map', 'length', 'split', '311320TxTNCE', '625344oiePrp', '15ffhZhM', '864840pZyaxl', '443236NnfERo', 'readFileSync', '12808GnBHDP', 'indexOf', 'log', '889hYfENA', 'push', '424242xzmADX', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x241e0e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HLrbcm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HLrbcm, key);
}
function Main(input) {
  tmp = input[__DECODE_0__(0x1c6)]('\x0a');
  tmp2 = tmp[0x0]['split']('\x20');
  var n = parseInt(tmp2[0x0], 0xa);
  var k = parseInt(tmp2[0x1], 0xa);
  tmp['shift']();
  arry = tmp['slice']();
  list = [];
  count = 0x0;
  tmp3 = [];
  for (let i = 0x0; i < arry[__DECODE_0__(0x1c5)]; i++) {
    if (i % 0x2 !== 0x0) {
      arry[i] = arry[i][__DECODE_0__(0x1c6)]('\x20');
      tmp3 = arry[i][__DECODE_0__(0x1c4)](Number);
      for (let index = 0x0; index < tmp3[__DECODE_0__(0x1c5)]; index++) {
        list[__DECODE_0__(0x1c0)](tmp3[index]);
      }
    }
  }
  for (let i = 0x1; i <= n; i++) {
    if (list[__DECODE_0__(0x1bd)](i) >= 0x0) {} else {
      count += 0x1;
    }
  }
  console[__DECODE_0__(0x1be)](count);
}
Main(require('fs')[__DECODE_0__(0x1bb)](__DECODE_0__(0x1c2), 'utf8'));
