(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("233qaHXmH") / 1 * (-parseInt("1160juMOeu") / 2) + parseInt("3075318DPOVux") / 3 + -parseInt("45196jBbQXH") / 4 * (parseInt("145KpDrXV") / 5) + parseInt("13836EXlYyN") / 6 + -parseInt("10834824IuLocr") / 7 + parseInt("12430128lNiWkP") / 8 + parseInt("2300382tSiAzG") / 9 * (parseInt("10pStgZc") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 826133);
function main() {
  while (1) {
    var n = scan();
    if (n == 0) {
      break;
    }
    var x = Array(n);
    rep(n, function (i) {
      x[i] = scan();
    });
    x[-1] = 0;
    rep(n, function (i) {
      x[i] += x[i - 1];
    });
    var a = -Infinity;
    rep(n, function (i) {
      for (var j = i; j < n; ++j) {
        a = Math["max"](x[j] - x[i - 1], a);
      }
    });
    print(a);
  }
}
function rep(n, func) {
  for (var i = 0; i < n; ++i) {
    func(i);
  }
}
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
var input = "";
function __DECODE_0__(PfPgHu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 365;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PfPgHu, key);
}
var input_index = 0;
function scan(type) {
  if (type === "string") {
    return input[input_index++];
  } else {
    return +input[input_index++];
  }
}
function print(val) {
  console["log"](val);
}
function __STRING_ARRAY__() {
  var _0x54a4bf = ["13836EXlYyN", "split", "233qaHXmH", "12430128lNiWkP", "utf8", "10pStgZc", "2300382tSiAzG", "end", "resume", "setEncoding", "1160juMOeu", "max", "data", "log", "10834824IuLocr", "string", "stdin", "45196jBbQXH", "3075318DPOVux", "145KpDrXV"];
  __STRING_ARRAY__ = function () {
    return _0x54a4bf;
  };
  return __STRING_ARRAY__();
}
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  input = input["split"](/\s+/);
  main();
});
