function __DECODE_0__(qswmPG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qswmPG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x103)) / 0x1 + parseInt(__DECODE_0__(0xf7)) / 0x2 * (-parseInt(__DECODE_0__(0xfb)) / 0x3) + parseInt(__DECODE_0__(0xf8)) / 0x4 * (-parseInt(__DECODE_0__(0xff)) / 0x5) + -parseInt(__DECODE_0__(0xf6)) / 0x6 + -parseInt(__DECODE_0__(0x104)) / 0x7 + parseInt(__DECODE_0__(0xfc)) / 0x8 * (parseInt(__DECODE_0__(0xfe)) / 0x9) + parseInt(__DECODE_0__(0xfa)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45cfc);
function Main(input) {
  input = input['split']('\x20');
  const S = parseInt(input[0x0]);
  const W = parseInt(input[0x1]);
  const ret = S <= W ? __DECODE_0__(0x101) : 'safe';
  console[__DECODE_0__(0xfd)](ret);
}
Main(require('fs')[__DECODE_0__(0x102)](__DECODE_0__(0x100), __DECODE_0__(0xf9)));
function __STRING_ARRAY__() {
  const _0x4cb556 = ['30zTmKhn', '/dev/stdin', 'unsafe', 'readFileSync', '378946SZcYRh', '3966872noIXrY', '1284198NTktkB', '18xPkGUB', '254556ibQPzf', 'utf8', '11704830KSUljv', '70161HiTUge', '876520XCjwwr', 'log', '9LfdJLu'];
  __STRING_ARRAY__ = function () {
    return _0x4cb556;
  };
  return __STRING_ARRAY__();
}
