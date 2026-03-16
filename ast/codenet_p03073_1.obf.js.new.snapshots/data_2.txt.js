(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b2)) / 0x1 + parseInt(__DECODE_0__(0x1aa)) / 0x2 + -parseInt(__DECODE_0__(0x1b1)) / 0x3 + -parseInt(__DECODE_0__(0x1b4)) / 0x4 * (-parseInt(__DECODE_0__(0x1af)) / 0x5) + -parseInt(__DECODE_0__(0x1b5)) / 0x6 * (parseInt(__DECODE_0__(0x1ac)) / 0x7) + parseInt(__DECODE_0__(0x1b3)) / 0x8 * (parseInt(__DECODE_0__(0x1ad)) / 0x9) + parseInt(__DECODE_0__(0x1ae)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x84c7d);
function Main(input) {
  var cnt = 0x0;
  for (var i = 0x0; i < input['length']; i++) {
    if (parseInt(input[i]) != i % 0x2) {
      cnt++;
    }
  }
  console[__DECODE_0__(0x1b6)](parseInt(Math[__DECODE_0__(0x1a9)](cnt, input['length'] - cnt)));
}
function __STRING_ARRAY__() {
  var _0x1e4603 = ['/dev/stdin', '2392185PfHbSG', '470056DGvrlj', '32naUsJH', '260yKgtXo', '1562886hkDxKU', 'log', 'readFileSync', 'min', '1664362VbUNMd', 'utf8', '7aadBlF', '220500QlxemD', '3960050BEYclC', '57355yzrEWB'];
  __STRING_ARRAY__ = function () {
    return _0x1e4603;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uWCJqj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uWCJqj, key);
}
Main(require('fs')[__DECODE_0__(0x1a8)](__DECODE_0__(0x1b0), __DECODE_0__(0x1ab)));
