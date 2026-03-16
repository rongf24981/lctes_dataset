function __DECODE_0__(rTmzgK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 486;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rTmzgK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("50788UspZaM") / 1 * (-parseInt("2ZPHZSE") / 2) + parseInt("481251ZjoXlO") / 3 * (-parseInt("8hcCLyV") / 4) + parseInt("10tmSoFL") / 5 * (-parseInt("1111440lOtLcy") / 6) + -parseInt("46970OsSqMy") / 7 * (parseInt("88AoMYAd") / 8) + -parseInt("2247768oJMANf") / 9 + -parseInt("3776910oFEyLa") / 10 + -parseInt("1078wLunwT") / 11 * (-parseInt("203244ifRXjV") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 216471);
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0]);
  t = new Array(n)["fill"](0);
  a = new Array(n)["fill"](0);
  for (i = 0; i < n; i++) {
    t[i] = parseInt(input[i + 1]["split"](" ")[0]);
    a[i] = parseInt(input[i + 1].split(" ")[1]);
  }
  var tvote = t[0];
  var avote = a[0];
  for (i = 1; i < n; i++) {
    if (Math["ceil"](tvote / t[i]) * t[i] / t[i] * a[i] >= avote) {
      tvote = Math["ceil"](tvote / t[i]) * t[i];
      avote = Math["ceil"](tvote / t[i]) * t[i] / t[i] * a[i];
    } else {
      tvote = Math["ceil"](avote / a[i]) * a[i] / a[i] * t[i];
      avote = Math["ceil"](avote / a[i]) * a[i];
    }
  }
  var ans = avote + tvote;
  console["log"]("%s", ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x5ca048 = ["split", "3776910oFEyLa", "utf8", "1078wLunwT", "203244ifRXjV", "fill", "481251ZjoXlO", "log", "46970OsSqMy", "10tmSoFL", "88AoMYAd", "ceil", "2ZPHZSE", "50788UspZaM", "8hcCLyV", "2247768oJMANf", "readFileSync", "1111440lOtLcy"];
  __STRING_ARRAY__ = function () {
    return _0x5ca048;
  };
  return __STRING_ARRAY__();
}
