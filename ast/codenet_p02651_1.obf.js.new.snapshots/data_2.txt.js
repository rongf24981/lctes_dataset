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
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x88)) / 0x1 * (parseInt(__DECODE_0__(0x81)) / 0x2) + parseInt(__DECODE_0__(0x8b)) / 0x3 + parseInt(__DECODE_0__(0x84)) / 0x4 * (-parseInt(__DECODE_0__(0x8a)) / 0x5) + -parseInt(__DECODE_0__(0x83)) / 0x6 + parseInt(__DECODE_0__(0x7f)) / 0x7 + parseInt(__DECODE_0__(0x82)) / 0x8 + parseInt(__DECODE_0__(0x80)) / 0x9 * (-parseInt(__DECODE_0__(0x89)) / 0xa);
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
  let t = input[__DECODE_0__(0x85)]('\x0a')[0x0];
  let n;
  let a = new Array(n);
  let s = new Array(n);
  let x = 0x0;
  for (let i = 0x0; i < t; i++) {
    n = input[__DECODE_0__(0x85)]('\x0a')[i * 0x3 + 0x1];
    a = input[__DECODE_0__(0x85)]('\x0a')[i * 0x3 + 0x2]['split']('\x20');
    s = input['split']('\x0a')[i * 0x3 + 0x3][__DECODE_0__(0x85)]('');
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
      console[__DECODE_0__(0x86)](0x0);
    } else {
      console[__DECODE_0__(0x86)](0x1);
    }
    x = 0x0;
  }
}
Main(require('fs')[__DECODE_0__(0x87)]('/dev/stdin', 'utf8'));
