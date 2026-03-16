function __DECODE_0__(venIQd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1eb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(venIQd, key);
}
function __STRING_ARRAY__() {
  var _0x1337cf = ['split', '21dBNPuq', '/dev/stdin', '681288FHobJg', '3703998xurxbr', '3wgoBIO', '305988CvmKDQ', '757714GiELgC', '181214FzjMgl', '16530AYkDvl', 'utf8', 'trim', '13343FhJYbw', 'log', '2951496pldGSj', '5CXUWez', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x1337cf;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1fb)) / 0x1 + -parseInt(__DECODE_0__(0x1fa)) / 0x2 * (parseInt(__DECODE_0__(0x1f8)) / 0x3) + -parseInt(__DECODE_0__(0x1f9)) / 0x4 * (-parseInt(__DECODE_0__(0x1f1)) / 0x5) + -parseInt(__DECODE_0__(0x1f7)) / 0x6 + -parseInt(__DECODE_0__(0x1f4)) / 0x7 * (parseInt(__DECODE_0__(0x1f6)) / 0x8) + -parseInt(__DECODE_0__(0x1f0)) / 0x9 + -parseInt(__DECODE_0__(0x1eb)) / 0xa * (-parseInt(__DECODE_0__(0x1ee)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4e4f3);
function main(input) {
  var marginDelete = input[__DECODE_0__(0x1ed)]();
  var args = marginDelete[__DECODE_0__(0x1f3)]('\x20');
  var n = parseInt(args[0x0], 0xa);
  var r = parseInt(args[0x1], 0xa);
  var hiddenRating;
  if (n >= 0xa) {
    hiddenRating = r;
  } else {
    var argument = 0x64 * (0xa - n);
    hiddenRating = r + argument;
  }
  return hiddenRating;
}
console[__DECODE_0__(0x1ef)](main(require('fs')[__DECODE_0__(0x1f2)](__DECODE_0__(0x1f5), __DECODE_0__(0x1ec))));
