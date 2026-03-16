function __DECODE_0__(MfpCJm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MfpCJm, key);
}
function __STRING_ARRAY__() {
  var _0x25a5a5 = ['split', '4502188BqdkJL', 'shift', '5bWWzWD', '7GhhILY', '5960168WqLOrH', 'utf8', '9jlHxpE', '2216265SkFamL', 'readFileSync', '13535643JQVcMf', '2775950zTkUeb', '12CDcwXH', 'sort', '/dev/stdin', '10TgTfyW', '7724598qADQMD', 'length', '64877rQzbnb', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x25a5a5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xef)) / 0x1 * (-parseInt(__DECODE_0__(0xec)) / 0x2) + parseInt(__DECODE_0__(0xf9)) / 0x3 + parseInt(__DECODE_0__(0xf2)) / 0x4 * (parseInt(__DECODE_0__(0xf4)) / 0x5) + -parseInt(__DECODE_0__(0xed)) / 0x6 * (parseInt(__DECODE_0__(0xf5)) / 0x7) + -parseInt(__DECODE_0__(0xf6)) / 0x8 * (-parseInt(__DECODE_0__(0xf8)) / 0x9) + parseInt(__DECODE_0__(0xe8)) / 0xa + -parseInt(__DECODE_0__(0xe7)) / 0xb * (parseInt(__DECODE_0__(0xe9)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa946d);
function fillZero(l, num) {
  num = String(num);
  for (var i = num[__DECODE_0__(0xee)]; i < l; i++) {
    num = '0' + num;
  }
  return num;
}
function main(arg) {
  arg = arg[__DECODE_0__(0xf0)]()[__DECODE_0__(0xf1)]('\x0a');
  arg[0x0] = arg[0x0][__DECODE_0__(0xf1)]('\x20');
  var N = Number(arg[0x0][0x0]);
  var M = Number(arg[0x0][0x1]);
  arg[__DECODE_0__(0xf3)]();
  var p_master = {};
  for (var i = 0x0; i < arg['length']; i++) {
    var tmp = arg[i][__DECODE_0__(0xf1)]('\x20')['map'](e => Number(e));
    arg[i] = tmp;
    if (!p_master[tmp[0x0]]) {
      p_master[tmp[0x0]] = [];
    }
    p_master[tmp[0x0]]['push'](tmp[0x1]);
  }
  for (key in p_master) {
    p_master[key][__DECODE_0__(0xea)]();
  }
  for (var i = 0x0; i < arg['length']; i++) {
    var _p = arg[i][0x0];
    var j = 0x0;
    for (var j = 0x0; j < p_master[_p]['length']; j++) {
      if (p_master[_p][j] === arg[i][0x1]) {
        break;
      }
    }
    console['log'](fillZero(0x6, _p) + fillZero(0x6, j + 0x1));
  }
}
main(require('fs')[__DECODE_0__(0xfa)](__DECODE_0__(0xeb), __DECODE_0__(0xf7)));
