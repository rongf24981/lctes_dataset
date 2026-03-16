function __STRING_ARRAY__() {
  var _0x204dd6 = ["utf8", "105oCmhpB", "14502IBCKLW", "258606ZuLLJa", "split", "236791BtCngz", "237TAsLzJ", "8002664CxGxcJ", "2123346OxOPvn", "map", "Yes", "13924NdOcqq", "/dev/stdin", "readFileSync", "4564890IKnGQB", "log", "330kNCXOj"];
  __STRING_ARRAY__ = function () {
    return _0x204dd6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("236791BtCngz") / 1 + parseInt("2123346OxOPvn") / 2 + -parseInt("237TAsLzJ") / 3 * (-parseInt("13924NdOcqq") / 4) + parseInt("4564890IKnGQB") / 5 + parseInt("14502IBCKLW") / 6 * (parseInt("105oCmhpB") / 7) + -parseInt("8002664CxGxcJ") / 8 + -parseInt("258606ZuLLJa") / 9 * (parseInt("330kNCXOj") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 574141);
function Main(input) {
  input = input["split"]("\n");
  var N = input[0];
  var a = input[1].split(" ");
  var flag = true;
  a = a["map"](x => parseInt(x));
  for (var i = 0; i < N - 2; i++) {
    var x = i === 0 ? N - 1 : i - 1;
    if ((a[i + 1] ^ a[x]) !== a[i]) {
      flag = false;
      break;
    }
  }
  var str = flag === true ? "Yes" : "No";
  console["log"]("%s", str);
}
function __DECODE_0__(yTaien, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 340;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yTaien, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
