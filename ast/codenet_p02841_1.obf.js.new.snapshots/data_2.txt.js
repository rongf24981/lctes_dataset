(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x166)) / 0x1 + -parseInt(__DECODE_0__(0x160)) / 0x2 * (parseInt(__DECODE_0__(0x164)) / 0x3) + parseInt(__DECODE_0__(0x16e)) / 0x4 * (parseInt(__DECODE_0__(0x16c)) / 0x5) + -parseInt(__DECODE_0__(0x168)) / 0x6 + parseInt(__DECODE_0__(0x16b)) / 0x7 + -parseInt(__DECODE_0__(0x16d)) / 0x8 + parseInt(__DECODE_0__(0x162)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9abd3);
function __STRING_ARRAY__() {
  var _0x272491 = ['9608319QdqQmO', 'getMonth', '20400QigBHK', '2019/', '138739YWhoYU', 'readFileSync', '406380RghXQe', 'split', 'utf8', '2677535AgmPPt', '545395GtZwtV', '1399160UppVjQ', '4aAwugC', '160HOywrz', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x272491;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var input = input[__DECODE_0__(0x169)]('\x0a');
  var i1 = input[0x0][__DECODE_0__(0x169)]('\x20');
  var i2 = input[0x1][__DECODE_0__(0x169)]('\x20');
  var d1 = new Date(__DECODE_0__(0x165) + i1[0x0] + '/' + i1[0x1]);
  var d2 = new Date(__DECODE_0__(0x165) + i2[0x0] + '/' + i2[0x1]);
  if (d1[__DECODE_0__(0x163)]() == d2[__DECODE_0__(0x163)]()) {
    console[__DECODE_0__(0x161)](0x0);
  } else {
    console['log'](0x1);
  }
}
function __DECODE_0__(eNQalb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x160;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eNQalb, key);
}
Main(require('fs')[__DECODE_0__(0x167)]('/dev/stdin', __DECODE_0__(0x16a)));
