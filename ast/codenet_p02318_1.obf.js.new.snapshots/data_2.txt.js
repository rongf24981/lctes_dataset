(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x149)) / 0x1 * (-parseInt(__DECODE_0__(0x13e)) / 0x2) + -parseInt(__DECODE_0__(0x14a)) / 0x3 + -parseInt(__DECODE_0__(0x141)) / 0x4 + parseInt(__DECODE_0__(0x14c)) / 0x5 * (-parseInt(__DECODE_0__(0x13b)) / 0x6) + parseInt(__DECODE_0__(0x13f)) / 0x7 * (-parseInt(__DECODE_0__(0x146)) / 0x8) + parseInt(__DECODE_0__(0x13d)) / 0x9 * (parseInt(__DECODE_0__(0x142)) / 0xa) + parseInt(__DECODE_0__(0x147)) / 0xb * (parseInt(__DECODE_0__(0x140)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xede9d);
function LD(a, b) {
  var ar = new Array();
  for (var i = 0x0; i < a[__DECODE_0__(0x144)] + 0x1; i++) {
    var subar = new Array();
    for (var j = 0x0; j < b[__DECODE_0__(0x144)] + 0x1; j++) {
      subar[__DECODE_0__(0x13c)](0x0);
    }
    ar[__DECODE_0__(0x13c)](subar);
  }
  for (var i = 0x0; i < a['length'] + 0x1; i++) {
    ar[i][0x0] = i;
  }
  for (var i = 0x0; i < b[__DECODE_0__(0x144)] + 0x1; i++) {
    ar[0x0][i] = i;
  }
  for (var i = 0x1; i < a['length'] + 0x1; i++) {
    for (var j = 0x1; j < b[__DECODE_0__(0x144)] + 0x1; j++) {
      if (a['charAt'](i - 0x1) == b[__DECODE_0__(0x14b)](j - 0x1)) {
        ar[i][j] = Math[__DECODE_0__(0x148)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
      } else {
        ar[i][j] = Math['min'](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
      }
    }
  }
  return ar[a[__DECODE_0__(0x144)]][b['length']];
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x143), __DECODE_0__(0x13a));
function __DECODE_0__(xakfaT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xakfaT, key);
}
var strings = input['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x24bdaf = ['6369RuYtvw', 'min', '183qupjSx', '2472975tZlOBd', 'charAt', '65nmyVYD', 'utf8', '124116XIKYlH', 'push', '666kEAjPF', '2026ATUTyq', '7TuzMHF', '36804nvURWl', '1211404elkFYF', '211210nLakqC', '/dev/stdin', 'length', 'log', '9228312fyRomv'];
  __STRING_ARRAY__ = function () {
    return _0x24bdaf;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x145)](LD(strings[0x0], strings[0x1]));
