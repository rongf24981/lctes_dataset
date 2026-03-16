const a0_0x52a9dc = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x563a9c = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x563a9c(0x160)) / 0x1 + parseInt(_0x563a9c(0x154)) / 0x2 * (parseInt(_0x563a9c(0x15e)) / 0x3) + -parseInt(_0x563a9c(0x15c)) / 0x4 + -parseInt(_0x563a9c(0x159)) / 0x5 * (-parseInt(_0x563a9c(0x153)) / 0x6) + parseInt(_0x563a9c(0x155)) / 0x7 * (parseInt(_0x563a9c(0x15b)) / 0x8) + parseInt(_0x563a9c(0x162)) / 0x9 * (parseInt(_0x563a9c(0x158)) / 0xa) + -parseInt(_0x563a9c(0x161)) / 0xb;
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
  const _0xa1db47 = __DECODE_0__;
  const k = input[0x0][0x1];
  const as = input[0x1]['map'](Number);
  const answer = as[_0xa1db47(0x15f)]((total, cv, ci) => {
    const _0x1b839b = _0xa1db47;
    var result = 0x0;
    as[_0x1b839b(0x156)](ci)[_0x1b839b(0x15f)]((pv, value, index) => {
      const remainder = (pv + value) % k;
      if (remainder === index + 0x1) {
        result++;
      }
      return remainder;
    }, 0x0);
    return total + result;
  }, null);
  console[_0xa1db47(0x152)](answer);
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
Main(require('fs')[a0_0x52a9dc(0x157)]('/dev/stdin', a0_0x52a9dc(0x15d))[a0_0x52a9dc(0x163)]()[a0_0x52a9dc(0x15a)]('\x0a')['map'](line => line[a0_0x52a9dc(0x15a)]('\x20')));
