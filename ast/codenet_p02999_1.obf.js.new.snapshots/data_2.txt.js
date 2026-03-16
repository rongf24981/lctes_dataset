(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1b8)) / 0x1 * (parseInt(__DECODE_0__(0x1b3)) / 0x2) + -parseInt(__DECODE_0__(0x1ba)) / 0x3 * (-parseInt(__DECODE_0__(0x1bc)) / 0x4) + parseInt(__DECODE_0__(0x1b7)) / 0x5 * (parseInt(__DECODE_0__(0x1b1)) / 0x6) + -parseInt(__DECODE_0__(0x1b5)) / 0x7 + parseInt(__DECODE_0__(0x1bf)) / 0x8 * (parseInt(__DECODE_0__(0x1bd)) / 0x9) + -parseInt(__DECODE_0__(0x1bb)) / 0xa + parseInt(__DECODE_0__(0x1b2)) / 0xb * (-parseInt(__DECODE_0__(0x1c1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcc89b);
function __DECODE_0__(ymwBoW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ymwBoW, key);
}
function Main(input) {
  var result;
  const X = parseInt(input[0x0]);
  const A = parseInt(input[0x1]);
  result = X < A ? 0x0 : 0xa;
  console[__DECODE_0__(0x1b6)](result);
}
Main(require('fs')[__DECODE_0__(0x1c0)]('/dev/stdin', __DECODE_0__(0x1b9))[__DECODE_0__(0x1be)]()[__DECODE_0__(0x1b4)](/\n|\s/));
function __STRING_ARRAY__() {
  const _0x4f1f43 = ['8457942zJevBG', '638ywJCcW', '2eBJnBl', 'split', '8378867toUQOT', 'log', '5eekjyc', '1123240hQuXRo', 'utf8', '3hRcxzl', '1281730poCMzx', '3419788GSXTDM', '9950355BbiLZN', 'trim', '8SQGIiT', 'readFileSync', '482172KTsZZI'];
  __STRING_ARRAY__ = function () {
    return _0x4f1f43;
  };
  return __STRING_ARRAY__();
}
