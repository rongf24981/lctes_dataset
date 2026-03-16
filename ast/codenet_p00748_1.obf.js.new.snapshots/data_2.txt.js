(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11c)) / 0x1 + parseInt(__DECODE_0__(0x119)) / 0x2 + parseInt(__DECODE_0__(0x11f)) / 0x3 * (parseInt(__DECODE_0__(0x125)) / 0x4) + -parseInt(__DECODE_0__(0x118)) / 0x5 + -parseInt(__DECODE_0__(0x11d)) / 0x6 + parseInt(__DECODE_0__(0x122)) / 0x7 * (parseInt(__DECODE_0__(0x120)) / 0x8) + parseInt(__DECODE_0__(0x11a)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7dd65);
var a = [0x1];
for (var i = 0x1; i < 0x186a0; i++) {
  a[i] = a[i - 0x1] + i + 0x1;
}
var b = [0x1];
function __STRING_ARRAY__() {
  var _0x183411 = ['map', '24vnudtg', '8WhHMwN', 'trim', '682857EQwMRn', 'min', '/dev/stdin', '81988kgIffi', 'log', 'utf8', '3584635vYLykl', '1668240yoHfAn', '313578StvFCG', 'readFileSync', '110722suUWzp', '53130FaEzma'];
  __STRING_ARRAY__ = function () {
    return _0x183411;
  };
  return __STRING_ARRAY__();
}
var i = 0x1;
while (!![]) {
  b[i] = b[i - 0x1] + a[i];
  if (b[i] > 0x186a0) {
    break;
  }
  i++;
}
var dpA = [];
var dpB = [];
for (var i = 0x0; i < 0x186a0; i++) {
  dpA[i] = Infinity;
}
function __DECODE_0__(QxTMjk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x116;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QxTMjk, key);
}
for (var i = 0x0; i < 0x186a0; i++) {
  dpB[i] = Infinity;
}
dpA[0x0] = 0x0;
dpB[0x0] = 0x0;
for (var i = 0x0; i < 0x186a0; i++) {
  for (var j = 0x0; j < b['length']; j++) {
    if (i - b[j] >= 0x0) {
      dpA[i] = Math[__DECODE_0__(0x123)](dpA[i - b[j]] + 0x1, dpA[i]);
    }
    if (b[j] % 0x2 == 0x1 && i - b[j] >= 0x0) {
      dpB[i] = Math[__DECODE_0__(0x123)](dpB[i - b[j]] + 0x1, dpB[i]);
    }
  }
}
var input = require('fs')[__DECODE_0__(0x11b)](__DECODE_0__(0x124), __DECODE_0__(0x117));
var arr = input[__DECODE_0__(0x121)]()['split']('\x0a')[__DECODE_0__(0x11e)](Number);
while (!![]) {
  var n = arr['shift']();
  if (n == 0x0) {
    break;
  }
  console[__DECODE_0__(0x116)](dpA[n] + '\x20' + dpB[n]);
}
