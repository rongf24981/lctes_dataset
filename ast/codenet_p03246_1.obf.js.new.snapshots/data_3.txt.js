function __STRING_ARRAY__() {
  var _0x80db9b = ["1347252DTVjHT", "readFileSync", "push", "534504dBqkfB", "13739724AQXcDl", "25847220vEdLjj", "/dev/stdin", "8QZVJPT", "log", "11866596HZLDhI", "5NTpjsc", "826768SUCfKw", "1119005GCMdyY", "16enJIPG", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x80db9b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1119005GCMdyY") / 1 + parseInt("16enJIPG") / 2 * (parseInt("534504dBqkfB") / 3) + -parseInt("826768SUCfKw") / 4 * (-parseInt("5NTpjsc") / 5) + -parseInt("1347252DTVjHT") / 6 + parseInt("11866596HZLDhI") / 7 + -parseInt("8QZVJPT") / 8 * (-parseInt("13739724AQXcDl") / 9) + -parseInt("25847220vEdLjj") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 925631);
line = require("fs")["readFileSync"]("/dev/stdin", "utf8").split("\n");
n = parseInt(line[0]);
v = line[1].split(" ");
function __DECODE_0__(pBANzs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 342;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pBANzs, key);
}
var odds = {};
var even = {};
for (var i = 0; i < v.length; i++) {
  di = i & 1 ? even : odds;
  di[v[i]] = !di[v[i]] ? 1 : di[v[i]] + 1;
}
var a = [];
var b = [];
for (var k in odds) {
  a["push"]({
    v: k,
    n: odds[k]
  });
}
for (var k in even) {
  b["push"]({
    v: k,
    n: even[k]
  });
}
a.sort((x, y) => y.n - x.n);
b["sort"]((x, y) => y.n - x.n);
va = a[0];
vb = b[0];
if (va.v === vb.v) {
  if (va.n > vb.n) {
    vb = !b[1] ? {
      n: 0
    } : b[1];
  } else {
    va = !a[1] ? {
      n: 0
    } : a[1];
  }
}
log = console["log"];
log(n / 2 - va.n + n / 2 - vb.n);
