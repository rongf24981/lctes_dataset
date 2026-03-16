(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x19e)) / 0x1 * (parseInt(__DECODE_0__(0x19a)) / 0x2) + parseInt(__DECODE_0__(0x1a2)) / 0x3 * (-parseInt(__DECODE_0__(0x1a0)) / 0x4) + -parseInt(__DECODE_0__(0x197)) / 0x5 * (parseInt(__DECODE_0__(0x19d)) / 0x6) + -parseInt(__DECODE_0__(0x1a5)) / 0x7 + -parseInt(__DECODE_0__(0x198)) / 0x8 * (parseInt(__DECODE_0__(0x196)) / 0x9) + -parseInt(__DECODE_0__(0x1a1)) / 0xa * (-parseInt(__DECODE_0__(0x199)) / 0xb) + -parseInt(__DECODE_0__(0x19b)) / 0xc * (-parseInt(__DECODE_0__(0x1a3)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6c92c);
function Main(input) {
  var list = [0x1, 0x1, 0x1, 0x2, 0x1, 0x2, 0x1, 0x5, 0x2, 0x2, 0x1, 0x5, 0x1, 0x2, 0x1, 0xe, 0x1, 0x5, 0x1, 0x5, 0x2, 0x2, 0x1, 0xf, 0x2, 0x2, 0x5, 0x4, 0x1, 0x4, 0x1, 0x33];
  input = parseInt(input);
  if (0x1 <= input && input <= 0x20) {
    console[__DECODE_0__(0x19f)](list[input - 0x1]);
  } else {
    console['log'](0x0);
  }
}
Main(require('fs')[__DECODE_0__(0x19c)]('/dev/stdin', __DECODE_0__(0x1a4)));
function __DECODE_0__(aCCToZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x196;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aCCToZ, key);
}
function __STRING_ARRAY__() {
  var _0x2da0a9 = ['30uLUNvY', '40934HHnZWH', 'log', '499924kiMreP', '10NyYbGy', '18RopHrR', '30793763yyyHIA', 'utf8', '2567222dSTjXg', '3084570SwnmeA', '523795mpIxHw', '16YiwewD', '4870646DjjTmQ', '2pBOdGF', '12wIkZuA', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2da0a9;
  };
  return __STRING_ARRAY__();
}
