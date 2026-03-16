(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11e)) / 0x1 + parseInt(__DECODE_0__(0x115)) / 0x2 + -parseInt(__DECODE_0__(0x11f)) / 0x3 + -parseInt(__DECODE_0__(0x126)) / 0x4 + -parseInt(__DECODE_0__(0x11a)) / 0x5 * (parseInt(__DECODE_0__(0x11b)) / 0x6) + parseInt(__DECODE_0__(0x116)) / 0x7 + parseInt(__DECODE_0__(0x11c)) / 0x8 * (parseInt(__DECODE_0__(0x122)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb633a);
function __DECODE_0__(bLscSU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bLscSU, key);
}
function rec(a, b) {
  if (a[0x0] > b[0x0]) {
    return __DECODE_0__(0x120);
  } else {
    if (a[0x0] < b[0x0]) {
      return __DECODE_0__(0x114);
    } else {
      if (a[__DECODE_0__(0x124)] == 0x1) {
        return __DECODE_0__(0x121);
      } else {
        return rec(a[__DECODE_0__(0x119)](0x1), b[__DECODE_0__(0x119)](0x1));
      }
    }
  }
}
function main(s) {
  s = s[__DECODE_0__(0x123)]('\x0a');
  if (s[0x0][__DECODE_0__(0x124)] > s[0x1][__DECODE_0__(0x124)]) {
    console[__DECODE_0__(0x11d)]('GREATER');
  } else {
    if (s[0x0][__DECODE_0__(0x124)] < s[0x1]['length']) {
      console[__DECODE_0__(0x11d)](__DECODE_0__(0x114));
    } else {
      console['log']('%s', rec(s[0x0]['slice'](0x1), s[0x1][__DECODE_0__(0x119)](0x1)));
    }
  }
}
function __STRING_ARRAY__() {
  var _0x4bc78c = ['readFileSync', '4096876blGKHu', 'LESS', '842542hBChVU', '3592694owxvLH', '/dev/stdin', 'utf8', 'slice', '533545dLjuWI', '42ZRXFcZ', '23609216XMQvSp', 'log', '1175786HRWSsz', '577197ALOedG', 'GREATER', 'EQUAL', '9fCSLbd', 'split', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x4bc78c;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x125)](__DECODE_0__(0x117), __DECODE_0__(0x118)));
