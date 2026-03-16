function __DECODE_0__(RlysPo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 311;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RlysPo, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("496902gNtLpM") / 1 + -parseInt("2702324yOfApg") / 2 + -parseInt("1991154cDBmDU") / 3 + parseInt("4691960RmVmXk") / 4 + -parseInt("5fFQXMi") / 5 * (-parseInt("7377324XsikJH") / 6) + parseInt("8051946eEjigi") / 7 + -parseInt("3256vZwBgn") / 8 * (parseInt("28674qVlDgp") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 738142);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x1ceac2 = ["map", "5fFQXMi", "split", "1991154cDBmDU", "8051946eEjigi", "length", "log", "4691960RmVmXk", "join", "28674qVlDgp", "/dev/stdin", "utf8", "7377324XsikJH", "3256vZwBgn", "496902gNtLpM", "push", "forEach", "2702324yOfApg"];
  __STRING_ARRAY__ = function () {
    return _0x1ceac2;
  };
  return __STRING_ARRAY__();
}
var Arr = input.replace(/\n$/, "")["split"]("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var arr = Arr.shift()["split"](" ")["map"](Number);
  var x = arr[0];
  var ans = [[x]];
  for (var i = 1; i < n; i++) {
    if (x + 1 == arr[i]) {
      ans[ans.length - 1]["push"](arr[i]);
    } else {
      ans["push"]([arr[i]]);
    }
    x = arr[i];
  }
  ans["forEach"](function (v, i) {
    if (v["length"] !== 1) {
      ans[i] = v[0] + "-" + v[v["length"] - 1];
    } else {
      ans[i] = v[0];
    }
  });
  console["log"](ans["join"](" "));
}
