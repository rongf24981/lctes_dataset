function __STRING_ARRAY__() {
  const _0x4113a2 = ['/dev/stdin', '1367064xBAWEx', 'utf8', '10daTnvb', '1472790ATtBuL', 'log', 'split', '198596xnKsQR', '4129032pjpWXi', '610YUCmKZ', '1549303YsONXn', '3HOFJVd', '104463jVlUWQ', 'readFileSync', '2037087HUuSfW'];
  __STRING_ARRAY__ = function () {
    return _0x4113a2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HucXBO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ec;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HucXBO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1fa)) / 0x1 * (parseInt(__DECODE_0__(0x1f6)) / 0x2) + -parseInt(__DECODE_0__(0x1ee)) / 0x3 + parseInt(__DECODE_0__(0x1f0)) / 0x4 * (parseInt(__DECODE_0__(0x1f2)) / 0x5) + parseInt(__DECODE_0__(0x1f3)) / 0x6 + parseInt(__DECODE_0__(0x1f9)) / 0x7 + -parseInt(__DECODE_0__(0x1f7)) / 0x8 + parseInt(__DECODE_0__(0x1ec)) / 0x9 * (parseInt(__DECODE_0__(0x1f8)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x592f5);
function Main(impu) {
  let imput = impu['split']('\x0a');
  let name = imput[0x0][__DECODE_0__(0x1f5)]('\x20');
  let count = imput[0x1][__DECODE_0__(0x1f5)]('\x20');
  if (name[0x0] === imput[0x2]) {
    count[0x0]--;
  } else {
    count[0x1]--;
  }
  console[__DECODE_0__(0x1f4)](count[0x0] + '\x20' + count[0x1]);
}
Main(require('fs')[__DECODE_0__(0x1ed)](__DECODE_0__(0x1ef), __DECODE_0__(0x1f1)));
