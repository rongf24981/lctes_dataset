function __DECODE_0__(dPgMIx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x167;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dPgMIx, key);
}
function __STRING_ARRAY__() {
  var _0x4d3295 = ['110BDvalK', '65952yWeOKG', '153616TMQWjE', '1GzJfJJ', '42cuCjyV', '90JwseRu', 'readFileSync', 'trim', 'utf8', 'join', 'map', 'split', '61494aWIuRh', '70eNpYdw', 'shift', '4121623gPYUdi', 'sort', '37070pgljDE', '34968RmOoCX', '13nMFiWr', '7944564ayGQkq'];
  __STRING_ARRAY__ = function () {
    return _0x4d3295;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x16d)) / 0x1 * (parseInt(__DECODE_0__(0x176)) / 0x2) + parseInt(__DECODE_0__(0x16e)) / 0x3 * (parseInt(__DECODE_0__(0x167)) / 0x4) + parseInt(__DECODE_0__(0x17b)) / 0x5 * (parseInt(__DECODE_0__(0x16f)) / 0x6) + -parseInt(__DECODE_0__(0x177)) / 0x7 * (-parseInt(__DECODE_0__(0x16c)) / 0x8) + parseInt(__DECODE_0__(0x16b)) / 0x9 * (parseInt(__DECODE_0__(0x16a)) / 0xa) + parseInt(__DECODE_0__(0x179)) / 0xb + parseInt(__DECODE_0__(0x169)) / 0xc * (-parseInt(__DECODE_0__(0x168)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2dedd);
var input = require('fs')[__DECODE_0__(0x170)]('/dev/stdin', __DECODE_0__(0x172));
var Arr = input[__DECODE_0__(0x171)]()[__DECODE_0__(0x175)]('\x0a');
var AL = Arr[__DECODE_0__(0x178)]();
for (var i = 0x0; i < AL; i++) {
  var arr = Arr[i]['split']('')[__DECODE_0__(0x174)](Number);
  arr['sort'](function (a, b) {
    return b - a;
  });
  var a = arr[__DECODE_0__(0x173)]('');
  arr[__DECODE_0__(0x17a)](function (a, b) {
    return a - b;
  });
  var b = arr['join']('');
  console['log'](parseInt(a) - parseInt(b));
}
