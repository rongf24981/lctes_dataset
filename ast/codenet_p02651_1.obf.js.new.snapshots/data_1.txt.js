function __DECODE_0__(XCtCjo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XCtCjo, key);
}
function __STRING_ARRAY__() {
  const _0x5765c3 = ['log', 'readFileSync', '5UWwXfK', '2727580wvfuGi', '10aloBSx', '920391JEPEUp', '772597bxlNrV', '9nRWdxd', '156974QzptCG', '362232hIqdDb', '720666TeXkDd', '365852hOTmXM', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5765c3;
  };
  return __STRING_ARRAY__();
}
const a0_0x4913b8 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x24be76 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x24be76(0x88)) / 0x1 * (parseInt(_0x24be76(0x81)) / 0x2) + parseInt(_0x24be76(0x8b)) / 0x3 + parseInt(_0x24be76(0x84)) / 0x4 * (-parseInt(_0x24be76(0x8a)) / 0x5) + -parseInt(_0x24be76(0x83)) / 0x6 + parseInt(_0x24be76(0x7f)) / 0x7 + parseInt(_0x24be76(0x82)) / 0x8 + parseInt(_0x24be76(0x80)) / 0x9 * (-parseInt(_0x24be76(0x89)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4422f);
function Main(input) {
  const _0x4909fb = __DECODE_0__;
  let t = input[_0x4909fb(0x85)]('\x0a')[0x0];
  let n;
  let a = new Array(n);
  let s = new Array(n);
  let x = 0x0;
  for (let i = 0x0; i < t; i++) {
    n = input[_0x4909fb(0x85)]('\x0a')[i * 0x3 + 0x1];
    a = input[_0x4909fb(0x85)]('\x0a')[i * 0x3 + 0x2]['split']('\x20');
    s = input['split']('\x0a')[i * 0x3 + 0x3][_0x4909fb(0x85)]('');
    let tmp;
    for (let j = 0x0; j < n; j++) {
      tmp = x ^ a[j];
      if (s[j] == 0x0) {
        if (tmp == 0x0) {
          x = tmp;
        }
      } else {
        x = tmp;
      }
    }
    if (x == 0x0) {
      console[_0x4909fb(0x86)](0x0);
    } else {
      console[_0x4909fb(0x86)](0x1);
    }
    x = 0x0;
  }
}
Main(require('fs')[a0_0x4913b8(0x87)]('/dev/stdin', 'utf8'));
