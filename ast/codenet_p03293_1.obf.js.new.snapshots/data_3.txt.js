function __DECODE_0__(GyUlLX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 236;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GyUlLX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("11GmPOtM") / 1 * (-parseInt("58962ArzmST") / 2) + -parseInt("281844bxFTCD") / 3 * (-parseInt("28tQaSuF") / 4) + -parseInt("79920uPTAGL") / 5 + -parseInt("705972HtYUkv") / 6 * (parseInt("21pFgktP") / 7) + -parseInt("880dtHBxx") / 8 * (parseInt("37998hPxkWb") / 9) + -parseInt("10OwpGlc") / 10 * (-parseInt("2118259Nicgnq") / 11) + parseInt("8701440joIIsa") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 417644);
function Main(input) {
  ans = "No";
  input = input.trim()["split"]("\n");
  rotate = input[0];
  for (i = 0; i <= input[0]["length"]; i++) {
    head = rotate["substr"](0, 1);
    str = rotate["slice"](1) + head;
    if (input[1] === str) {
      ans = "Yes";
      break;
    }
    rotate = str;
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x4b77b6 = ["split", "10OwpGlc", "slice", "substr", "37998hPxkWb", "880dtHBxx", "utf8", "28tQaSuF", "2118259Nicgnq", "log", "79920uPTAGL", "8701440joIIsa", "58962ArzmST", "705972HtYUkv", "length", "281844bxFTCD", "11GmPOtM", "21pFgktP", "Yes"];
  __STRING_ARRAY__ = function () {
    return _0x4b77b6;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
