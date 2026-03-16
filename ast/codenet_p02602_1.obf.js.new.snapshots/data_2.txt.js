function __DECODE_0__(akkqJd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(akkqJd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1dc)) / 0x1 + -parseInt(__DECODE_0__(0x1d8)) / 0x2 * (-parseInt(__DECODE_0__(0x1e3)) / 0x3) + -parseInt(__DECODE_0__(0x1de)) / 0x4 * (-parseInt(__DECODE_0__(0x1e0)) / 0x5) + -parseInt(__DECODE_0__(0x1e4)) / 0x6 * (parseInt(__DECODE_0__(0x1e1)) / 0x7) + parseInt(__DECODE_0__(0x1e6)) / 0x8 * (-parseInt(__DECODE_0__(0x1d6)) / 0x9) + parseInt(__DECODE_0__(0x1dd)) / 0xa * (-parseInt(__DECODE_0__(0x1d9)) / 0xb) + parseInt(__DECODE_0__(0x1d7)) / 0xc * (parseInt(__DECODE_0__(0x1db)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe6975);
function Main(input) {
  input = input[__DECODE_0__(0x1d4)](/\n/g, '\x20');
  input = input[__DECODE_0__(0x1df)]('\x20');
  var A = Number(input[0x0]);
  var B = Number(input[0x1]);
  input = input['slice'](0x2);
  for (var i = 0x0; i < input[__DECODE_0__(0x1da)] - B; i++) {
    if (Number(input[i]) < Number(input[i + B])) {
      console[__DECODE_0__(0x1e5)](__DECODE_0__(0x1d3));
    } else {
      console['log']('No');
    }
  }
}
Main(require('fs')[__DECODE_0__(0x1e2)](__DECODE_0__(0x1d5), __DECODE_0__(0x1d2)));
function __STRING_ARRAY__() {
  var _0x21f700 = ['4015aVrnmV', 'length', '13oRPocp', '742014QngXTU', '48610qmxZJa', '5938776ixnYfj', 'split', '5jTznsn', '7nsuUkt', 'readFileSync', '549663WHoheT', '807582ZFaVxc', 'log', '2892912WEexPu', 'utf8', 'Yes', 'replace', '/dev/stdin', '9zVePjb', '7461924RcQiyr', '4fKoBpY'];
  __STRING_ARRAY__ = function () {
    return _0x21f700;
  };
  return __STRING_ARRAY__();
}
