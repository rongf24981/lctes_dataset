var a0_0x55e3c8 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x14f393 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x14f393(0x142)) / 0x1 * (-parseInt(_0x14f393(0x146)) / 0x2) + parseInt(_0x14f393(0x144)) / 0x3 + parseInt(_0x14f393(0x13a)) / 0x4 * (parseInt(_0x14f393(0x13e)) / 0x5) + -parseInt(_0x14f393(0x140)) / 0x6 + -parseInt(_0x14f393(0x147)) / 0x7 + parseInt(_0x14f393(0x13b)) / 0x8 + parseInt(_0x14f393(0x141)) / 0x9 * (parseInt(_0x14f393(0x148)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1cd59);
const mod = 0xa ** 0x9 + 0x7;
function __STRING_ARRAY__() {
  var _0x63f1d8 = ['51292OsMGNQ', '635856ASgAWx', 'split', 'trim', '15vgaGYL', 'utf8', '1069590cufBYA', '27sgiIhq', '7607NSguBJ', '/dev/stdin', '169461NSGmXN', 'readFileSync', '6kgOljq', '1321173Jktsdt', '1111640sOhKdy'];
  __STRING_ARRAY__ = function () {
    return _0x63f1d8;
  };
  return __STRING_ARRAY__();
}
function pow(x, y) {
  var r = 0x1;
  for (var i = 0x1; i <= y; i++) {
    r = r * x % mod;
  }
  return r;
}
;
function __DECODE_0__(OcNnAu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OcNnAu, key);
}
function Main(input) {
  var _0xccb7ea = __DECODE_0__;
  const [N] = input[_0xccb7ea(0x13d)]()[_0xccb7ea(0x13c)]('\x20')['map'](x => parseInt(x));
  var count = pow(0xa, N) - pow(0x9, N) * 0x2 + pow(0x8, N);
  count = count % mod;
  count = (count + mod) % mod;
  console['log'](count);
}
;
Main(require('fs')[a0_0x55e3c8(0x145)](a0_0x55e3c8(0x143), a0_0x55e3c8(0x13f)));
