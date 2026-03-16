(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d7)) / 0x1 + -parseInt(__DECODE_0__(0x1d8)) / 0x2 + -parseInt(__DECODE_0__(0x1d5)) / 0x3 + -parseInt(__DECODE_0__(0x1db)) / 0x4 * (-parseInt(__DECODE_0__(0x1dd)) / 0x5) + parseInt(__DECODE_0__(0x1de)) / 0x6 + -parseInt(__DECODE_0__(0x1da)) / 0x7 + parseInt(__DECODE_0__(0x1d1)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e591);
var a = 'A';
process[__DECODE_0__(0x1d3)][__DECODE_0__(0x1df)]();
function __STRING_ARRAY__() {
  var _0x293f07 = ['utf8', '4387775yMDOFX', '4eaxVcU', 'split', '3567845SFYSNw', '5179008kgZOnH', 'resume', '7186224kYWhVU', 'log', 'stdin', 'data', '2023980pNtBHw', 'end', '382043SvfFsP', '547932clvLvT'];
  __STRING_ARRAY__ = function () {
    return _0x293f07;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x1d3)]['setEncoding'](__DECODE_0__(0x1d9));
function __DECODE_0__(wVOLLt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wVOLLt, key);
}
process[__DECODE_0__(0x1d3)]['on'](__DECODE_0__(0x1d4), function (chunk) {
  input = chunk['trim']()[__DECODE_0__(0x1dc)](',');
  if (input[0x0] == a) {
    a = input[0x1];
  } else {
    if (input[0x1] == a) {
      a = input[0x0];
    }
  }
});
process[__DECODE_0__(0x1d3)]['on'](__DECODE_0__(0x1d6), function () {
  console[__DECODE_0__(0x1d2)](a);
});
