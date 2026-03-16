function __DECODE_0__(yTDtKc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 201;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yTDtKc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("838301TCnFDa") / 1 + parseInt("77104TRIsFK") / 2 * (parseInt("78LUclBS") / 3) + parseInt("2497404yZrHsV") / 4 + parseInt("3303410bXralb") / 5 + parseInt("3181908PUUbdb") / 6 + -parseInt("3724280DYydQY") / 7 + -parseInt("20417192GixCqX") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 571815);
function __STRING_ARRAY__() {
  var _0x1d8dc1 = ["77104TRIsFK", "3181908PUUbdb", "3303410bXralb", "78LUclBS", "utf8", "/dev/stdin", "20417192GixCqX", "838301TCnFDa", "split", "2497404yZrHsV", "3724280DYydQY"];
  __STRING_ARRAY__ = function () {
    return _0x1d8dc1;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  input[0] = Number(input[0]);
  input[1] = Number(input[1]);
  input[2] = Number(input[2]);
  console.log((input[0] + input[1]) * input[2] / 2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
