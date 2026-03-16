(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("362508NsNawQ") / 1 + parseInt("3463198zNPoBl") / 2 * (-parseInt("3VvlMAr") / 3) + -parseInt("4012oSqYJb") / 4 * (parseInt("8805CokCmU") / 5) + parseInt("1772562EEehtc") / 6 + -parseInt("11318363OTpsyx") / 7 + parseInt("119208QUenDm") / 8 * (-parseInt("351XKagJI") / 9) + -parseInt("59980190oingaQ") / 10 * (-parseInt("11IAqlrr") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 960024);
var n;
var m;
var x = [];
function main() {
  n = scan();
  m = scan();
  rep(n, function (i) {
    x[i] = 0;
  });
  rep(m, function (i) {
    var c = scan();
    var d = scan();
    x[c] += 1;
    x[d] -= 1;
  });
  rep(1, n, function (i) {
    x[i] += x[i - 1];
  });
  var c = 0;
  rep(n, function (i) {
    if (x[i] > 0) {
      ++c;
    }
  });
  print(c * 2 + n + 1);
}
function __STRING_ARRAY__() {
  var _0x503127 = ["8805CokCmU", "362508NsNawQ", "59980190oingaQ", "11IAqlrr", "3463198zNPoBl", "351XKagJI", "data", "4012oSqYJb", "reverse", "11318363OTpsyx", "stdin", "pop", "119208QUenDm", "1772562EEehtc", "3VvlMAr", "split", "setEncoding", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x503127;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DPxXFr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 385;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DPxXFr, key);
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
var input = "";
function scan() {
  return +input["pop"]();
}
function scan_string() {
  return input["pop"]();
}
function print(val) {
  console.log(val);
}
process["stdin"].resume();
process["stdin"]["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["trim"]()["split"](/\s+/)["reverse"]();
  main();
});
