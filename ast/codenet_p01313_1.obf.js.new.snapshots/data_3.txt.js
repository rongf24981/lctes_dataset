(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("6AbwBOJ") / 1 * (parseInt("280846sHbzRV") / 2) + -parseInt("679374sgOqht") / 3 + -parseInt("3676QHOESB") / 4 * (-parseInt("2425yEvtoM") / 5) + parseInt("3444VWsVWb") / 6 * (parseInt("9023IyvetT") / 7) + -parseInt("8fHeJex") / 8 * (parseInt("7641009UlwMbO") / 9) + -parseInt("90840COOqZM") / 10 * (parseInt("803wpKdjj") / 11) + parseInt("22959468KAQIOx") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 517761);
process["stdin"]["resume"]();
process.stdin.setEncoding("utf8");
function __DECODE_0__(fDRsMw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fDRsMw, key);
}
function __STRING_ARRAY__() {
  var _0x3183f5 = ["8fHeJex", "split", "6AbwBOJ", "log", "90840COOqZM", "9023IyvetT", "7641009UlwMbO", "No cats.", "pow", "resume", "679374sgOqht", "3676QHOESB", "280846sHbzRV", "data", "803wpKdjj", "2425yEvtoM", "utf8", "3444VWsVWb", "22959468KAQIOx", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3183f5;
  };
  return __STRING_ARRAY__();
}
var n = -1;
function i(d) {
  return Math["pow"](10, ~~d);
}
var l;
var p;
var c;
var r;
var o;
var a;
var b;
var am;
var bm;
var d;
process.stdin.on("data", function (ip) {
  p = ip.split("\n");
  l = ~~p[0];
  for (c = 0; c < l; ++c) {
    r = [];
    o = p[c + 1]["split"](" ");
    d = 0;
    a = i(o[0] - 1);
    am = i(o[0]) - 1;
    for (; a < am; ++a) {
      b = i(o[1] - 1);
      bm = i(o[1]) - 1;
      for (; b < bm; ++b) {
        if ((b * b + b - a * a + a) / 2 == "" + a + b) {
          console["log"](a + " " + b);
          ++d;
        }
      }
    }
    if (!d) {
      console["log"]("No cats.");
    }
  }
});
