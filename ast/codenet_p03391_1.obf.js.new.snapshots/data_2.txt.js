'use strict';

function __DECODE_0__(VqkHNO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VqkHNO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b9)) / 0x1 + parseInt(__DECODE_0__(0x1be)) / 0x2 * (parseInt(__DECODE_0__(0x1c0)) / 0x3) + parseInt(__DECODE_0__(0x1b3)) / 0x4 + parseInt(__DECODE_0__(0x1b7)) / 0x5 + parseInt(__DECODE_0__(0x1c2)) / 0x6 * (-parseInt(__DECODE_0__(0x1bd)) / 0x7) + parseInt(__DECODE_0__(0x1bc)) / 0x8 * (-parseInt(__DECODE_0__(0x1b8)) / 0x9) + parseInt(__DECODE_0__(0x1bb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42714);
function __STRING_ARRAY__() {
  var _0x271c1d = ['1218485dIThUL', '18NtEsMr', '497217MOjPmP', 'readFileSync', '9007340avkgXA', '1330856OoHgOa', '3438967oIJSYv', '342928sbFdRp', '/dev/stdin', '6eqhmhx', 'utf8', '6HcQRlP', 'map', 'length', '424004KaDPob', 'split', 'log', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x271c1d;
  };
  return __STRING_ARRAY__();
}
function myin() {
  return require('fs')[__DECODE_0__(0x1ba)](__DECODE_0__(0x1bf), __DECODE_0__(0x1c1))['trim']();
}
function myout(t) {
  console[__DECODE_0__(0x1b5)](t);
}
function myconv(i, no) {
  switch (no) {
    case 0x0:
      return i;
    case 0x1:
      return parseInt(i);
    case 0x2:
      return i['split']('\x20');
    case 0x3:
      return i[__DECODE_0__(0x1b4)]('\x0a');
    case 0x4:
      return i[__DECODE_0__(0x1b4)]('\x20')[__DECODE_0__(0x1c3)](a => Number(a));
    case 0x5:
      return i[__DECODE_0__(0x1b4)]('\x0a')[__DECODE_0__(0x1c3)](a => Number(a));
    case 0x6:
      return i[__DECODE_0__(0x1b4)]('');
    case 0x7:
      return i[__DECODE_0__(0x1b4)]('')[__DECODE_0__(0x1c3)](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 0x3);
  input[__DECODE_0__(0x1b6)]();
  var output = 0x0;
  for (var i = 0x0; i < input[__DECODE_0__(0x1b2)]; i++) {
    var A = parseInt(input[i][__DECODE_0__(0x1b4)]('\x20')[0x0]);
    var B = parseInt(input[i][__DECODE_0__(0x1b4)]('\x20')[0x1]);
    if (A < B) {
      output += B;
    }
  }
  myout(output);
}
Main(myin());
