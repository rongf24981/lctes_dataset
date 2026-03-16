'use strict';

const a0_0xa58964 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0xfce48e = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0xfce48e(0x76)) / 0x1 + parseInt(_0xfce48e(0x74)) / 0x2 * (parseInt(_0xfce48e(0x7c)) / 0x3) + -parseInt(_0xfce48e(0x7b)) / 0x4 + -parseInt(_0xfce48e(0x75)) / 0x5 + -parseInt(_0xfce48e(0x7e)) / 0x6 * (parseInt(_0xfce48e(0x7a)) / 0x7) + parseInt(_0xfce48e(0x7d)) / 0x8 + -parseInt(_0xfce48e(0x78)) / 0x9 * (-parseInt(_0xfce48e(0x77)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8e0ca);
function main(arg) {
  const _0x13a5b9 = __DECODE_0__;
  let getInt = arg['trim']()[_0x13a5b9(0x72)]('\x20')[0x3];
  let oneCount = arg[_0x13a5b9(0x73)]()[_0x13a5b9(0x72)]('\x20')[0x0];
  let zeroCnt = arg[_0x13a5b9(0x73)]()['split']('\x20')[0x1];
  let minusCnt = arg[_0x13a5b9(0x73)]()[_0x13a5b9(0x72)]('\x20')[0x2];
  let result = 0x0;
  if (oneCount == 0x0 && zeroCnt == 0x0 && minusCnt == 0x0) {
    console[_0x13a5b9(0x79)](0x0);
    return;
  }
  if (getInt > 0x0) {
    if (getInt > oneCount) {
      result = oneCount * 0x1;
    } else {
      result = getInt * 0x1;
    }
    getInt = getInt - oneCount;
  }
  if (getInt > 0x0) {
    getInt = getInt - zeroCnt;
  }
  if (getInt > 0x0) {
    result = result + getInt * -0x1;
  }
  console[_0x13a5b9(0x79)](result);
}
main(require('fs')[a0_0xa58964(0x80)]('/dev/stdin', a0_0xa58964(0x7f)));
function __DECODE_0__(sfpybl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x72;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sfpybl, key);
}
function __STRING_ARRAY__() {
  const _0x16a897 = ['12SOSnJL', 'utf8', 'readFileSync', 'split', 'trim', '1622ywpccp', '4943715YeJdsi', '1158762SDcGzw', '14618570fQNbVy', '9SPOveJ', 'log', '362733ftavBb', '123672spiUtT', '3399ZipyTT', '3865400CVvaTo'];
  __STRING_ARRAY__ = function () {
    return _0x16a897;
  };
  return __STRING_ARRAY__();
}
