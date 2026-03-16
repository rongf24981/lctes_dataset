function __STRING_ARRAY__() {
  var _0x5bd453 = ["6cFNPCg", "/dev/stdin", "338028zgpnnU", "558015ARcdkW", "64810XvbEuB", "trim", "6NNBsCz", "385677sOctCk", "split", "utf8", "8864030skCYDJ", "1343193dIEurZ", "map", "push", "263585bVOlre", "104gIDIgF"];
  __STRING_ARRAY__ = function () {
    return _0x5bd453;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("6NNBsCz") / 1 * (parseInt("64810XvbEuB") / 2) + -parseInt("1343193dIEurZ") / 3 + -parseInt("338028zgpnnU") / 4 + -parseInt("558015ARcdkW") / 5 + parseInt("6cFNPCg") / 6 * (-parseInt("263585bVOlre") / 7) + -parseInt("104gIDIgF") / 8 * (-parseInt("385677sOctCk") / 9) + parseInt("8864030skCYDJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 567566);
function __DECODE_0__(rkIBPO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 300;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rkIBPO, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n").map(function (x) {
    return x["split"](" ");
  });
  var N = parseInt(input[0][0], 10);
  var x = parseInt(input[0][1], 10);
  var vec_a = input[1]["map"](e => parseInt(e, 10));
  function sum(arr) {
    var sum = 0;
    arr.forEach(function (elm) {
      sum += elm;
    });
    return sum;
  }
  var vec_b = [];
  var tmp = 0;
  for (var i = 0; i < N; i++) {
    if (vec_a[i] >= x - tmp) {
      vec_b["push"](x - tmp);
    } else {
      vec_b.push(vec_a[i]);
    }
    tmp = vec_b[i];
  }
  console.log(sum(vec_a) - sum(vec_b));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
