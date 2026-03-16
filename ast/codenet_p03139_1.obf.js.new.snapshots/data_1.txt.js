var a0_0x599943 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x434299 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x434299(0x1e2)) / 0x1 * (-parseInt(_0x434299(0x1f0)) / 0x2) + -parseInt(_0x434299(0x1e8)) / 0x3 + -parseInt(_0x434299(0x1e4)) / 0x4 + parseInt(_0x434299(0x1e7)) / 0x5 * (parseInt(_0x434299(0x1ee)) / 0x6) + parseInt(_0x434299(0x1ef)) / 0x7 * (parseInt(_0x434299(0x1e6)) / 0x8) + parseInt(_0x434299(0x1e9)) / 0x9 * (-parseInt(_0x434299(0x1e5)) / 0xa) + parseInt(_0x434299(0x1ec)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3da97);
function __DECODE_0__(XqGLVq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XqGLVq, key);
}
function main(input) {
  var _0x1f2f7d = __DECODE_0__;
  input = input[_0x1f2f7d(0x1eb)]('\x20');
  var max = input[0x1] < input[0x2] ? input[0x1] : input[0x2];
  var min = input[0x0] - input[0x1] > input[0x2] ? 0x0 : input[0x2] - (input[0x0] - input[0x1]);
  console['log'](max + '\x20' + min);
}
function __STRING_ARRAY__() {
  var _0x308f5a = ['61967qsNJVT', 'readFileSync', '1359300jISWtw', '3790uowOAx', '19568HOQtGH', '2945JcnrKJ', '623868bTYFEi', '8487lnWxwq', '/dev/stdin', 'split', '2849517KVVRjS', 'utf8', '2286KqgzDN', '1043omEISr', '10yPAQgP'];
  __STRING_ARRAY__ = function () {
    return _0x308f5a;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x599943(0x1e3)](a0_0x599943(0x1ea), a0_0x599943(0x1ed)));
