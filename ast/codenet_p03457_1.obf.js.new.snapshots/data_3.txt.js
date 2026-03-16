(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("158RHLkEp") / 1 * (parseInt("4650HncCsc") / 2) + parseInt("1913862FyEfRo") / 3 + parseInt("188myUwMf") / 4 * (-parseInt("68840HrxCRL") / 5) + parseInt("56082JCweFA") / 6 * (parseInt("203kLvXYj") / 7) + parseInt("2248IzwaTc") / 8 * (-parseInt("7443lAOfEz") / 9) + -parseInt("1491490WDhswU") / 10 * (parseInt("44owvdVq") / 11) + parseInt("16290624DplrNB") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 423140);
function Main(input) {
  var args = input.split("\n");
  var N = parseInt(args, 10);
  var history = args["slice"](1, N + 1);
  var answer;
  var flg = 1;
  var plan = [];
  plan[0] = [0, 0, 0];
  for (var i = 0; i < N; i++) {
    plan[i + 1] = parser(history[i]);
  }
  for (var i = 1; i < plan["length"]; i++) {
    var rec1 = plan[i - 1];
    var rec2 = plan[i];
    var dt = rec2[0] - rec1[0];
    var dist = Math["abs"](rec2[1] + rec2[2] - rec1[1] - rec1[2]);
    if (dt >= dist && dt % 2 === dist % 2) {} else {
      flg = 0;
    }
  }
  answer = flg ? "Yes" : "No";
  console["log"](answer);
}
function parser(record) {
  var args = record["split"](" ");
  var return_val = [];
  return_val["push"](parseInt(args[0], 10));
  return_val["push"](parseInt(args[1], 10));
  return_val["push"](parseInt(args[2], 10));
  return return_val;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(iwIziP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 487;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iwIziP, key);
}
function __STRING_ARRAY__() {
  var _0x377b0d = ["utf8", "44owvdVq", "2248IzwaTc", "push", "1491490WDhswU", "16290624DplrNB", "/dev/stdin", "abs", "log", "length", "slice", "56082JCweFA", "readFileSync", "188myUwMf", "split", "158RHLkEp", "1913862FyEfRo", "203kLvXYj", "68840HrxCRL", "4650HncCsc", "7443lAOfEz", "Yes"];
  __STRING_ARRAY__ = function () {
    return _0x377b0d;
  };
  return __STRING_ARRAY__();
}
