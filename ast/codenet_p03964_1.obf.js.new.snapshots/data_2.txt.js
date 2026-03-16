function __DECODE_0__(rTmzgK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rTmzgK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ea)) / 0x1 * (-parseInt(__DECODE_0__(0x1e9)) / 0x2) + parseInt(__DECODE_0__(0x1f5)) / 0x3 * (-parseInt(__DECODE_0__(0x1eb)) / 0x4) + parseInt(__DECODE_0__(0x1e6)) / 0x5 * (-parseInt(__DECODE_0__(0x1ee)) / 0x6) + -parseInt(__DECODE_0__(0x1f7)) / 0x7 * (parseInt(__DECODE_0__(0x1e7)) / 0x8) + -parseInt(__DECODE_0__(0x1ec)) / 0x9 + -parseInt(__DECODE_0__(0x1f0)) / 0xa + -parseInt(__DECODE_0__(0x1f2)) / 0xb * (-parseInt(__DECODE_0__(0x1f3)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x34d97);
function Main(input) {
  input = input[__DECODE_0__(0x1ef)]('\x0a');
  var n = parseInt(input[0x0]);
  t = new Array(n)[__DECODE_0__(0x1f4)](0x0);
  a = new Array(n)[__DECODE_0__(0x1f4)](0x0);
  for (i = 0x0; i < n; i++) {
    t[i] = parseInt(input[i + 0x1][__DECODE_0__(0x1ef)]('\x20')[0x0]);
    a[i] = parseInt(input[i + 0x1]['split']('\x20')[0x1]);
  }
  var tvote = t[0x0];
  var avote = a[0x0];
  for (i = 0x1; i < n; i++) {
    if (Math[__DECODE_0__(0x1e8)](tvote / t[i]) * t[i] / t[i] * a[i] >= avote) {
      tvote = Math[__DECODE_0__(0x1e8)](tvote / t[i]) * t[i];
      avote = Math[__DECODE_0__(0x1e8)](tvote / t[i]) * t[i] / t[i] * a[i];
    } else {
      tvote = Math[__DECODE_0__(0x1e8)](avote / a[i]) * a[i] / a[i] * t[i];
      avote = Math[__DECODE_0__(0x1e8)](avote / a[i]) * a[i];
    }
  }
  var ans = avote + tvote;
  console[__DECODE_0__(0x1f6)]('%s', ans);
}
Main(require('fs')[__DECODE_0__(0x1ed)]('/dev/stdin', __DECODE_0__(0x1f1)));
function __STRING_ARRAY__() {
  var _0x5ca048 = ['split', '3776910oFEyLa', 'utf8', '1078wLunwT', '203244ifRXjV', 'fill', '481251ZjoXlO', 'log', '46970OsSqMy', '10tmSoFL', '88AoMYAd', 'ceil', '2ZPHZSE', '50788UspZaM', '8hcCLyV', '2247768oJMANf', 'readFileSync', '1111440lOtLcy'];
  __STRING_ARRAY__ = function () {
    return _0x5ca048;
  };
  return __STRING_ARRAY__();
}
