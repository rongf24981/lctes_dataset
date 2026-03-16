function __DECODE_0__(BpMVYS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 180;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BpMVYS, key);
}
function __STRING_ARRAY__() {
  var _0x39ab32 = ["3QzmtOm", "setEncoding", "174FSYNYs", "resume", "6480rjemPI", "7066532lqmgUa", "271315dDVRqm", "stdin", "10mCDSOr", "Yes", "7029176oXSOXd", "13229216cFNyKv", "11Jskyns", "4305132QxeOUa", "306214ehsIhh", "18152IpDFAK", "log", "data"];
  __STRING_ARRAY__ = function () {
    return _0x39ab32;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("11Jskyns") / 1 * (-parseInt("306214ehsIhh") / 2) + -parseInt("3QzmtOm") / 3 * (parseInt("7066532lqmgUa") / 4) + -parseInt("271315dDVRqm") / 5 * (-parseInt("174FSYNYs") / 6) + -parseInt("13229216cFNyKv") / 7 + -parseInt("18152IpDFAK") / 8 * (-parseInt("6480rjemPI") / 9) + -parseInt("10mCDSOr") / 10 * (parseInt("7029176oXSOXd") / 11) + parseInt("4305132QxeOUa") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 954708);
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
process["stdin"].on("data", function (x) {
  var args = x.split(" ").map(Number);
  var a = args[0];
  var b = args[1];
  var c = args[2];
  console["log"]("%s", a < b && b < c ? "Yes" : "No");
});
