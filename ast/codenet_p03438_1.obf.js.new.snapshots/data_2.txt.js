(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xbf)) / 0x1 + parseInt(__DECODE_0__(0xc8)) / 0x2 + parseInt(__DECODE_0__(0xc6)) / 0x3 + -parseInt(__DECODE_0__(0xbe)) / 0x4 * (parseInt(__DECODE_0__(0xc2)) / 0x5) + -parseInt(__DECODE_0__(0xcb)) / 0x6 + parseInt(__DECODE_0__(0xca)) / 0x7 * (-parseInt(__DECODE_0__(0xc7)) / 0x8) + -parseInt(__DECODE_0__(0xc5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x231f2);
function __STRING_ARRAY__() {
  var _0x460caa = ['28528IvGkhd', '213269nRvGce', 'split', '/dev/stdin', '155YbIMRW', 'log', 'readFileSync', '846675VsZUhg', '667551QPEcWZ', '1184bTwoKR', '519038feGPBk', 'abs', '1771oTDMxi', '1193016ZPvZNr', 'fill', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x460caa;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input['split']('\x0a');
  var n = parseInt(input[0x0]);
  a = new Array(n)[__DECODE_0__(0xcc)](0x0);
  b = new Array(n)[__DECODE_0__(0xcc)](0x0);
  tmpa = input[0x1]['split']('\x20');
  tmpb = input[0x2][__DECODE_0__(0xc0)]('\x20');
  var suma = 0x0;
  var sumb = 0x0;
  var dif = 0x0;
  for (i = 0x0; i < n; i++) {
    a[i] = parseInt(tmpa[i]);
    suma += a[i];
    b[i] = parseInt(tmpb[i]);
    sumb += b[i];
    dif += Math[__DECODE_0__(0xc9)](a[i] - b[i]);
  }
  var ans = 'No';
  if (suma <= sumb && dif <= (sumb - suma) * 0x3) {
    ans = 'Yes';
  }
  console[__DECODE_0__(0xc3)]('%s', ans);
}
function __DECODE_0__(VKOnqH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VKOnqH, key);
}
Main(require('fs')[__DECODE_0__(0xc4)](__DECODE_0__(0xc1), __DECODE_0__(0xcd)));
