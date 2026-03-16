function __DECODE_0__(qnwFRt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 189;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qnwFRt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("17762ojQjNW") / 1 * (-parseInt("2AsNHjF") / 2) + parseInt("932580jgXxVX") / 3 + parseInt("1103200lKPKmz") / 4 + -parseInt("73845canuKE") / 5 + -parseInt("1822104hEfRUe") / 6 + -parseInt("795599JnYBhL") / 7 * (-parseInt("8iVpoNP") / 8) + parseInt("3573BSdtko") / 9 * (-parseInt("4310WNZQBM") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 192995);
function Main(s) {
  s = s.split("\n");
  var n = s[0].split(" ")["map"](a => +a);
  var m = n[1];
  n = n[0];
  var b = Array(n)["fill"](0).map(a => Array(n).fill(0));
  for (var i = 0; i < m; i++) {
    var a = s[i + 1]["split"](" ")["map"](a => a - 1);
    b[a[0]][a[1]] = b[a[1]][a[0]] = 1;
  }
  var k = 9000000000;
  var x;
  for (i = 0; i < n; i++) {
    var t = b[i]["reduce"]((a, b) => a + b);
    if (k > t) {
      k = t;
      x = i;
    }
  }
  var y = [];
  var z = [];
  for (i = 0; i < n; i++) {
    if (i === x) {
      continue;
    }
    if (b[x][i]) {
      y["push"](i);
    } else {
      z["push"](i);
    }
  }
  for (i = 0; i < y["length"]; i++) {
    for (var j = i + 1; j < y["length"]; j++) {
      if (!b[y[i]][y[j]]) {
        console["log"](-1);
        return;
      }
    }
  }
  for (i = 0; i < z["length"]; i++) {
    for (j = i + 1; j < z["length"]; j++) {
      if (!b[z[i]][z[j]]) {
        console["log"](-1);
        return;
      }
    }
  }
  console["log"](k * (k + 1) / 2 + (n - k - 1) * (n - k - 2) / 2);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x7431a7 = ["utf8", "reduce", "932580jgXxVX", "8iVpoNP", "2AsNHjF", "4310WNZQBM", "readFileSync", "push", "1103200lKPKmz", "split", "log", "/dev/stdin", "795599JnYBhL", "17762ojQjNW", "fill", "length", "3573BSdtko", "map", "1822104hEfRUe", "73845canuKE"];
  __STRING_ARRAY__ = function () {
    return _0x7431a7;
  };
  return __STRING_ARRAY__();
}
