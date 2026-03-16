(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("794480kkJyka") / 1 + parseInt("1571518YfKHGA") / 2 * (parseInt("3aTsHlw") / 3) + parseInt("26628uvbGfP") / 4 * (parseInt("645TIazYu") / 5) + -parseInt("8546742KHZxhm") / 6 + -parseInt("1303162idJpBf") / 7 + -parseInt("3986104PfyvgJ") / 8 * (-parseInt("9KYYrUd") / 9) + parseInt("10OBDkMA") / 10 * (parseInt("12509299iQYvsr") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 874881);
function perm(xs, n, s, callback) {
  var x;
  var i;
  var len = xs.length;
  s = s || [];
  if (n === 0) {
    callback(s);
  } else {
    for (i = 0; i < len; i++) {
      x = xs["shift"]();
      s["push"](x);
      perm(xs, n - 1, s, callback);
      s["pop"]();
      xs["push"](x);
    }
  }
}
function main() {
  input["forEach"](function (line) {
    var n;
    var s;
    var r = 0;
    if (line.trim() === "") {
      return;
    }
    line = line["split"](" ")["map"](parseFloat);
    n = line[0];
    s = line[1];
    perm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n, [], function (xs) {
      r += xs["reduce"](function (m, x, i) {
        return m + x * (i + 1);
      }, 0) === s ? 1 : 0;
    });
    console["log"](r);
  });
}
var input = "";
process["stdin"].resume();
process["stdin"].setEncoding("utf8");
function __DECODE_0__(uIJboF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 292;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uIJboF, key);
}
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
function __STRING_ARRAY__() {
  var _0x4644f9 = ["3aTsHlw", "split", "1303162idJpBf", "12509299iQYvsr", "645TIazYu", "utf8", "26628uvbGfP", "map", "shift", "end", "push", "9KYYrUd", "3986104PfyvgJ", "forEach", "10OBDkMA", "reduce", "data", "stdin", "log", "794480kkJyka", "pop", "8546742KHZxhm", "1571518YfKHGA"];
  __STRING_ARRAY__ = function () {
    return _0x4644f9;
  };
  return __STRING_ARRAY__();
}
