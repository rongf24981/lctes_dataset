function __DECODE_0__(EILEyf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EILEyf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d4)) / 0x1 * (parseInt(__DECODE_0__(0x1c6)) / 0x2) + -parseInt(__DECODE_0__(0x1d7)) / 0x3 * (-parseInt(__DECODE_0__(0x1c8)) / 0x4) + -parseInt(__DECODE_0__(0x1d2)) / 0x5 * (parseInt(__DECODE_0__(0x1d0)) / 0x6) + parseInt(__DECODE_0__(0x1d9)) / 0x7 * (-parseInt(__DECODE_0__(0x1c7)) / 0x8) + parseInt(__DECODE_0__(0x1cf)) / 0x9 + -parseInt(__DECODE_0__(0x1d8)) / 0xa * (parseInt(__DECODE_0__(0x1d1)) / 0xb) + parseInt(__DECODE_0__(0x1d6)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x95fda);
function Main(input) {
  input = input['split']('\x0a');
  tmp = input[__DECODE_0__(0x1ce)]();
  N = parseInt(tmp[__DECODE_0__(0x1d3)]('\x20')[0x0]);
  M = tmp[__DECODE_0__(0x1d3)]('\x20')[0x1];
  S = input;
  A = 'n'[__DECODE_0__(0x1c9)](N)[__DECODE_0__(0x1d3)]('');
  flag = !![];
  S[__DECODE_0__(0x1cb)](v => {
    t = v[__DECODE_0__(0x1d3)]('\x20')[__DECODE_0__(0x1d5)](v => parseInt(v));
    if (A[t[0x0] - 0x1] != 'n' && A[t[0x0] - 0x1] != t[0x1]) {
      flag = ![];
    }
    A[t[0x0] - 0x1] = t[0x1];
  });
  A = A['join']('');
  A = A[__DECODE_0__(0x1da)](/^nn([0-9])/, '10$1');
  A = A[__DECODE_0__(0x1da)](/^n([0-9])/, '1$1');
  A = A[__DECODE_0__(0x1da)](/n/g, '0');
  A = parseInt(A);
  if (flag && (A + '')[__DECODE_0__(0x1db)] == N) {
    console[__DECODE_0__(0x1cd)](A);
  } else {
    console[__DECODE_0__(0x1cd)](-0x1);
  }
}
function __STRING_ARRAY__() {
  var _0x404c9 = ['73282XIqKDA', '17585QHgwLT', 'split', '3019jKieEr', 'map', '23123652iimwQL', '3HXnelB', '920TbVvLg', '42nKnLVb', 'replace', 'length', '314ltYjii', '954232ekzQCI', '92804tHoDge', 'repeat', '/dev/stdin', 'forEach', 'readFileSync', 'log', 'shift', '7650936wxomgk', '654SNuETl'];
  __STRING_ARRAY__ = function () {
    return _0x404c9;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1cc)](__DECODE_0__(0x1ca), 'utf8'));
