function __DECODE_0__(lwFsQU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 424;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lwFsQU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1671686RiTyEs") / 1 * (parseInt("2MjftCL") / 2) + -parseInt("1894098uPWvxy") / 3 + -parseInt("2116816RFvrpN") / 4 * (parseInt("5gpUWtJ") / 5) + -parseInt("2928QEjbSk") / 6 * (-parseInt("10388rgWLRL") / 7) + -parseInt("224PRDOmn") / 8 * (-parseInt("231921JSHpwk") / 9) + -parseInt("380bKpzba") / 10 * (parseInt("179828ssNsDV") / 11) + -parseInt("5299416YmIixT") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 893998);
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x21cda1 = ["10388rgWLRL", "1671686RiTyEs", "utf8", "1894098uPWvxy", "split", "2116816RFvrpN", "380bKpzba", "5299416YmIixT", "179828ssNsDV", "224PRDOmn", "/dev/stdin", "5gpUWtJ", "2928QEjbSk", "stdin", "readFileSync", "resume", "setEncoding", "2MjftCL", "231921JSHpwk"];
  __STRING_ARRAY__ = function () {
    return _0x21cda1;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var tmp = input["split"]("\n");
  var N = Number(tmp[0]);
  var pow = 1;
  for (var i = 1; i <= N; i++) {
    pow *= i;
    pow %= 1000000007;
  }
  console.log(pow);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
