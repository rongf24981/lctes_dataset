var a0_0x21673a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3f4659 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3f4659(0x6e)) / 0x1 * (parseInt(_0x3f4659(0x6b)) / 0x2) + -parseInt(_0x3f4659(0x77)) / 0x3 + -parseInt(_0x3f4659(0x6d)) / 0x4 * (parseInt(_0x3f4659(0x71)) / 0x5) + -parseInt(_0x3f4659(0x73)) / 0x6 * (parseInt(_0x3f4659(0x74)) / 0x7) + -parseInt(_0x3f4659(0x79)) / 0x8 * (-parseInt(_0x3f4659(0x6c)) / 0x9) + -parseInt(_0x3f4659(0x70)) / 0xa + parseInt(_0x3f4659(0x76)) / 0xb * (parseInt(_0x3f4659(0x78)) / 0xc);
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
  var _0x566698 = __DECODE_0__;
  input = input['split']('\x0a');
  n = Number(input[0x0][_0x566698(0x72)]('\x20'));
  V = input[0x1][_0x566698(0x72)]('\x20')[_0x566698(0x75)](Number);
  C = input[0x2][_0x566698(0x72)]('\x20')['map'](Number);
  var Y = 0x0;
  for (var i = 0x0; i < n; i++) {
    y = V[i] - C[i];
    if (y >= 0x0) {
      Y = Y + y;
    }
  }
  console[_0x566698(0x6a)](Y);
}
function __STRING_ARRAY__() {
  var _0x414040 = ['1967048zNHVfF', 'log', '8PDwNPC', '18TDEzkt', '8DWTyxT', '122637fRUzJV', '/dev/stdin', '4036250jVFmcM', '345560ffLetN', 'split', '2782110IHkNpo', '7wyEZQJ', 'map', '3420197LXFyLA', '835152yHrqLa', '60pKWmYp'];
  __STRING_ARRAY__ = function () {
    return _0x414040;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](a0_0x21673a(0x6f), 'utf8'));
