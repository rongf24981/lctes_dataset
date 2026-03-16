(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x15c)) / 0x1 + parseInt(__DECODE_0__(0x15b)) / 0x2 * (parseInt(__DECODE_0__(0x15e)) / 0x3) + parseInt(__DECODE_0__(0x159)) / 0x4 + -parseInt(__DECODE_0__(0x152)) / 0x5 * (parseInt(__DECODE_0__(0x154)) / 0x6) + parseInt(__DECODE_0__(0x15d)) / 0x7 * (parseInt(__DECODE_0__(0x156)) / 0x8) + -parseInt(__DECODE_0__(0x15a)) / 0x9 + parseInt(__DECODE_0__(0x150)) / 0xa * (parseInt(__DECODE_0__(0x15f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd9c0e);
function __DECODE_0__(dmTnnn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dmTnnn, key);
}
var input = require('fs')[__DECODE_0__(0x157)](__DECODE_0__(0x158), __DECODE_0__(0x160));
function __STRING_ARRAY__() {
  var _0x9ef8ef = ['toFixed', '40hcPKiP', 'readFileSync', '/dev/stdin', '2532076FUlgpy', '12463335VkuuqS', '290492KEfzxL', '1671828ZeCLoi', '2483110YbrDKN', '3kIPrbC', '162349tplsZA', 'utf8', 'trim', '1630eigYvy', 'split', '105bdwUER', 'log', '288306kmBJXa'];
  __STRING_ARRAY__ = function () {
    return _0x9ef8ef;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x14f)]()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
  var arr = Arr[i][__DECODE_0__(0x151)](',')['map'](Number);
  (function (x1, y1, x2, y2, xq, yq) {
    var k = x2 - x1 == 0x0 ? Infinity : (y2 - y1) / (x2 - x1);
    var ans;
    if (k == 0x0) {
      ans = [xq, y1 - (yq - y1)];
    } else {
      if (k == Infinity) {
        ans = [x1 - (xq - x1), yq];
      } else {
        var a1 = (y2 - y1) / (x2 - x1);
        var a2 = -0x1 / a1;
        var b1 = y1 - a1 * x1;
        var b2 = yq - a2 * xq;
        var xm = (b2 - b1) / (a1 - a2);
        var x = 0x2 * xm - xq;
        var y = a2 * x + b2;
        ans = [x, y];
      }
    }
    console[__DECODE_0__(0x153)](ans[0x0][__DECODE_0__(0x155)](0x6) + '\x20' + ans[0x1][__DECODE_0__(0x155)](0x6));
  })['apply'](null, arr);
}
