(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1e0)) / 0x1 + parseInt(__DECODE_0__(0x1da)) / 0x2 * (parseInt(__DECODE_0__(0x1db)) / 0x3) + -parseInt(__DECODE_0__(0x1e5)) / 0x4 * (-parseInt(__DECODE_0__(0x1d8)) / 0x5) + parseInt(__DECODE_0__(0x1e2)) / 0x6 * (parseInt(__DECODE_0__(0x1d7)) / 0x7) + -parseInt(__DECODE_0__(0x1dd)) / 0x8 * (-parseInt(__DECODE_0__(0x1e3)) / 0x9) + -parseInt(__DECODE_0__(0x1e7)) / 0xa + -parseInt(__DECODE_0__(0x1e8)) / 0xb * (parseInt(__DECODE_0__(0x1dc)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26e7d);
function* main() {
  const N = +(yield);
  let sum = 0x0;
  for (let k = 0x1; k <= N; k++) {
    sum += Math[__DECODE_0__(0x1d9)](k * Math['floor'](0x1 + N / k) * Math['floor'](N / k) / 0x2);
  }
  console[__DECODE_0__(0x1e4)](sum);
}
const iter = main();
iter[__DECODE_0__(0x1df)]();
require('readline')[__DECODE_0__(0x1de)]({
  'input': process[__DECODE_0__(0x1e6)]
})['on'](__DECODE_0__(0x1e1), line => iter[__DECODE_0__(0x1df)](line));
function __DECODE_0__(PWbaPq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PWbaPq, key);
}
function __STRING_ARRAY__() {
  const _0x167bdf = ['stdin', '3163080gRhIOp', '396cVWobc', '1883WWmGTG', '5lQnEqr', 'floor', '6EKieHd', '245103XsalUu', '96564dmcTbu', '10216vebqga', 'createInterface', 'next', '52953UUCJhe', 'line', '6924mBpjGQ', '342iXkhZN', 'log', '433396BLSrOK'];
  __STRING_ARRAY__ = function () {
    return _0x167bdf;
  };
  return __STRING_ARRAY__();
}
