var a0_0x5daa50 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1b75a5 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x1b75a5(0xe5)) / 0x1 * (-parseInt(_0x1b75a5(0xe2)) / 0x2) + -parseInt(_0x1b75a5(0xde)) / 0x3 + parseInt(_0x1b75a5(0xd9)) / 0x4 * (parseInt(_0x1b75a5(0xe1)) / 0x5) + -parseInt(_0x1b75a5(0xdc)) / 0x6 * (parseInt(_0x1b75a5(0xd7)) / 0x7) + parseInt(_0x1b75a5(0xe6)) / 0x8 * (-parseInt(_0x1b75a5(0xdd)) / 0x9) + -parseInt(_0x1b75a5(0xd6)) / 0xa + parseInt(_0x1b75a5(0xe3)) / 0xb * (parseInt(_0x1b75a5(0xe0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe491f);
var input = require('fs')['readFileSync'](a0_0x5daa50(0xd8), 'utf8');
var Arr = input['trim']()[a0_0x5daa50(0xda)]('\x0a');
var N = Arr[a0_0x5daa50(0xdf)]() - 0x0;
for (var i = 0x0; i < N; i++) {
  var arr = Arr['shift']()[a0_0x5daa50(0xda)]('\x20')[a0_0x5daa50(0xdb)](Number);
  var x = arr[0x0];
  var y = arr[0x1];
  var b = arr[0x2];
  var p = arr[0x3];
  var A = x * b + y * p;
  while (b < 0x5) {
    b++;
  }
  while (p < 0x2) {
    p++;
  }
  var B = (x * b + y * p) * 0.8;
  console['log'](Math[a0_0x5daa50(0xe4)](A, B));
}
function __DECODE_0__(Jaxipf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Jaxipf, key);
}
function __STRING_ARRAY__() {
  var _0x1c5554 = ['8LraSjb', 'split', 'map', '1038UIkEXt', '76059OjKNmJ', '2850033pGSwQa', 'shift', '30864uvbBTJ', '3544330xZOBBc', '492874wpcAMQ', '8767jAOflV', 'min', '5qVnOkE', '1256KPPhDR', '13340010LtSfuT', '6181ZZZpCT', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1c5554;
  };
  return __STRING_ARRAY__();
}
