function __STRING_ARRAY__() {
  var _0x535c75 = ['push', 'split', '2345049sAMCwY', 'readFileSync', 'length', '9251fUgvaB', '150luKIBo', '2565207jSyPwo', '252752EuqaIS', '37430dYkgfi', '24dXXBcq', 'trim', 'utf8', '2169032PECxtt', '138590YglXLD', 'log', '4fHsKhY', '3425910btVpYL'];
  __STRING_ARRAY__ = function () {
    return _0x535c75;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x148)) / 0x1 * (parseInt(__DECODE_0__(0x152)) / 0x2) + -parseInt(__DECODE_0__(0x149)) / 0x3 + -parseInt(__DECODE_0__(0x145)) / 0x4 + -parseInt(__DECODE_0__(0x146)) / 0x5 * (parseInt(__DECODE_0__(0x150)) / 0x6) + -parseInt(__DECODE_0__(0x14c)) / 0x7 + -parseInt(__DECODE_0__(0x142)) / 0x8 * (-parseInt(__DECODE_0__(0x151)) / 0x9) + parseInt(__DECODE_0__(0x153)) / 0xa * (parseInt(__DECODE_0__(0x14f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbfb5b);
function __DECODE_0__(liVgok, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x142;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liVgok, key);
}
function bomb(y, x) {
  var dy = [0x0, 0x0, -0x1, 0x1];
  var dx = [-0x1, 0x1, 0x0, 0x0];
  for (var i = 0x0; i < 0x4; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0x0 || yy >= 0xc || xx < 0x0 || xx >= 0xc) {
      continue;
    }
    if (yx[yy][xx] == 'a') {
      yx[yy][xx] = cnt;
      bomb(yy, xx);
    }
  }
}
var input = require('fs')[__DECODE_0__(0x14d)]('/dev/stdin', __DECODE_0__(0x144));
var Arr = input[__DECODE_0__(0x143)]()['split']('\x0a');
var n = 0x0;
var cnt = 0x0;
var yx = [];
for (var I = 0x0; I < Arr[__DECODE_0__(0x14e)]; I++) {
  n++;
  var v = Arr[I]['replace'](/1/g, 'a');
  var arr = v[__DECODE_0__(0x14b)]('');
  yx[__DECODE_0__(0x14a)](arr);
  if (n != 0xc) {
    continue;
  }
  cnt = 0x0;
  for (var i = 0x0; i < 0xc; i++) {
    for (var j = 0x0; j < 0xc; j++) {
      if (yx[i][j] == 'a') {
        cnt++;
        yx[i][j] = cnt;
        bomb(i, j);
      }
    }
  }
  console[__DECODE_0__(0x147)](cnt);
  n = 0x0;
  yx = [];
  I++;
}
