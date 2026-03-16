'use strict';

function __DECODE_0__(goqfsv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(goqfsv, key);
}
function __STRING_ARRAY__() {
  var _0x3fc4a1 = ['max', 'trim', '530rRNiDX', '5532NNrfRC', 'push', '12BGMvTj', '14609smsPfC', '37127608IaBmDv', 'abs', 'shift', '324TLvWBe', 'length', '1650622BWpgOy', '13sJcAiO', '515830tqDLFu', 'log', '152526FVQhCU', 'utf8', 'split', '235281PbqNoT', '99TCfViz', '3032zXygYT', '1WAnpyr', 'MAX_SAFE_INTEGER'];
  __STRING_ARRAY__ = function () {
    return _0x3fc4a1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe3)) / 0x1 * (-parseInt(__DECODE_0__(0xf1)) / 0x2) + -parseInt(__DECODE_0__(0xe0)) / 0x3 * (-parseInt(__DECODE_0__(0xea)) / 0x4) + parseInt(__DECODE_0__(0xe7)) / 0x5 * (parseInt(__DECODE_0__(0xe8)) / 0x6) + -parseInt(__DECODE_0__(0xeb)) / 0x7 * (parseInt(__DECODE_0__(0xe2)) / 0x8) + parseInt(__DECODE_0__(0xe1)) / 0x9 * (-parseInt(__DECODE_0__(0xf3)) / 0xa) + -parseInt(__DECODE_0__(0xf5)) / 0xb * (parseInt(__DECODE_0__(0xef)) / 0xc) + parseInt(__DECODE_0__(0xf2)) / 0xd * (parseInt(__DECODE_0__(0xec)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6839a);
function main(arg) {
  arg = arg[__DECODE_0__(0xe6)]()[__DECODE_0__(0xdf)]('\x0a');
  arg[__DECODE_0__(0xee)]();
  var H = arg[__DECODE_0__(0xf0)];
  var W = arg[0x0][__DECODE_0__(0xf0)];
  var m1 = [];
  for (var i = 0x0; i < arg[__DECODE_0__(0xf0)]; i++) {
    m1[__DECODE_0__(0xe9)](arg[i][__DECODE_0__(0xdf)](''));
  }
  var i = 0x0;
  var slist = [];
  for (var y = 0x0; y < H; y++) {
    for (var x = 0x0; x < W; x++) {
      if (m1[y][x] === '#') {
        slist[__DECODE_0__(0xe9)]([y, x]);
      }
    }
  }
  var tmp = [];
  for (var y = 0x0; y < H; y++) {
    for (var x = 0x0; x < W; x++) {
      if (m1[y][x] === '.') {
        var minD = Number[__DECODE_0__(0xe4)];
        for (var i = 0x0; i < slist[__DECODE_0__(0xf0)]; i++) {
          var _y = slist[i][0x0];
          var _x = slist[i][0x1];
          var d = Math[__DECODE_0__(0xed)](_y - y) + Math[__DECODE_0__(0xed)](_x - x);
          if (d < minD) {
            minD = d;
          }
        }
        tmp[__DECODE_0__(0xe9)](minD);
      }
    }
  }
  console[__DECODE_0__(0xf4)](Math[__DECODE_0__(0xe5)](...tmp));
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xde)));
