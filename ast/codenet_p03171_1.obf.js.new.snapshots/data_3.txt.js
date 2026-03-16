'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1233713vSLNZV") / 1 + parseInt("479102BZmvbt") / 2 * (parseInt("3YflokB") / 3) + -parseInt("1108qgXcsD") / 4 * (parseInt("15200wPHMpp") / 5) + -parseInt("3030924CvSVTH") / 6 + -parseInt("1269681gLFsgV") / 7 + parseInt("6160200xZFKjE") / 8 + -parseInt("326322hJYFkO") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 678414);
function __STRING_ARRAY__() {
  var _0x1dacf9 = ["15200wPHMpp", "fill", "326322hJYFkO", "min", "6160200xZFKjE", "readFileSync", "3YflokB", "1269681gLFsgV", "/dev/stdin", "1233713vSLNZV", "reduce", "1108qgXcsD", "max", "479102BZmvbt", "map", "utf8", "3030924CvSVTH"];
  __STRING_ARRAY__ = function () {
    return _0x1dacf9;
  };
  return __STRING_ARRAY__();
}
function solve(N, A) {
  var dp = new Array(N + 1)["fill"](0)["map"](e => new Array(N + 1)["fill"](0));
  var row = 1;
  var col = 1;
  while (col <= N) {
    var c = col;
    for (var r = row; r <= N; r++) {
      if (c > N) {
        break;
      }
      if (c === r) {
        dp[r][c] = A[r - 1];
      } else if (c === r + 1) {
        dp[r][c] = Math["max"](A[r - 1], A[c - 1]);
      } else {
        dp[r][c] = Math["max"](A[r - 1] + Math["min"](dp[r + 1][c - 1], dp[r + 2][c]), A[c - 1] + Math.min(dp[r + 1][c - 1], dp[r][c - 2]));
      }
      c++;
    }
    col++;
  }
  var taro = dp[1][N];
  var sum = A["reduce"]((acc, current) => acc + current);
  return taro - (sum - taro);
}
function main(input) {
  var lines = input.split("\n");
  var N = parseInt(lines[0]);
  var A = lines[1].split(" ")["map"](l => parseInt(l));
  var ans = solve(N, A);
  console.log(ans);
}
function __DECODE_0__(FhsANB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 412;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FhsANB, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
