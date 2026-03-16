(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x11f)) / 0x1 * (-parseInt(__DECODE_0__(0x11e)) / 0x2) + -parseInt(__DECODE_0__(0x110)) / 0x3 + -parseInt(__DECODE_0__(0x115)) / 0x4 * (-parseInt(__DECODE_0__(0x11b)) / 0x5) + -parseInt(__DECODE_0__(0x118)) / 0x6 * (parseInt(__DECODE_0__(0x11a)) / 0x7) + -parseInt(__DECODE_0__(0x11c)) / 0x8 + parseInt(__DECODE_0__(0x116)) / 0x9 * (parseInt(__DECODE_0__(0x11d)) / 0xa) + -parseInt(__DECODE_0__(0x117)) / 0xb * (-parseInt(__DECODE_0__(0x112)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa782d);
function __DECODE_0__(aFZTpB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x110;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFZTpB, key);
}
console['log']((args => {
  const [N, ...A] = args[__DECODE_0__(0x119)]()['split']('\x0a')[__DECODE_0__(0x111)](v => v | 0x0);
  if (A[0x0] > 0x0) {
    return '-1';
  }
  let m = 0x0;
  for (let i = 0x1; i < N; i++) {
    if (A[i] > i || A[i] > A[i - 0x1] + 0x1) {
      return '-1';
    }
    if (A[i] === A[i - 0x1] + 0x1) {
      m++;
    } else {
      if (A[i] <= A[i - 0x1]) {
        m += A[i];
      }
    }
  }
  return '' + m;
})(require('fs')[__DECODE_0__(0x113)]('/dev/stdin', __DECODE_0__(0x114))));
function __STRING_ARRAY__() {
  const _0x13773b = ['readFileSync', 'utf8', '3474956UaYQmM', '27954thNpPW', '17765473OJrlRy', '12ZgBnhp', 'trim', '2923060dDrSgs', '5hlYjmr', '9003320DjKEek', '2150MULFjL', '449146ssMUdM', '1QqYnsu', '840897WtGzKG', 'map', '12qsihQC'];
  __STRING_ARRAY__ = function () {
    return _0x13773b;
  };
  return __STRING_ARRAY__();
}
