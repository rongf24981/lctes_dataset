(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11a)) / 0x1 * (-parseInt(__DECODE_0__(0x11d)) / 0x2) + -parseInt(__DECODE_0__(0x11e)) / 0x3 + parseInt(__DECODE_0__(0x11c)) / 0x4 * (parseInt(__DECODE_0__(0x118)) / 0x5) + -parseInt(__DECODE_0__(0x119)) / 0x6 * (parseInt(__DECODE_0__(0x10d)) / 0x7) + -parseInt(__DECODE_0__(0x111)) / 0x8 * (-parseInt(__DECODE_0__(0x110)) / 0x9) + parseInt(__DECODE_0__(0x10c)) / 0xa * (parseInt(__DECODE_0__(0x10a)) / 0xb) + parseInt(__DECODE_0__(0x116)) / 0xc * (parseInt(__DECODE_0__(0x109)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1e2fc);
function main(input) {
  input = input[__DECODE_0__(0x10e)]();
  var arr = input[__DECODE_0__(0x115)]('')[__DECODE_0__(0x114)](n => n);
  var ans = 0x0;
  if (arr[0x0] == 'A') {
    ans++;
  }
  var temp = 0x0;
  var memo = 0x0;
  for (var i = 0x2; i < arr[__DECODE_0__(0x113)] - 0x1; i++) {
    if (arr[i] == 'C') {
      temp++;
      memo = i;
    }
  }
  if (temp == 0x1) {
    ans++;
  }
  if (ans == 0x2) {
    arr[__DECODE_0__(0x11b)](0x0, 0x1);
    arr[__DECODE_0__(0x11b)](memo - 0x1, 0x1);
    if (/A-Z/[__DECODE_0__(0x112)](arr) == ![]) {
      ans++;
    }
    if (ans == 0x3) {
      console[__DECODE_0__(0x117)]('AC');
    } else {
      console[__DECODE_0__(0x117)]('WA');
    }
  } else {
    console[__DECODE_0__(0x117)]('WA');
  }
}
function __STRING_ARRAY__() {
  var _0x3a90f9 = ['153251SZDzoZ', 'trim', 'utf8', '18RYGEWV', '853744ZlPVmp', 'test', 'length', 'map', 'split', '24AbeJwD', 'log', '45125HYXEYn', '12YMEQVA', '58murczf', 'splice', '20lgnSWw', '7086rDvExb', '277737DkKJfR', '381628djSjmd', '99URLyIL', 'readFileSync', '164700dBmwmn'];
  __STRING_ARRAY__ = function () {
    return _0x3a90f9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rRIvEn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rRIvEn, key);
}
main(require('fs')[__DECODE_0__(0x10b)]('/dev/stdin', __DECODE_0__(0x10f)));
