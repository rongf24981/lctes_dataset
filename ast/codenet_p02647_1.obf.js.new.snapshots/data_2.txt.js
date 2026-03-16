function __STRING_ARRAY__() {
  var _0x4f624e = ['5PHKTGJ', '1383466smpCVE', '422030nsUfHv', '133398immALJ', '23238JqcnhE', 'length', 'log', 'utf8', '/dev/stdin', '8eyisin', 'fill', '237645aAhxHk', 'trim', 'map', '1027518KBAjfZ', '297872iYAxhW', 'split', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4f624e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(quuLiP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(quuLiP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x142)) / 0x1 + parseInt(__DECODE_0__(0x141)) / 0x2 + parseInt(__DECODE_0__(0x143)) / 0x3 + parseInt(__DECODE_0__(0x14e)) / 0x4 + -parseInt(__DECODE_0__(0x151)) / 0x5 * (-parseInt(__DECODE_0__(0x14d)) / 0x6) + -parseInt(__DECODE_0__(0x152)) / 0x7 + parseInt(__DECODE_0__(0x148)) / 0x8 * (-parseInt(__DECODE_0__(0x14a)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a221);
function Main(input) {
  input = input['split']('\x0a');
  var mem = input[0x0][__DECODE_0__(0x14f)]('\x20');
  var arr = input[0x1][__DECODE_0__(0x14f)]('\x20')[__DECODE_0__(0x14c)](Number);
  for (var p = 0x0; p < mem[0x1]; p++) {
    var tmp = new Array(arr['length'])[__DECODE_0__(0x149)](0x0);
    for (var i = 0x0; i < arr[__DECODE_0__(0x144)]; i++) {
      var n = arr[i];
      var min = i - n;
      var max = i + n;
      if (min < 0x0) {
        min = 0x0;
      }
      if (max > arr['length'] - 0x1) {
        max = arr[__DECODE_0__(0x144)] - 0x1;
      }
      for (var j = min; j <= max; j++) {
        tmp[j]++;
      }
    }
    var flag = !![];
    for (var i = 0x0; i < arr[__DECODE_0__(0x144)]; i++) {
      if (arr[i] != tmp[i]) {
        flag = ![];
      }
      arr[i] = tmp[i];
    }
    if (flag) {
      break;
    }
  }
  console[__DECODE_0__(0x145)](arr['join']('\x20'));
}
Main(require('fs')[__DECODE_0__(0x150)](__DECODE_0__(0x147), __DECODE_0__(0x146))[__DECODE_0__(0x14b)]());
