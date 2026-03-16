function __STRING_ARRAY__() {
  var _0x4ef1da = ["trim", "7255930ZAvSCf", "9UlSUxL", "1490262dUhOZp", "split", "1527040crlkrk", "shift", "189RfLHXI", "1KZvBzG", "47732axqZjg", "9475760uiKfHR", "map", "utf8", "838925ymWBTh", "975066uKhkLr", "sort", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4ef1da;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1KZvBzG") / 1 * (parseInt("975066uKhkLr") / 2) + parseInt("189RfLHXI") / 3 * (parseInt("47732axqZjg") / 4) + parseInt("838925ymWBTh") / 5 + -parseInt("1490262dUhOZp") / 6 + -parseInt("9475760uiKfHR") / 7 + parseInt("1527040crlkrk") / 8 + parseInt("9UlSUxL") / 9 * (parseInt("7255930ZAvSCf") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 721513);
function __DECODE_0__(MyzSww, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 315;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MyzSww, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n")["map"](input => Number(input));
  var len = input[0];
  input["shift"]();
  input["sort"](function (a, b) {
    return a - b;
  });
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  var count = 0;
  while (sum % 10 == 0 && sum != 0) {
    sum -= input[count];
    count++;
  }
  console.log(sum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
