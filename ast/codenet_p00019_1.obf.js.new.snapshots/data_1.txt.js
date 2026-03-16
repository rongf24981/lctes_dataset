var a0_0x165844 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x3d46a2 = ['3SmCcSv', '1010737AZcrgP', '3741715VNzOnS', '1230484arwrXG', 'log', 'readFileSync', '1799skRjGd', 'utf8', '376268qnijwr', '6324186OdPqpP', '25864BWhXuv', '13681125cgqOtd'];
  __STRING_ARRAY__ = function () {
    return _0x3d46a2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x23d1db = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x23d1db(0xae)) / 0x1 + -parseInt(_0x23d1db(0xb5)) / 0x2 + parseInt(_0x23d1db(0xad)) / 0x3 * (parseInt(_0x23d1db(0xb0)) / 0x4) + parseInt(_0x23d1db(0xaf)) / 0x5 + parseInt(_0x23d1db(0xaa)) / 0x6 + parseInt(_0x23d1db(0xb3)) / 0x7 * (-parseInt(_0x23d1db(0xab)) / 0x8) + -parseInt(_0x23d1db(0xac)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8dfd8);
function main(input) {
  var _0xec353c = __DECODE_0__;
  var ans = 0x1;
  var inputNum = toInt(input);
  for (var i = 0x1; i <= input; i++) {
    ans = ans * i;
  }
  console[_0xec353c(0xb1)](ans);
}
function toInt(str) {
  return parseInt(str, 0xa);
}
function __DECODE_0__(gKmgFJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xaa;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gKmgFJ, key);
}
main(require('fs')[a0_0x165844(0xb2)]('/dev/stdin', a0_0x165844(0xb4)));
