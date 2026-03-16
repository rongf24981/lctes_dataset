(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x6e)) / 0x1 * (parseInt(__DECODE_0__(0x6b)) / 0x2) + -parseInt(__DECODE_0__(0x77)) / 0x3 + -parseInt(__DECODE_0__(0x6d)) / 0x4 * (parseInt(__DECODE_0__(0x71)) / 0x5) + -parseInt(__DECODE_0__(0x73)) / 0x6 * (parseInt(__DECODE_0__(0x74)) / 0x7) + -parseInt(__DECODE_0__(0x79)) / 0x8 * (-parseInt(__DECODE_0__(0x6c)) / 0x9) + -parseInt(__DECODE_0__(0x70)) / 0xa + parseInt(__DECODE_0__(0x76)) / 0xb * (parseInt(__DECODE_0__(0x78)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4263b);
function __DECODE_0__(oGPXSI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oGPXSI, key);
}
function Main(input) {
  input = input['split']('\x0a');
  n = Number(input[0x0][__DECODE_0__(0x72)]('\x20'));
  V = input[0x1][__DECODE_0__(0x72)]('\x20')[__DECODE_0__(0x75)](Number);
  C = input[0x2][__DECODE_0__(0x72)]('\x20')['map'](Number);
  var Y = 0x0;
  for (var i = 0x0; i < n; i++) {
    y = V[i] - C[i];
    if (y >= 0x0) {
      Y = Y + y;
    }
  }
  console[__DECODE_0__(0x6a)](Y);
}
function __STRING_ARRAY__() {
  var _0x414040 = ['1967048zNHVfF', 'log', '8PDwNPC', '18TDEzkt', '8DWTyxT', '122637fRUzJV', '/dev/stdin', '4036250jVFmcM', '345560ffLetN', 'split', '2782110IHkNpo', '7wyEZQJ', 'map', '3420197LXFyLA', '835152yHrqLa', '60pKWmYp'];
  __STRING_ARRAY__ = function () {
    return _0x414040;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x6f), 'utf8'));
