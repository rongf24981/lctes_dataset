function __DECODE_0__(RflYZd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x88;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RflYZd, key);
}
function __STRING_ARRAY__() {
  var _0x2be178 = ['log', '8jbFtGh', '/dev/stdin', '421924pEbYqp', 'utf8', 'readFileSync', '1520556fCYqcl', '5529678bqNQdo', '35qodVHt', '7274jBCdsI', '63HVBFIq', '121yXGfuD', 'split', '2447550lyJUTB', 'length', '55xYeuSN', '3752231JBKeNQ', '393090xHTLSE', 'min'];
  __STRING_ARRAY__ = function () {
    return _0x2be178;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8c)) / 0x1 * (-parseInt(__DECODE_0__(0x8d)) / 0x2) + -parseInt(__DECODE_0__(0x91)) / 0x3 + -parseInt(__DECODE_0__(0x9a)) / 0x4 * (-parseInt(__DECODE_0__(0x93)) / 0x5) + parseInt(__DECODE_0__(0x8b)) / 0x6 + parseInt(__DECODE_0__(0x94)) / 0x7 * (parseInt(__DECODE_0__(0x98)) / 0x8) + parseInt(__DECODE_0__(0x8e)) / 0x9 * (parseInt(__DECODE_0__(0x95)) / 0xa) + parseInt(__DECODE_0__(0x8f)) / 0xb * (-parseInt(__DECODE_0__(0x8a)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc5ece);
function Main(input) {
  input = input[__DECODE_0__(0x90)]('\x0a');
  if (input[input['length'] - 0x1] === '') {
    input['pop']();
  }
  const N = input[0x0];
  var up = 0x1;
  var down = 0x0;
  var nup;
  var ndown;
  for (var i = 0x0; i < N[__DECODE_0__(0x92)]; i++) {
    nup = Math[__DECODE_0__(0x96)](0x9 - N[i] + up, 0x1 + down + (N[i] - 0x0));
    ndown = Math['min'](0xa - N[i] + up, down + (N[i] - 0x0));
    up = nup;
    down = ndown;
  }
  console[__DECODE_0__(0x97)](down);
}
Main(require('fs')[__DECODE_0__(0x89)](__DECODE_0__(0x99), __DECODE_0__(0x88)));
