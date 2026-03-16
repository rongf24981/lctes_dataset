const a0_0x272354 = __DECODE_0__;
function __DECODE_0__(jNnVzi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jNnVzi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0xc2cc4f = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0xc2cc4f(0x1b7)) / 0x1 + parseInt(_0xc2cc4f(0x1b6)) / 0x2 * (-parseInt(_0xc2cc4f(0x1be)) / 0x3) + -parseInt(_0xc2cc4f(0x1b9)) / 0x4 + parseInt(_0xc2cc4f(0x1b3)) / 0x5 * (parseInt(_0xc2cc4f(0x1c1)) / 0x6) + -parseInt(_0xc2cc4f(0x1bd)) / 0x7 * (parseInt(_0xc2cc4f(0x1bc)) / 0x8) + -parseInt(_0xc2cc4f(0x1c0)) / 0x9 + -parseInt(_0xc2cc4f(0x1c5)) / 0xa * (-parseInt(_0xc2cc4f(0x1b5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6db50);
function Main(input) {
  const _0x5ac013 = __DECODE_0__;
  input = input[_0x5ac013(0x1c2)]('\x0a');
  if (input[input[_0x5ac013(0x1ba)] - 0x1] === '') {
    input[_0x5ac013(0x1b8)]();
  }
  const N = input[0x0][_0x5ac013(0x1c2)]('\x20')[0x0] - 0x0;
  const M = input[0x0][_0x5ac013(0x1c2)]('\x20')[0x1] - 0x0;
  const S = input[0x1];
  var cur = S[_0x5ac013(0x1ba)] - 0x1;
  var ret = [];
  while (cur > 0x0) {
    if (cur <= M) {
      ret[_0x5ac013(0x1c4)](cur);
      break;
    }
    for (var i = 0x0; i < M; i++) {
      if (S[cur - M + i] === '0') {
        ret[_0x5ac013(0x1c4)](M - i);
        cur = cur - M + i;
        break;
      }
      if (i === M - 0x1) {
        console[_0x5ac013(0x1b4)](-0x1);
        return;
      }
    }
  }
  console[_0x5ac013(0x1b4)](ret[_0x5ac013(0x1bb)]('\x20'));
}
function __STRING_ARRAY__() {
  const _0x51234c = ['11HMfsNn', '1508038kqybrh', '578108hzZLDu', 'pop', '43296KCWKjD', 'length', 'join', '230288gdWyAe', '119IugNdf', '3dNcClE', '/dev/stdin', '4491450IILEtv', '150XtNgMv', 'split', 'utf8', 'unshift', '26165480TTQaBO', '32835dvPPHx', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x51234c;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](a0_0x272354(0x1bf), a0_0x272354(0x1c3)));
