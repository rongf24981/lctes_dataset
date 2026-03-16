function __STRING_ARRAY__() {
  var _0x413e0e = ["/dev/stdin", "2218615luvpHD", "383628ONnsTe", "16RTzCVH", "utf8", "25659WuEeey", "622842LYayGM", "split", "floor", "log", "2392NSsJNY", "347360GlFpFo", "256332saUQhC", "394800EqgjfD"];
  __STRING_ARRAY__ = function () {
    return _0x413e0e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("256332saUQhC") / 1 + parseInt("394800EqgjfD") / 2 + -parseInt("383628ONnsTe") / 3 + -parseInt("16RTzCVH") / 4 * (parseInt("347360GlFpFo") / 5) + parseInt("622842LYayGM") / 6 + -parseInt("2218615luvpHD") / 7 + -parseInt("2392NSsJNY") / 8 * (-parseInt("25659WuEeey") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 174615);
function Main(input) {
  var tax = 1.08;
  var invalid = ":(";
  var input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var x = Math.floor(n / tax);
  var reverse_n = Math["floor"](x * tax);
  if (n == reverse_n) {
    console["log"](x);
    return;
  }
  var x_u = x + 1;
  if (Math["floor"](x_u * tax) == n) {
    console["log"](x_u);
    return;
  }
  var x_u2 = x + 2;
  if (Math["floor"](x_u2 * tax) == n) {
    console["log"](x_u2);
    return;
  }
  var x_d = x - 1;
  if (Math["floor"](x_d * tax) == n) {
    console["log"](x_d);
    return;
  }
  var x_d = x - 2;
  if (Math["floor"](x_d * tax) == n) {
    console["log"](x_d);
    return;
  }
  console["log"](invalid);
}
function __DECODE_0__(imtpYu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 369;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(imtpYu, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
