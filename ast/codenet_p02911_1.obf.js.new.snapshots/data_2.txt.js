'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xae)) / 0x1 * (-parseInt(__DECODE_0__(0xac)) / 0x2) + -parseInt(__DECODE_0__(0xb8)) / 0x3 * (-parseInt(__DECODE_0__(0xa9)) / 0x4) + -parseInt(__DECODE_0__(0xb2)) / 0x5 * (-parseInt(__DECODE_0__(0xb1)) / 0x6) + -parseInt(__DECODE_0__(0xb6)) / 0x7 + -parseInt(__DECODE_0__(0xaa)) / 0x8 + -parseInt(__DECODE_0__(0xb4)) / 0x9 + parseInt(__DECODE_0__(0xad)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xda425);
let arg_str = require('fs')['readFileSync'](__DECODE_0__(0xb9), __DECODE_0__(0xab));
arg_str = arg_str[__DECODE_0__(0xba)]('\x0a');
const arg_str_0 = arg_str[0x0]['split']('\x20');
function __STRING_ARRAY__() {
  const _0x524816 = ['slice', '1122058XTqBiN', 'forEach', '40845wberzV', '/dev/stdin', 'split', '204iZnipU', '11038368PQyExg', 'UTF-8', '10KUvQdS', '6597500OnMaWv', '291271WaWqzm', 'log', 'Yes', '4242lPKewm', '4115mxZtEY', 'map', '8624268JiBxcl'];
  __STRING_ARRAY__ = function () {
    return _0x524816;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YCuAgF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YCuAgF, key);
}
const N = arg_str_0[0x0];
const K = arg_str_0[0x1];
const Q = arg_str_0[0x2];
const A_array = arg_str[__DECODE_0__(0xb5)](0x1);
let result_val = [];
for (let i = 0x0; i < N; i++) {
  result_val[i] = K;
}
A_array[__DECODE_0__(0xb7)]((item, index) => {
  for (let i = 0x0; i < N; i++) {
    if (item - 0x1 != i) {
      result_val[i]--;
    }
  }
});
result_val[__DECODE_0__(0xb3)](x => x > 0x0 ? console[__DECODE_0__(0xaf)](__DECODE_0__(0xb0)) : console[__DECODE_0__(0xaf)]('No'));
