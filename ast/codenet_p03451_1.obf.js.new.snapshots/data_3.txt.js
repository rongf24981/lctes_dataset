(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1437174qQbunb") / 1 + parseInt("42808vdjkct") / 2 * (-parseInt("111dvBzlp") / 3) + -parseInt("6479112QqGTsa") / 4 + parseInt("1416220hFRjFa") / 5 + -parseInt("2950866LZeWXE") / 6 + -parseInt("56iPaNHT") / 7 * (-parseInt("1771584BbzoFO") / 8) + -parseInt("1729206CGgVGP") / 9 * (-parseInt("20nbyIfF") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 972733);
function __DECODE_0__(EgemPp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EgemPp, key);
}
function __STRING_ARRAY__() {
  var _0x2557b9 = ["6479112QqGTsa", "slice", "utf8", "1771584BbzoFO", "readFileSync", "1437174qQbunb", "42808vdjkct", "20nbyIfF", "length", "2950866LZeWXE", "1416220hFRjFa", "log", "map", "split", "/dev/stdin", "1729206CGgVGP", "56iPaNHT", "111dvBzlp"];
  __STRING_ARRAY__ = function () {
    return _0x2557b9;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input.split("\n");
  var a1 = input[1]["split"](" ")["map"](e => {
    return parseInt(e);
  });
  var a2 = input[2]["split"](" ")["map"](e => {
    return parseInt(e);
  });
  var j = a1["length"] - 1;
  var m = 0;
  var n = a1["length"] - 2;
  var r = 0;
  var temp;
  for (var i = j; i >= m; i--) {
    temp = sum(a1["slice"](m, i + 1)) + sum(a2["slice"](i));
    if (r < temp) {
      r = temp;
    }
  }
  function sum(arr) {
    var r = 0;
    for (var i = 0; i < arr["length"]; i++) {
      r += arr[i];
    }
    return r;
  }
  console["log"](r);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
