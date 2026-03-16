'use strict';

const a0_0x4bc44f = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x3ff790 = ['24LZXQyy', 'replace', '4yofinw', '1304231GCFzPK', '1014655cftrOs', '285700SrRVEy', '20492330nRpmez', 'length', '17598ZLlwKc', 'Yes', '7504074ETVzdB', 'trim', '749ckJSrj', 'split', 'log', '7991648FrWJuf', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x3ff790;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x59c6da = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x59c6da(0xac)) / 0x1 + -parseInt(_0x59c6da(0xae)) / 0x2 * (-parseInt(_0x59c6da(0xa9)) / 0x3) + parseInt(_0x59c6da(0xab)) / 0x4 * (-parseInt(_0x59c6da(0xad)) / 0x5) + -parseInt(_0x59c6da(0xb1)) / 0x6 * (-parseInt(_0x59c6da(0xa3)) / 0x7) + parseInt(_0x59c6da(0xa6)) / 0x8 + -parseInt(_0x59c6da(0xa1)) / 0x9 + -parseInt(_0x59c6da(0xaf)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa484c);
const Main = input => {
  const _0x58c308 = __DECODE_0__;
  const tmp = input[_0x58c308(0xa2)]()[_0x58c308(0xa4)]('\x0a');
  const S = tmp[0x0];
  const T = tmp[0x1];
  let result = _0x58c308(0xb2);
  const tmpStr = T[_0x58c308(0xaa)](S, '');
  if (T['slice'](-0x1) === tmpStr && tmpStr[_0x58c308(0xb0)] === 0x1) {
    result = _0x58c308(0xb2);
  } else {
    result = 'No';
  }
  console[_0x58c308(0xa5)](result);
  return result;
};
function __DECODE_0__(GpygBA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GpygBA, key);
}
Main(require('fs')[a0_0x4bc44f(0xa8)]('/dev/stdin', a0_0x4bc44f(0xa7)));
