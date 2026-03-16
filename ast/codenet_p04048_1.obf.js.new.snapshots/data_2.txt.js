function __DECODE_0__(dJWdfQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x72;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dJWdfQ, key);
}
function __STRING_ARRAY__() {
  var _0x35dded = ['1887720LQaRqw', 'split', '1041kYRAeJ', '109568HOroed', '422226TlPPMy', '4418bsErFx', '790740ZEFNSS', '399198jlwiFN', '35JPqkPZ', '5936643jVOsDx', '110osozjI', 'log', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x35dded;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x78)) / 0x1 + parseInt(__DECODE_0__(0x79)) / 0x2 * (parseInt(__DECODE_0__(0x76)) / 0x3) + parseInt(__DECODE_0__(0x77)) / 0x4 * (-parseInt(__DECODE_0__(0x7e)) / 0x5) + -parseInt(__DECODE_0__(0x7b)) / 0x6 * (-parseInt(__DECODE_0__(0x7c)) / 0x7) + parseInt(__DECODE_0__(0x74)) / 0x8 + -parseInt(__DECODE_0__(0x7d)) / 0x9 + -parseInt(__DECODE_0__(0x7a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x65936);
function Main(data) {
  data = data[__DECODE_0__(0x75)]('\x20');
  data[0x0] = Number(data[0x0]);
  data[0x1] = Number(data[0x1]);
  var a = data[0x1] + (data[0x0] - data[0x1]) + (data[0x0] - (data[0x0] - data[0x1])) * 0x2 + (data[0x0] - data[0x1] - (data[0x0] - (data[0x0] - data[0x1]))) * 0x3;
  console[__DECODE_0__(0x72)](a);
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x73)));
