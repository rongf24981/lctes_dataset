(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x9b)) / 0x1 * (-parseInt(__DECODE_0__(0x9f)) / 0x2) + -parseInt(__DECODE_0__(0xa1)) / 0x3 + parseInt(__DECODE_0__(0xa5)) / 0x4 + -parseInt(__DECODE_0__(0x9c)) / 0x5 * (-parseInt(__DECODE_0__(0xa2)) / 0x6) + parseInt(__DECODE_0__(0x9a)) / 0x7 * (parseInt(__DECODE_0__(0xa4)) / 0x8) + parseInt(__DECODE_0__(0x99)) / 0x9 + -parseInt(__DECODE_0__(0x95)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd003d);
function __DECODE_0__(VOjBeO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x95;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VOjBeO, key);
}
function Main(input) {
  input = input['split']('\x0a');
  for (i = 0x0; i < input[__DECODE_0__(0x9e)]; i = i + 0x2) {
    var N = parseInt(input[i]);
    var a = input[i + 0x1][__DECODE_0__(0x9d)]('');
    var aa = a['map'](Number);
    for (j = N; j > 0x1; j--) {
      for (k = 0x0; k < j; k++) {
        var e = Math[__DECODE_0__(0x98)](aa[0x0] - aa[0x1]);
        aa[__DECODE_0__(0x96)](e);
        aa['shift']();
      }
      aa[__DECODE_0__(0x97)]();
    }
    console[__DECODE_0__(0xa0)](aa[0x0]);
  }
}
function __STRING_ARRAY__() {
  var _0x3e4124 = ['4274116gCFPUI', '24791430DiKdTa', 'push', 'pop', 'abs', '14272020nxLhWR', '27356lSQPgZ', '2UuFJRQ', '62735ZDKyJp', 'split', 'length', '959258WLEZSd', 'log', '1464600xKtoSP', '330WoBbGa', 'utf8', '2936tpjPHq'];
  __STRING_ARRAY__ = function () {
    return _0x3e4124;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xa3)));
