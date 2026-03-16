var a0_0x5c7665 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x319a2f = ['6465984gCVMPM', 'min', 'log', 'readFileSync', '323101UFLHEf', 'pow', '343055McsRIX', '600237QKFRUz', '27161030pYewIC', 'utf8', '2892758LttPPg', '8CcTCwU', '3RIPnMO', 'split', '175PHIEQB', '174618ZrPIqM'];
  __STRING_ARRAY__ = function () {
    return _0x319a2f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x1901a3 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x1901a3(0x1bf)) / 0x1 + -parseInt(_0x1901a3(0x1c5)) / 0x2 * (parseInt(_0x1901a3(0x1b7)) / 0x3) + -parseInt(_0x1901a3(0x1c6)) / 0x4 * (parseInt(_0x1901a3(0x1c1)) / 0x5) + parseInt(_0x1901a3(0x1ba)) / 0x6 * (parseInt(_0x1901a3(0x1b9)) / 0x7) + -parseInt(_0x1901a3(0x1bb)) / 0x8 + parseInt(_0x1901a3(0x1c2)) / 0x9 + parseInt(_0x1901a3(0x1c3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc231d);
function __DECODE_0__(PHdqUq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PHdqUq, key);
}
function main(input) {
  var _0x4f555b = __DECODE_0__;
  const lines = input['split']('\x0a');
  const N = parseInt(lines[0x0]);
  const S = lines[0x1][_0x4f555b(0x1b8)]('');
  var result = Math[_0x4f555b(0x1c0)](0xa, 0x8);
  var current_count = 0x0;
  for (var i = 0x0; i < N; i++) {
    if (S[i] == 'E') {
      current_count++;
    }
  }
  result = current_count;
  for (var i = 0x1; i < N; i++) {
    if (S[i] == 'E') {
      current_count--;
    }
    if (S[i - 0x1] == 'W') {
      current_count++;
    }
    result = Math[_0x4f555b(0x1bc)](result, current_count);
  }
  console[_0x4f555b(0x1bd)](result);
}
main(require('fs')[a0_0x5c7665(0x1be)]('/dev/stdin', a0_0x5c7665(0x1c4)));
