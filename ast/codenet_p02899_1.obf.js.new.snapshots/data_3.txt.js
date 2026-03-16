(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("110957ShQCit") / 1 + parseInt("17396oiafZJ") / 2 * (-parseInt("27wCWsgG") / 3) + -parseInt("4eacsIf") / 4 * (parseInt("2912635dLziWj") / 5) + parseInt("6qZUOHh") / 6 * (parseInt("1114414pZfQmP") / 7) + -parseInt("97136TCeRzf") / 8 * (parseInt("234ZhAyjX") / 9) + parseInt("4465260JDNYLs") / 10 + parseInt("8526133psOroz") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 293373);
function __STRING_ARRAY__() {
  var _0x104b23 = ["1114414pZfQmP", "/dev/stdin", "97136TCeRzf", "234ZhAyjX", "4465260JDNYLs", "2912635dLziWj", "sort", "8526133psOroz", "trim", "length", "log", "4eacsIf", "utf8", "27wCWsgG", "6qZUOHh", "110957ShQCit", "split", "17396oiafZJ"];
  __STRING_ARRAY__ = function () {
    return _0x104b23;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OOufbl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 459;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OOufbl, key);
}
function Main(input) {
  input = input["split"]("\n");
  var N = [];
  var arr = input[1].split(" ").map(Number);
  for (var i = 0; i < arr["length"]; i++) {
    N.push([arr[i], i + 1]);
  }
  N = N["sort"](function (a, b) {
    return a[0] - b[0];
  });
  var ans = "";
  for (i = 0; i < N["length"]; i++) {
    ans += N[i][1];
    ans += " ";
  }
  console["log"](ans["trim"]());
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
