function __DECODE_0__(iheDeq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x165;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iheDeq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x168)) / 0x1 + -parseInt(__DECODE_0__(0x16c)) / 0x2 + parseInt(__DECODE_0__(0x16b)) / 0x3 + -parseInt(__DECODE_0__(0x170)) / 0x4 * (-parseInt(__DECODE_0__(0x16d)) / 0x5) + -parseInt(__DECODE_0__(0x171)) / 0x6 + parseInt(__DECODE_0__(0x175)) / 0x7 * (parseInt(__DECODE_0__(0x174)) / 0x8) + parseInt(__DECODE_0__(0x169)) / 0x9 * (-parseInt(__DECODE_0__(0x16f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2efbe);
function Main(input) {
  var str = input;
  var tmp = str[__DECODE_0__(0x173)]('\x20')[__DECODE_0__(0x172)](Number);
  if (tmp[0x0] == tmp[0x1] && tmp[0x1] == tmp[0x2]) {
    console['log'](__DECODE_0__(0x167));
  } else {
    console[__DECODE_0__(0x16a)]('No');
  }
}
Main(require('fs')[__DECODE_0__(0x16e)](__DECODE_0__(0x166), __DECODE_0__(0x165)));
function __STRING_ARRAY__() {
  var _0x5d0eaa = ['log', '861018LAfLYn', '583114EtqVgg', '90ncsfSc', 'readFileSync', '269710IIfGsZ', '44984DwEyaW', '55230WAkVHz', 'map', 'split', '8oJiSru', '2407741pQbIYl', 'utf8', '/dev/stdin', 'Yes', '37405Wkdkyq', '126TpcjPV'];
  __STRING_ARRAY__ = function () {
    return _0x5d0eaa;
  };
  return __STRING_ARRAY__();
}
