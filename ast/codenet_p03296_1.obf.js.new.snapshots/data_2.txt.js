'use strict';

function __DECODE_0__(HgGrAc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HgGrAc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x179)) / 0x1 + -parseInt(__DECODE_0__(0x171)) / 0x2 + -parseInt(__DECODE_0__(0x16e)) / 0x3 * (-parseInt(__DECODE_0__(0x17a)) / 0x4) + -parseInt(__DECODE_0__(0x173)) / 0x5 * (-parseInt(__DECODE_0__(0x17b)) / 0x6) + -parseInt(__DECODE_0__(0x17c)) / 0x7 + parseInt(__DECODE_0__(0x176)) / 0x8 * (parseInt(__DECODE_0__(0x175)) / 0x9) + -parseInt(__DECODE_0__(0x16d)) / 0xa * (parseInt(__DECODE_0__(0x17d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x29d6f);
function __STRING_ARRAY__() {
  var _0x195d34 = ['258XaUGRT', '1532818gnxnzA', '1287JGPdVk', '2780qJoFpZ', '106257CgqRGM', '/dev/stdin', 'map', '237694OHAOzU', 'split', '27355OELwzd', 'utf8', '1818fiyPnK', '2512VBbXKV', 'log', 'readFileSync', '75730aGkBaO', '36leVuem'];
  __STRING_ARRAY__ = function () {
    return _0x195d34;
  };
  return __STRING_ARRAY__();
}
function myin() {
  return require('fs')[__DECODE_0__(0x178)](__DECODE_0__(0x16f), __DECODE_0__(0x174))['trim']();
}
function myout(t) {
  console[__DECODE_0__(0x177)](t);
}
function myconv(i, no) {
  switch (no) {
    case 0x0:
      return i;
    case 0x1:
      return parseInt(i);
    case 0x2:
      return i[__DECODE_0__(0x172)]('\x20');
    case 0x3:
      return i['split']('\x0a');
    case 0x4:
      return i[__DECODE_0__(0x172)]('\x20')[__DECODE_0__(0x170)](a => Number(a));
    case 0x5:
      return i['split']('\x0a')[__DECODE_0__(0x170)](a => Number(a));
    case 0x6:
      return i['split']('');
    case 0x7:
      return i[__DECODE_0__(0x172)]('')[__DECODE_0__(0x170)](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 0x3);
  var N = myconv(input[0x0], 0x1);
  var list = myconv(input[0x1], 0x4);
  var output = 0x0;
  for (var i = 0x0; i < N - 0x1; i++) {
    var mae = list[i];
    var ato = list[i + 0x1];
    if (mae == ato) {
      output++;
      list[i + 0x1] = -0x1;
    }
  }
  myout(output);
}
Main(myin());
