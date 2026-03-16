function __STRING_ARRAY__() {
  var _0x4eff84 = ['32880JMuscw', '/dev/stdin', '2447408ZIgmbG', '12968496COrbzy', '309rgOskU', '20070083zUfrDb', 'trim', '460120NQUVTy', 'split', 'utf8', '49kOWEsj', '9965YuogEV', '5130jEhGsn', 'log', 'map', '10ABpsQf', '372837gyzOTs'];
  __STRING_ARRAY__ = function () {
    return _0x4eff84;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(chxQOC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(chxQOC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc9)) / 0x1 + -parseInt(__DECODE_0__(0xcc)) / 0x2 + parseInt(__DECODE_0__(0xce)) / 0x3 * (parseInt(__DECODE_0__(0xca)) / 0x4) + parseInt(__DECODE_0__(0xc4)) / 0x5 * (parseInt(__DECODE_0__(0xc5)) / 0x6) + -parseInt(__DECODE_0__(0xd4)) / 0x7 * (parseInt(__DECODE_0__(0xd1)) / 0x8) + parseInt(__DECODE_0__(0xcd)) / 0x9 * (-parseInt(__DECODE_0__(0xc8)) / 0xa) + parseInt(__DECODE_0__(0xcf)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe44e2);
function Main(input) {
  input = input[__DECODE_0__(0xd2)]('\x0a')[__DECODE_0__(0xc7)](Number);
  console[__DECODE_0__(0xc6)]((input[0x0] + 0x1 - input[0x1]) * (input[0x0] + 0x1 - input[0x2]));
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xcb), __DECODE_0__(0xd3))[__DECODE_0__(0xd0)]());
