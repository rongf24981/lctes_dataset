'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x10e)) / 0x1 + -parseInt(__DECODE_0__(0x107)) / 0x2 + parseInt(__DECODE_0__(0x10f)) / 0x3 * (parseInt(__DECODE_0__(0x114)) / 0x4) + parseInt(__DECODE_0__(0x115)) / 0x5 + parseInt(__DECODE_0__(0x10c)) / 0x6 + parseInt(__DECODE_0__(0x110)) / 0x7 + parseInt(__DECODE_0__(0x116)) / 0x8 * (-parseInt(__DECODE_0__(0x10a)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeae6d);
function __STRING_ARRAY__() {
  const _0x27d62f = ['846995wiJdSn', '21gUtrZe', '3873051YGnslR', 'join', 'log', 'eraser', '890684QQCYpl', '5427755xiCvYy', '8kUZvnC', 'dreamer', 'YES', '/dev/stdin', 'utf-8', 'readFileSync', 'length', '2109126nbflUy', 'dream', 'erase', '23993757ZmsBkD', 'slice', '3828942mbWQzX', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x27d62f;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const arr = [__DECODE_0__(0x108), __DECODE_0__(0x117), __DECODE_0__(0x109), __DECODE_0__(0x113)];
  for (let i in arr) {
    arr[i] = reverse(arr[i]);
  }
  input = reverse(input);
  while (input['length'] > 0x0) {
    let flag = ![];
    for (let s of arr) {
      if (input[__DECODE_0__(0x10b)](0x0, s[__DECODE_0__(0x106)]) == s) {
        input = input['substr'](s[__DECODE_0__(0x106)]);
        flag = !![];
      }
    }
    if (flag == ![]) {
      break;
    }
  }
  if (input[__DECODE_0__(0x106)] <= 0x0) {
    console[__DECODE_0__(0x112)](__DECODE_0__(0x118));
  } else {
    console[__DECODE_0__(0x112)]('NO');
  }
}
function reverse(str) {
  return str[__DECODE_0__(0x10d)]('')['reverse']()[__DECODE_0__(0x111)]('');
}
function __DECODE_0__(NLbOLF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x103;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NLbOLF, key);
}
Main(require('fs')[__DECODE_0__(0x105)](__DECODE_0__(0x103), __DECODE_0__(0x104)));
