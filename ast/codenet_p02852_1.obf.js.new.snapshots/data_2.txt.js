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
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b7)) / 0x1 + parseInt(__DECODE_0__(0x1b6)) / 0x2 * (-parseInt(__DECODE_0__(0x1be)) / 0x3) + -parseInt(__DECODE_0__(0x1b9)) / 0x4 + parseInt(__DECODE_0__(0x1b3)) / 0x5 * (parseInt(__DECODE_0__(0x1c1)) / 0x6) + -parseInt(__DECODE_0__(0x1bd)) / 0x7 * (parseInt(__DECODE_0__(0x1bc)) / 0x8) + -parseInt(__DECODE_0__(0x1c0)) / 0x9 + -parseInt(__DECODE_0__(0x1c5)) / 0xa * (-parseInt(__DECODE_0__(0x1b5)) / 0xb);
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
  input = input[__DECODE_0__(0x1c2)]('\x0a');
  if (input[input[__DECODE_0__(0x1ba)] - 0x1] === '') {
    input[__DECODE_0__(0x1b8)]();
  }
  const N = input[0x0][__DECODE_0__(0x1c2)]('\x20')[0x0] - 0x0;
  const M = input[0x0][__DECODE_0__(0x1c2)]('\x20')[0x1] - 0x0;
  const S = input[0x1];
  var cur = S[__DECODE_0__(0x1ba)] - 0x1;
  var ret = [];
  while (cur > 0x0) {
    if (cur <= M) {
      ret[__DECODE_0__(0x1c4)](cur);
      break;
    }
    for (var i = 0x0; i < M; i++) {
      if (S[cur - M + i] === '0') {
        ret[__DECODE_0__(0x1c4)](M - i);
        cur = cur - M + i;
        break;
      }
      if (i === M - 0x1) {
        console[__DECODE_0__(0x1b4)](-0x1);
        return;
      }
    }
  }
  console[__DECODE_0__(0x1b4)](ret[__DECODE_0__(0x1bb)]('\x20'));
}
function __STRING_ARRAY__() {
  const _0x51234c = ['11HMfsNn', '1508038kqybrh', '578108hzZLDu', 'pop', '43296KCWKjD', 'length', 'join', '230288gdWyAe', '119IugNdf', '3dNcClE', '/dev/stdin', '4491450IILEtv', '150XtNgMv', 'split', 'utf8', 'unshift', '26165480TTQaBO', '32835dvPPHx', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x51234c;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1bf), __DECODE_0__(0x1c3)));
