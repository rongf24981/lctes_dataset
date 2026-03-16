(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe5)) / 0x1 * (-parseInt(__DECODE_0__(0xe2)) / 0x2) + -parseInt(__DECODE_0__(0xde)) / 0x3 + parseInt(__DECODE_0__(0xd9)) / 0x4 * (parseInt(__DECODE_0__(0xe1)) / 0x5) + -parseInt(__DECODE_0__(0xdc)) / 0x6 * (parseInt(__DECODE_0__(0xd7)) / 0x7) + parseInt(__DECODE_0__(0xe6)) / 0x8 * (-parseInt(__DECODE_0__(0xdd)) / 0x9) + -parseInt(__DECODE_0__(0xd6)) / 0xa + parseInt(__DECODE_0__(0xe3)) / 0xb * (parseInt(__DECODE_0__(0xe0)) / 0xc);
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
var input = require('fs')['readFileSync'](__DECODE_0__(0xd8), 'utf8');
var Arr = input['trim']()[__DECODE_0__(0xda)]('\x0a');
var N = Arr[__DECODE_0__(0xdf)]() - 0x0;
for (var i = 0x0; i < N; i++) {
  var arr = Arr['shift']()[__DECODE_0__(0xda)]('\x20')[__DECODE_0__(0xdb)](Number);
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
  console['log'](Math[__DECODE_0__(0xe4)](A, B));
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
