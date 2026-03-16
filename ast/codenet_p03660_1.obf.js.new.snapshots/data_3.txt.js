(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("361797VnagOu") / 1 * (-parseInt("2srEmjQ") / 2) + parseInt("311604axNlBU") / 3 + -parseInt("1739172ArEHFr") / 4 + -parseInt("336590OjahXW") / 5 + -parseInt("1886208uphpxo") / 6 + parseInt("105ntEZhX") / 7 * (-parseInt("18568DMciWR") / 8) + parseInt("12431412pYYoVJ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 272045);
function __STRING_ARRAY__() {
  var _0x4e231d = ["1886208uphpxo", "336590OjahXW", "361797VnagOu", "/dev/stdin", "2srEmjQ", "fill", "split", "Snuke", "12431412pYYoVJ", "1739172ArEHFr", "18568DMciWR", "311604axNlBU", "105ntEZhX"];
  __STRING_ARRAY__ = function () {
    return _0x4e231d;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0]);
  a = new Array(n - 1).fill(0);
  b = new Array(n - 1)["fill"](0);
  for (i = 0; i < n - 1; i++) {
    tmp = input[i + 1]["split"](" ");
    a[i] = parseInt(tmp[0]) - 1;
    b[i] = parseInt(tmp[1]) - 1;
  }
  d1 = new Array(n)["fill"](n);
  d1[0] = 0;
  d2 = new Array(n).fill(n);
  d2[n - 1] = 0;
  function f(x, d) {
    for (i = 0; i < n - 1; i++) {
      if (a[i] == x && d[b[i]] > d[a[i]]) {
        d[b[i]] = d[a[i]] + 1;
        var j = i;
        f(b[i], d);
        i = j;
      }
      if (b[i] == x && d[a[i]] > d[b[i]]) {
        d[a[i]] = d[b[i]] + 1;
        var j = i;
        f(a[i], d);
        i = j;
      }
    }
    return d;
  }
  d1 = f(0, d1);
  d2 = f(n - 1, d2);
  var x = 0;
  for (i = 0; i < n; i++) {
    if (i != 0 && i != n - 1) {
      if (d1[i] <= d2[i]) {
        x++;
      }
    }
  }
  var ans = "Fennec";
  if (x <= n - 2 - x) {
    ans = "Snuke";
  }
  console.log("%s", ans);
}
function __DECODE_0__(KxTnDr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 412;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KxTnDr, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
