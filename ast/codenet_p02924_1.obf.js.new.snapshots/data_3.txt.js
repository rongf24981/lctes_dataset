(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("117323QOHZEw") / 1 * (-parseInt("10WoxlDo") / 2) + parseInt("2505417nEeyrr") / 3 + -parseInt("1821316MDPHuH") / 4 + parseInt("836395TiHdFp") / 5 + -parseInt("2554758NObZhj") / 6 * (-parseInt("7jknzMM") / 7) + -parseInt("3298464eMVXQe") / 8 + -parseInt("3239766bUeaas") / 9 * (parseInt("20NiVxba") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 427241);
function __DECODE_0__(mbkwnS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mbkwnS, key);
}
function __STRING_ARRAY__() {
  var _0x4996ed = ["10WoxlDo", "3239766bUeaas", "117323QOHZEw", "2505417nEeyrr", "/dev/stdin", "2554758NObZhj", "3298464eMVXQe", "20NiVxba", "7jknzMM", "1821316MDPHuH", "836395TiHdFp", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x4996ed;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0], 10);
  var count = 0;
  if (n != 1) {
    for (var i = 1; i < n; i++) {
      count += i % (i + 1);
    }
  }
  console.log("%s", count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
