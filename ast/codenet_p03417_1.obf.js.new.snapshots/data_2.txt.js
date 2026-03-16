(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x168)) / 0x1 * (parseInt(__DECODE_0__(0x15d)) / 0x2) + -parseInt(__DECODE_0__(0x159)) / 0x3 * (parseInt(__DECODE_0__(0x15a)) / 0x4) + parseInt(__DECODE_0__(0x164)) / 0x5 + -parseInt(__DECODE_0__(0x166)) / 0x6 + parseInt(__DECODE_0__(0x167)) / 0x7 * (parseInt(__DECODE_0__(0x158)) / 0x8) + -parseInt(__DECODE_0__(0x160)) / 0x9 + parseInt(__DECODE_0__(0x15c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3e9fa);
function __STRING_ARRAY__() {
  var _0x1ba61e = ['readFileSync', '8MvdbGZ', '3aZtPwF', '376188rHEzEm', '/dev/stdin', '94420clEvIx', '280bmvqDg', 'floor', 'slice', '1444311ZIXuhq', 'utf8', 'log', 'split', '2361555cpidMs', 'map', '1737900BcakXu', '588063YZdtiG', '1678dvJClJ'];
  __STRING_ARRAY__ = function () {
    return _0x1ba61e;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x163)]('\x20')[__DECODE_0__(0x165)](a => parseInt(a));
  var N = input[0x0];
  var M = input[0x1];
  var ans = 0x0;
  if (N === 0x1 && M === 0x1) {
    ans = 0x1;
  } else {
    if (N === 0x1 || M === 0x1) {
      ans = N + M - 0x3;
    } else {
      ans = (N - 0x2) * (M - 0x2);
    }
  }
  if (ans > 0x1ff973cafa8000) {
    ans = Math['floor']((N - 0x2) / 0x2710) * (M - 0x2);
    tmp = (N - 0x2) % 0x2710 * (M - 0x2);
    ans += Math[__DECODE_0__(0x15e)](tmp / 0x2710);
    tmp = ('0000' + tmp % 0x2710)[__DECODE_0__(0x15f)](-0x4);
    ans += tmp;
  }
  console[__DECODE_0__(0x162)](ans);
}
function __DECODE_0__(GqyqEm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GqyqEm, key);
}
Main(require('fs')[__DECODE_0__(0x157)](__DECODE_0__(0x15b), __DECODE_0__(0x161)));
