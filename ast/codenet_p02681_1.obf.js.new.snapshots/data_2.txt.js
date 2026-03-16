'use strict';

function __STRING_ARRAY__() {
  const _0x3ff790 = ['24LZXQyy', 'replace', '4yofinw', '1304231GCFzPK', '1014655cftrOs', '285700SrRVEy', '20492330nRpmez', 'length', '17598ZLlwKc', 'Yes', '7504074ETVzdB', 'trim', '749ckJSrj', 'split', 'log', '7991648FrWJuf', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x3ff790;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xac)) / 0x1 + -parseInt(__DECODE_0__(0xae)) / 0x2 * (-parseInt(__DECODE_0__(0xa9)) / 0x3) + parseInt(__DECODE_0__(0xab)) / 0x4 * (-parseInt(__DECODE_0__(0xad)) / 0x5) + -parseInt(__DECODE_0__(0xb1)) / 0x6 * (-parseInt(__DECODE_0__(0xa3)) / 0x7) + parseInt(__DECODE_0__(0xa6)) / 0x8 + -parseInt(__DECODE_0__(0xa1)) / 0x9 + -parseInt(__DECODE_0__(0xaf)) / 0xa;
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
  const tmp = input[__DECODE_0__(0xa2)]()[__DECODE_0__(0xa4)]('\x0a');
  const S = tmp[0x0];
  const T = tmp[0x1];
  let result = __DECODE_0__(0xb2);
  const tmpStr = T[__DECODE_0__(0xaa)](S, '');
  if (T['slice'](-0x1) === tmpStr && tmpStr[__DECODE_0__(0xb0)] === 0x1) {
    result = __DECODE_0__(0xb2);
  } else {
    result = 'No';
  }
  console[__DECODE_0__(0xa5)](result);
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
Main(require('fs')[__DECODE_0__(0xa8)]('/dev/stdin', __DECODE_0__(0xa7)));
