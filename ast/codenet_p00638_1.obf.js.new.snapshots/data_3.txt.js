(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("256101DhsxZR") / 1 + -parseInt("18004STgXyf") / 2 + parseInt("303JEuNgp") / 3 * (parseInt("31476VDOCgQ") / 4) + parseInt("5211920VyqqyT") / 5 + -parseInt("641052zQyIyP") / 6 * (parseInt("49Gzdhlc") / 7) + -parseInt("56yMCyLm") / 8 * (-parseInt("1368414jBlEVn") / 9) + -parseInt("13201480tmFLZt") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 568330);
var n;
var x = [];
function main() {
  while (n = scan()) {
    rep(n, function (i) {
      x[i] = [scan(), scan()];
    });
    x["sort"](function (a, b) {
      return a[1] - b[1];
    });
    var ans = true;
    var w = 0;
    rep(n, function (i) {
      w += x[i][0];
      ans = w <= x[i][1] && ans;
    });
    print(ans ? "Yes" : "No");
  }
}
function rep(a, b, c) {
  if (c === undefined) {
    c = b;
    b = a;
    a = 0;
  }
  for (var i = a; i < b; ++i) {
    if (c(i) === false) {
      break;
    }
  }
}
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
var input = "";
var input_index = 0;
function __STRING_ARRAY__() {
  var _0x3f887f = ["setEncoding", "trim", "Yes", "sort", "31476VDOCgQ", "split", "utf8", "18004STgXyf", "1368414jBlEVn", "256101DhsxZR", "string", "641052zQyIyP", "stdin", "5211920VyqqyT", "56yMCyLm", "49Gzdhlc", "resume", "13201480tmFLZt", "data", "303JEuNgp"];
  __STRING_ARRAY__ = function () {
    return _0x3f887f;
  };
  return __STRING_ARRAY__();
}
function scan(type) {
  if (type === "string") {
    return input[input_index++];
  } else {
    return +input[input_index++];
  }
}
function print(val) {
  console.log(val);
}
function __DECODE_0__(FNRcEL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 311;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FNRcEL, key);
}
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  input = input["trim"]()["split"](/\s+/);
  main();
});
