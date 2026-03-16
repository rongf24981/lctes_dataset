(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf1)) / 0x1 * (parseInt(__DECODE_0__(0xf4)) / 0x2) + -parseInt(__DECODE_0__(0xee)) / 0x3 * (parseInt(__DECODE_0__(0xf8)) / 0x4) + -parseInt(__DECODE_0__(0x101)) / 0x5 * (-parseInt(__DECODE_0__(0xf2)) / 0x6) + parseInt(__DECODE_0__(0xf0)) / 0x7 * (-parseInt(__DECODE_0__(0xff)) / 0x8) + parseInt(__DECODE_0__(0xfb)) / 0x9 * (-parseInt(__DECODE_0__(0xfd)) / 0xa) + -parseInt(__DECODE_0__(0xfa)) / 0xb + parseInt(__DECODE_0__(0xf5)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2ff78);
process[__DECODE_0__(0xf7)][__DECODE_0__(0xfe)]();
process[__DECODE_0__(0xf7)][__DECODE_0__(0xfc)](__DECODE_0__(0xf3));
function __STRING_ARRAY__() {
  var _0x2a432d = ['utf8', '1504qtOQPd', '13877916MMwpQG', 'shift', 'stdin', '52JPZlia', 'log', '3944028AsDPlk', '8019eOOgra', 'setEncoding', '3770APUwBa', 'resume', '8ULuvJe', 'split', '7455qsUYKf', 'toString', '62019hcwBwz', 'data', '766745hNnQfA', '92JOUkSp', '732CAgbUo'];
  __STRING_ARRAY__ = function () {
    return _0x2a432d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WpOSck, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WpOSck, key);
}
process[__DECODE_0__(0xf7)]['on'](__DECODE_0__(0xef), function (chunk) {
  var aaa = chunk[__DECODE_0__(0x102)]();
  var line = aaa[__DECODE_0__(0x100)]('\x0a');
  line[__DECODE_0__(0xf6)]();
  for (var i in line) {
    var l = line[i][__DECODE_0__(0x100)]('\x20');
    for (var i in l) {
      l[i] = new Number(l[i]);
    }
    l['sort'](function (a, b) {
      if (a > b) {
        return -0x1;
      }
      if (a < b) {
        return 0x1;
      }
      return 0x0;
    });
    var num1 = new Number(l[0x0]) * new Number(l[0x0]);
    var num2 = new Number(l[0x1]) * new Number(l[0x1]);
    var num3 = new Number(l[0x2]) * new Number(l[0x2]);
    var num4 = num2 + num3;
    if (num1 === num4) {
      console[__DECODE_0__(0xf9)]('YES');
    } else {
      console[__DECODE_0__(0xf9)]('NO');
    }
  }
});
