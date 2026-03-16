const a0_0x4598e4 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x129584 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x129584(0x102)) / 0x1 + -parseInt(_0x129584(0x101)) / 0x2 + -parseInt(_0x129584(0x103)) / 0x3 * (-parseInt(_0x129584(0xf5)) / 0x4) + -parseInt(_0x129584(0xf6)) / 0x5 + -parseInt(_0x129584(0xf9)) / 0x6 * (parseInt(_0x129584(0xfa)) / 0x7) + parseInt(_0x129584(0xfd)) / 0x8 * (-parseInt(_0x129584(0xff)) / 0x9) + parseInt(_0x129584(0xf7)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x942b5);
function main(input) {
  const _0x551d0 = __DECODE_0__;
  function dist(a, b) {
    const _0x7121c0 = __DECODE_0__;
    return Math[_0x7121c0(0x104)](b - a, Math[_0x7121c0(0xf4)](x - a) + Math[_0x7121c0(0xf4)](y - b) + 0x1);
  }
  const inp = input[_0x551d0(0xf8)]('\x20');
  const n = inp[0x0];
  const x = inp[0x1];
  const y = inp[0x2];
  for (var i = 0x1; i < n; i++) {
    var cnt = 0x0;
    for (var a = 0x1; a < n; a++) {
      for (var b = a + 0x1; b <= n; b++) {
        if (dist(a, b) == i) {
          cnt++;
        }
      }
    }
    console[_0x551d0(0x100)](cnt);
  }
}
function __DECODE_0__(jkJcNb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf4;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jkJcNb, key);
}
function __STRING_ARRAY__() {
  const _0x113d25 = ['246268XmVNFV', '5748505QjdMbg', '43252880hSHSRX', 'split', '9606nzanzM', '2303dhqipK', 'readFileSync', '/dev/stdin', '219280Ldmrqn', 'utf8', '297GFpJBl', 'log', '1939432HgLjGt', '844948MWYUjN', '33UViVoG', 'min', 'abs'];
  __STRING_ARRAY__ = function () {
    return _0x113d25;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x4598e4(0xfb)](a0_0x4598e4(0xfc), a0_0x4598e4(0xfe)));
