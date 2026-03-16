(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1597573IAQWyW") / 1 + -parseInt("2466236MpRPOF") / 2 + parseInt("2135457SJFoAX") / 3 + parseInt("1889932SjBpcR") / 4 + -parseInt("127065zPZdIt") / 5 * (parseInt("414OqQASu") / 6) + parseInt("63EnkkAN") / 7 * (parseInt("1246088DTVxQM") / 8) + parseInt("9ZmFbyJ") / 9 * (parseInt("29025470byFQSg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 904510);
function __STRING_ARRAY__() {
  var _0x5440b4 = ["log", "2135457SJFoAX", "9ZmFbyJ", "split", "/dev/stdin", "Yes", "1889932SjBpcR", "29025470byFQSg", "63EnkkAN", "readFileSync", "127065zPZdIt", "414OqQASu", "1597573IAQWyW", "1246088DTVxQM", "2466236MpRPOF"];
  __STRING_ARRAY__ = function () {
    return _0x5440b4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VjccNq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 412;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VjccNq, key);
}
function Main(input) {
  input = input["split"]("\n");
  var n = input[0];
  var s = "No";
  if (n[1] == n[2]) {
    if (n[0] == n[1] || n[2] == n[3]) {
      s = "Yes";
    }
  }
  console["log"]("%s", s);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
