(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("22VlXYzc") / 1 * (parseInt("26584HyZjJr") / 2) + -parseInt("616734cRmlmR") / 3 + -parseInt("262516EKefXB") / 4 * (-parseInt("5ceFqEG") / 5) + parseInt("491058KaYuRG") / 6 + parseInt("25641uUrMIC") / 7 + -parseInt("8PrIPFv") / 8 * (-parseInt("644463pTZJgT") / 9) + parseInt("640LuAPDA") / 10 * (parseInt("76549UMWskm") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 170116);
function __DECODE_0__(VCAcbm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 270;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VCAcbm, key);
}
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var x = input[1]["split"](" ");
  var y = new Array(n);
  var count = 0;
  var count2 = 0;
  var a = 1000000007;
  for (var i = 0; i < n; i++) {
    x[i] = parseInt(x[i], 10);
    y[i] = Math["floor"](x[i] / 4294967296);
    x[i] = x[i] % 4294967296;
  }
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      count += x[i] ^ x[j];
      if (count > 2147483648) {
        count = count % 2147483648;
        count2 += 0.5;
      }
      count2 += y[i] ^ y[j];
    }
  }
  count = count + count2 * 4294967296;
  console["log"](count % a);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x12e5ef = ["/dev/stdin", "25641uUrMIC", "readFileSync", "262516EKefXB", "log", "split", "76549UMWskm", "floor", "8PrIPFv", "utf8", "491058KaYuRG", "644463pTZJgT", "22VlXYzc", "640LuAPDA", "616734cRmlmR", "26584HyZjJr", "5ceFqEG"];
  __STRING_ARRAY__ = function () {
    return _0x12e5ef;
  };
  return __STRING_ARRAY__();
}
