(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x160)) / 0x1 + parseInt(__DECODE_0__(0x154)) / 0x2 * (parseInt(__DECODE_0__(0x15e)) / 0x3) + -parseInt(__DECODE_0__(0x15c)) / 0x4 + -parseInt(__DECODE_0__(0x159)) / 0x5 * (-parseInt(__DECODE_0__(0x153)) / 0x6) + parseInt(__DECODE_0__(0x155)) / 0x7 * (parseInt(__DECODE_0__(0x15b)) / 0x8) + parseInt(__DECODE_0__(0x162)) / 0x9 * (parseInt(__DECODE_0__(0x158)) / 0xa) + -parseInt(__DECODE_0__(0x161)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x33b8f);
function __STRING_ARRAY__() {
  const _0x33539b = ['166115susGKK', 'split', '88144pLUmFZ', '799196GDBfef', 'utf8', '3jvGASR', 'reduce', '98489FBtOxY', '6060197vQMjym', '9QoQQOM', 'trim', 'log', '24gAauaH', '654086XRgYLN', '140pLYoxZ', 'slice', 'readFileSync', '3807750vEnWTn'];
  __STRING_ARRAY__ = function () {
    return _0x33539b;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const k = input[0x0][0x1];
  const as = input[0x1]['map'](Number);
  const answer = as[__DECODE_0__(0x15f)]((total, cv, ci) => {
    var result = 0x0;
    as[__DECODE_0__(0x156)](ci)[__DECODE_0__(0x15f)]((pv, value, index) => {
      const remainder = (pv + value) % k;
      if (remainder === index + 0x1) {
        result++;
      }
      return remainder;
    }, 0x0);
    return total + result;
  }, null);
  console[__DECODE_0__(0x152)](answer);
}
function __DECODE_0__(GMiTlF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x152;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GMiTlF, key);
}
Main(require('fs')[__DECODE_0__(0x157)]('/dev/stdin', __DECODE_0__(0x15d))[__DECODE_0__(0x163)]()[__DECODE_0__(0x15a)]('\x0a')['map'](line => line[__DECODE_0__(0x15a)]('\x20')));
