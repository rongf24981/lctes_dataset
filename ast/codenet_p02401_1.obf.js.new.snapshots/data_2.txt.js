function __DECODE_0__(rMorPj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rMorPj, key);
}
function __STRING_ARRAY__() {
  var _0x1aa269 = ['length', '5455760SyMcga', 'stdin', 'split', '117306AeTHWc', '11aTRwaL', '7COJhMJ', '3056346uiGniS', '1690785EedguW', '28NMuqNW', 'data', '106fSmZQG', 'utf8', 'log', '4546182Swlyaz', '15293gBENPC', '25002610glQVBd'];
  __STRING_ARRAY__ = function () {
    return _0x1aa269;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xce)) / 0x1 * (parseInt(__DECODE_0__(0xca)) / 0x2) + -parseInt(__DECODE_0__(0xd4)) / 0x3 * (-parseInt(__DECODE_0__(0xc8)) / 0x4) + parseInt(__DECODE_0__(0xc7)) / 0x5 + parseInt(__DECODE_0__(0xcd)) / 0x6 * (-parseInt(__DECODE_0__(0xd6)) / 0x7) + -parseInt(__DECODE_0__(0xd1)) / 0x8 + -parseInt(__DECODE_0__(0xd7)) / 0x9 + -parseInt(__DECODE_0__(0xcf)) / 0xa * (-parseInt(__DECODE_0__(0xd5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7f866);
process[__DECODE_0__(0xd2)]['resume']();
process[__DECODE_0__(0xd2)]['setEncoding'](__DECODE_0__(0xcb));
process[__DECODE_0__(0xd2)]['on'](__DECODE_0__(0xc9), function (chunk) {
  var input = chunk['split']('\x0a');
  var output = '';
  for (var i = 0x0; i < input[__DECODE_0__(0xd0)]; i++) {
    var r = calc(input[i]);
    if (r !== ![]) {
      console[__DECODE_0__(0xcc)](r);
    }
  }
  function calc(input) {
    var nums = input[__DECODE_0__(0xd3)]('\x20');
    nums[0x0] = Number(nums[0x0]);
    nums[0x2] = Number(nums[0x2]);
    if (nums[0x1] == '+') {
      return nums[0x0] + nums[0x2];
    } else {
      if (nums[0x1] == '-') {
        return nums[0x0] - nums[0x2];
      } else {
        if (nums[0x1] == '*') {
          return nums[0x0] * nums[0x2];
        } else {
          if (nums[0x1] == '/') {
            return nums[0x0] / nums[0x2];
          } else {
            if (nums[0x1] == '?') {
              return ![];
            }
          }
        }
      }
    }
  }
});
