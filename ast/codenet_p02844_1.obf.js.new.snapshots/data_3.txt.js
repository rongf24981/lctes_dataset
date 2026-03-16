function __STRING_ARRAY__() {
  var _0x2fcff2 = ["47765lfdsHD", "log", "18998508BqNHSF", "373121XjBNVX", "424EfqMpy", "trim", "substr", "164259qIGNRd", "138gGLiZA", "111793INzJbq", "109607LyqyoP", "indexOf", "148AERlmj", "readFileSync", "290Uliwgz", "26gMoEim", "553161VfDgpg"];
  __STRING_ARRAY__ = function () {
    return _0x2fcff2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("109607LyqyoP") / 1 * (-parseInt("26gMoEim") / 2) + parseInt("553161VfDgpg") / 3 + parseInt("148AERlmj") / 4 * (parseInt("47765lfdsHD") / 5) + parseInt("138gGLiZA") / 6 * (-parseInt("373121XjBNVX") / 7) + parseInt("424EfqMpy") / 8 * (parseInt("164259qIGNRd") / 9) + parseInt("290Uliwgz") / 10 * (parseInt("111793INzJbq") / 11) + parseInt("18998508BqNHSF") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 732227);
function Main(input) {
  input = input["trim"]().split("\n");
  var N = parseInt(input[0]);
  var SasStr = input[1];
  var ans = 0;
  var x1;
  var x2;
  var x3;
  var xTmp;
  var x1i;
  var x2i;
  var x3i;
  var sTmp;
  for (var i = 1000; i < 2000; i++) {
    xTmp = String(i);
    x1 = xTmp["substr"](1, 1);
    x2 = xTmp.substr(2, 1);
    x3 = xTmp["substr"](3, 1);
    x1i = SasStr["indexOf"](x1);
    if (x1i !== -1) {
      sTmp = SasStr["substr"](x1i + 1);
      x2i = sTmp["indexOf"](x2);
      if (x2i !== -1) {
        sTmp = sTmp["substr"](x2i + 1);
        x3i = sTmp["indexOf"](x3);
        if (x3i !== -1) {
          ans++;
        }
      }
    }
  }
  console["log"](ans);
}
function __DECODE_0__(VpBwNz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VpBwNz, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
