'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ac)) / 0x1 + parseInt(__DECODE_0__(0x19f)) / 0x2 * (parseInt(__DECODE_0__(0x1a9)) / 0x3) + -parseInt(__DECODE_0__(0x19d)) / 0x4 * (parseInt(__DECODE_0__(0x1a3)) / 0x5) + -parseInt(__DECODE_0__(0x1a2)) / 0x6 + -parseInt(__DECODE_0__(0x1aa)) / 0x7 + parseInt(__DECODE_0__(0x1a7)) / 0x8 + -parseInt(__DECODE_0__(0x1a5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa5a0e);
function __STRING_ARRAY__() {
  var _0x1dacf9 = ['15200wPHMpp', 'fill', '326322hJYFkO', 'min', '6160200xZFKjE', 'readFileSync', '3YflokB', '1269681gLFsgV', '/dev/stdin', '1233713vSLNZV', 'reduce', '1108qgXcsD', 'max', '479102BZmvbt', 'map', 'utf8', '3030924CvSVTH'];
  __STRING_ARRAY__ = function () {
    return _0x1dacf9;
  };
  return __STRING_ARRAY__();
}
function solve(N, A) {
  var dp = new Array(N + 0x1)[__DECODE_0__(0x1a4)](0x0)[__DECODE_0__(0x1a0)](e => new Array(N + 0x1)[__DECODE_0__(0x1a4)](0x0));
  var row = 0x1;
  var col = 0x1;
  while (col <= N) {
    var c = col;
    for (var r = row; r <= N; r++) {
      if (c > N) {
        break;
      }
      if (c === r) {
        dp[r][c] = A[r - 0x1];
      } else {
        if (c === r + 0x1) {
          dp[r][c] = Math[__DECODE_0__(0x19e)](A[r - 0x1], A[c - 0x1]);
        } else {
          dp[r][c] = Math[__DECODE_0__(0x19e)](A[r - 0x1] + Math[__DECODE_0__(0x1a6)](dp[r + 0x1][c - 0x1], dp[r + 0x2][c]), A[c - 0x1] + Math['min'](dp[r + 0x1][c - 0x1], dp[r][c - 0x2]));
        }
      }
      c++;
    }
    col++;
  }
  var taro = dp[0x1][N];
  var sum = A[__DECODE_0__(0x19c)]((acc, current) => acc + current);
  return taro - (sum - taro);
}
function main(input) {
  var lines = input['split']('\x0a');
  var N = parseInt(lines[0x0]);
  var A = lines[0x1]['split']('\x20')[__DECODE_0__(0x1a0)](l => parseInt(l));
  var ans = solve(N, A);
  console['log'](ans);
}
function __DECODE_0__(FhsANB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FhsANB, key);
}
main(require('fs')[__DECODE_0__(0x1a8)](__DECODE_0__(0x1ab), __DECODE_0__(0x1a1)));
