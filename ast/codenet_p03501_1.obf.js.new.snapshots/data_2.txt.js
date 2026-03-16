(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x146)) / 0x1 * (parseInt(__DECODE_0__(0x154)) / 0x2) + parseInt(__DECODE_0__(0x148)) / 0x3 * (-parseInt(__DECODE_0__(0x14d)) / 0x4) + -parseInt(__DECODE_0__(0x151)) / 0x5 + -parseInt(__DECODE_0__(0x150)) / 0x6 * (-parseInt(__DECODE_0__(0x153)) / 0x7) + parseInt(__DECODE_0__(0x14b)) / 0x8 * (-parseInt(__DECODE_0__(0x14a)) / 0x9) + -parseInt(__DECODE_0__(0x156)) / 0xa + parseInt(__DECODE_0__(0x14e)) / 0xb * (parseInt(__DECODE_0__(0x14c)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbb74e);
function Main(input) {
  const numbers = input['split']('\x20')[__DECODE_0__(0x149)](n => Number(n));
  const p1 = numbers[0x0] * numbers[0x1];
  const p2 = numbers[0x2];
  if (p1 > p2) {
    console[__DECODE_0__(0x152)](p2);
  } else {
    console[__DECODE_0__(0x152)](p1);
  }
}
function __STRING_ARRAY__() {
  const _0x44696c = ['873927dIzOCS', '8NwHRYu', '48QnZhbu', '452NiEPXa', '6989224wedoIb', 'utf8', '2902620TCBlJZ', '6615630pjSOGb', 'log', '7JUlWLK', '18294ycbyqh', 'readFileSync', '3205040fOaBim', '38tNiUFT', '/dev/stdin', '22947iSZiwc', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x44696c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WMQiXk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x146;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WMQiXk, key);
}
Main(require('fs')[__DECODE_0__(0x155)](__DECODE_0__(0x147), __DECODE_0__(0x14f)));
