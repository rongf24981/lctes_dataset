(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a4)) / 0x1 * (parseInt(__DECODE_0__(0x1a9)) / 0x2) + -parseInt(__DECODE_0__(0x1ab)) / 0x3 + -parseInt(__DECODE_0__(0x1aa)) / 0x4 + -parseInt(__DECODE_0__(0x1a2)) / 0x5 * (parseInt(__DECODE_0__(0x1a5)) / 0x6) + parseInt(__DECODE_0__(0x19d)) / 0x7 * (parseInt(__DECODE_0__(0x19c)) / 0x8) + -parseInt(__DECODE_0__(0x19f)) / 0x9 * (-parseInt(__DECODE_0__(0x198)) / 0xa) + parseInt(__DECODE_0__(0x19b)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd58e9);
function __DECODE_0__(uoAnxX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uoAnxX, key);
}
function __STRING_ARRAY__() {
  var _0x451765 = ['split', '343820FjZtrD', 'stringify', 'slice', '26302617dqfaaD', '9760216tPYaTM', '7RmaSfa', 'indexOf', '27leNQlb', 'utf8', 'trim', '25YcXuih', '/dev/stdin', '16469IhMOlx', '1708086ogOKtC', 'log', 'length', 'parse', '130HHlYus', '6653232dXQfcU', '2470089PmSpIb'];
  __STRING_ARRAY__ = function () {
    return _0x451765;
  };
  return __STRING_ARRAY__();
}
function myout(text) {
  console[__DECODE_0__(0x1a6)](text);
}
function Main(input) {
  input = input[__DECODE_0__(0x1a1)]()[__DECODE_0__(0x197)]('\x0a');
  var tmpInput = JSON[__DECODE_0__(0x1a8)](JSON[__DECODE_0__(0x199)](input[0x1]));
  var left = 0x0;
  var right = 0x0;
  while (tmpInput[__DECODE_0__(0x19e)]('()') != -0x1) {
    tmpInput = tmpInput['replace']('()', '');
  }
  for (var i = 0x0; i < tmpInput[__DECODE_0__(0x1a7)]; i++) {
    var tmp = tmpInput[__DECODE_0__(0x19a)](i, i + 0x1);
    if (tmp == '(') {
      left++;
    } else {
      if (tmp == ')') {
        right++;
      }
    }
  }
  for (var i = 0x0; i < right; i++) {
    input[0x1] = '(' + input[0x1];
  }
  for (var i = 0x0; i < left; i++) {
    input[0x1] += ')';
  }
  myout(input[0x1]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1a3), __DECODE_0__(0x1a0))[__DECODE_0__(0x1a1)]());
