(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ec)) / 0x1 * (parseInt(__DECODE_0__(0x1f4)) / 0x2) + parseInt(__DECODE_0__(0x1ef)) / 0x3 + parseInt(__DECODE_0__(0x1e3)) / 0x4 * (parseInt(__DECODE_0__(0x1e9)) / 0x5) + parseInt(__DECODE_0__(0x1e4)) / 0x6 * (parseInt(__DECODE_0__(0x1de)) / 0x7) + parseInt(__DECODE_0__(0x1e7)) / 0x8 + -parseInt(__DECODE_0__(0x1e6)) / 0x9 * (parseInt(__DECODE_0__(0x1f1)) / 0xa) + -parseInt(__DECODE_0__(0x1ed)) / 0xb * (parseInt(__DECODE_0__(0x1df)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d871);
function area(x1, y1, x2, y2, x3, y3) {
  var ab = Math['sqrt']((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  var bc = Math[__DECODE_0__(0x1f2)]((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
  var ca = Math['sqrt']((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
  var s = 0.5 * (ab + bc + ca);
  var S = Math['sqrt'](s * (s - ab) * (s - bc) * (s - ca));
  return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
  var abc = area(x1, y1, x2, y2, x3, y3);
  var abp = area(x1, y1, x2, y2, xp, yp);
  var bcp = area(x2, y2, x3, y3, xp, yp);
  var cap = area(x3, y3, x1, y1, xp, yp);
  var sub = abc - (abp + bcp + cap);
  return Math['abs'](sub) <= 0.01;
}
function main() {
  input['forEach'](function (line) {
    if (line[__DECODE_0__(0x1e1)]() === '') {
      return;
    }
    console['log'](inTriangle[__DECODE_0__(0x1ea)](null, line[__DECODE_0__(0x1f0)]('\x20')[__DECODE_0__(0x1eb)](parseFloat)) ? 'YES' : 'NO');
  });
}
var input = '';
process['stdin'][__DECODE_0__(0x1ee)]();
process[__DECODE_0__(0x1e2)][__DECODE_0__(0x1e5)](__DECODE_0__(0x1e0));
function __DECODE_0__(icXYio, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1de;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(icXYio, key);
}
function __STRING_ARRAY__() {
  var _0x4116ee = ['5cPnFWU', 'apply', 'map', '126836dJMIqg', '2118589kJhJon', 'resume', '1955661oYZsmg', 'split', '50JvLVOL', 'sqrt', 'end', '6HWkCCN', '1297296lOZxHw', '12XnpmVe', 'utf8', 'trim', 'stdin', '881688SXXbbt', '6zeiKdg', 'setEncoding', '781173ZcoWSs', '2660352wSwpCB', 'data'];
  __STRING_ARRAY__ = function () {
    return _0x4116ee;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x1e2)]['on'](__DECODE_0__(0x1e8), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x1e2)]['on'](__DECODE_0__(0x1f3), function () {
  input = input[__DECODE_0__(0x1f0)]('\x0a');
  main();
});
