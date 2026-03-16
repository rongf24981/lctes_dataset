function __STRING_ARRAY__() {
  var _0x2a294f = ["two pair", "utf8", "split", "5044224AvxNPX", "9ssQQvb", "3414640bdSNXg", "trim", "sort", "/dev/stdin", "26780MOihwo", "four card", "152qvcZfk", "34435yCbwVK", "2670689loHmXB", "578yfvJnD", "one pair", "2963688yebxfi", "3189wUHpzk", "map"];
  __STRING_ARRAY__ = function () {
    return _0x2a294f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("26780MOihwo") / 1 + -parseInt("578yfvJnD") / 2 * (parseInt("3189wUHpzk") / 3) + -parseInt("152qvcZfk") / 4 * (parseInt("34435yCbwVK") / 5) + -parseInt("2963688yebxfi") / 6 + parseInt("2670689loHmXB") / 7 + parseInt("5044224AvxNPX") / 8 + parseInt("9ssQQvb") / 9 * (parseInt("3414640bdSNXg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 317438);
function __DECODE_0__(dcMvRH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 485;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dcMvRH, key);
}
require("fs").readFileSync("/dev/stdin", "utf8")["trim"]()["split"]("\n")["map"](function (i) {
  f = function (a, b) {
    return b - a;
  };
  a = [];
  c = i["split"](",")["sort"](f);
  c.map(function (j) {
    if (a[j]) {
      a[j]++;
    } else {
      a[j] = 1;
    }
  });
  a.sort(f);
  l = a[0];
  n = a[1];
  console.log(l == 4 ? "four card" : l == 3 ? n == 2 ? "full house" : "three card" : l == 2 ? n == 2 ? "two pair" : "one pair" : c[0] - c[4] == 4 || c[0] - c[3] == 3 && +c[4] == 1 ? "straight" : "null");
});
