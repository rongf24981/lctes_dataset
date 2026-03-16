var a0_0x49c18f = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x37dc16 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x37dc16(0xf9)) / 0x1 + -parseInt(_0x37dc16(0xf5)) / 0x2 * (-parseInt(_0x37dc16(0xf7)) / 0x3) + -parseInt(_0x37dc16(0xf0)) / 0x4 + -parseInt(_0x37dc16(0xed)) / 0x5 + parseInt(_0x37dc16(0xf6)) / 0x6 * (parseInt(_0x37dc16(0xef)) / 0x7) + parseInt(_0x37dc16(0xf8)) / 0x8 + parseInt(_0x37dc16(0xf3)) / 0x9 * (parseInt(_0x37dc16(0xfa)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7c229);
function Main(input) {
  var _0x3c5fce = __DECODE_0__;
  inputList = input[_0x3c5fce(0xee)]('\x0a');
  inputNum = parseInt(inputList[0x0], 0xa);
  firstList = inputList[0x1]['split']('');
  secondList = inputList[0x2][_0x3c5fce(0xee)]('');
  thirdList = inputList[0x3][_0x3c5fce(0xee)]('');
  count = 0x0;
  for (var i = 0x0; i < inputNum; i++) {
    if (firstList[i] == secondList[i] && secondList[i] == thirdList[i]) {
      continue;
    }
    if (firstList[i] == secondList[i] || secondList[i] == thirdList[i] || thirdList[i] == firstList[i]) {
      count++;
      continue;
    }
    count++;
    count++;
  }
  console['log'](count);
}
Main(require('fs')[a0_0x49c18f(0xf1)](a0_0x49c18f(0xf2), a0_0x49c18f(0xf4)));
function __DECODE_0__(ZwTejd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xed;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZwTejd, key);
}
function __STRING_ARRAY__() {
  var _0x4d3ba6 = ['4122945HlioQH', 'split', '2776942sdAcvc', '18004FQOuti', 'readFileSync', '/dev/stdin', '10699515wNlukb', 'utf8', '1494sGPzYg', '6XYWepj', '207ngnvne', '2464528bxQGvR', '607603SoqVUg', '10FybqLB'];
  __STRING_ARRAY__ = function () {
    return _0x4d3ba6;
  };
  return __STRING_ARRAY__();
}
