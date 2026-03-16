(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("749BdZhBG") / 1 * (parseInt("3154QsEVQx") / 2) + -parseInt("18tCvjiL") / 3 * (parseInt("957820bmoSLa") / 4) + parseInt("2435hhRMkY") / 5 * (-parseInt("7962rfiTKE") / 6) + parseInt("504133JEMruM") / 7 + parseInt("2784864dpoyef") / 8 + -parseInt("4810356dFggDX") / 9 + -parseInt("63110OfbPql") / 10 * (-parseInt("7370xsTyBj") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 849861);
var p = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x537ac6 = ["utf8", "749BdZhBG", "3154QsEVQx", "957820bmoSLa", "7370xsTyBj", "2784864dpoyef", "18tCvjiL", "4810356dFggDX", "Yes", "log", "7962rfiTKE", "/dev/stdin", "2435hhRMkY", "split", "63110OfbPql", "504133JEMruM", "map"];
  __STRING_ARRAY__ = function () {
    return _0x537ac6;
  };
  return __STRING_ARRAY__();
}
p = p["split"]("\n")["map"](a => +a);
function __DECODE_0__(ovyrcK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 136;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ovyrcK, key);
}
console["log"](main());
function main() {
  var N = "No";
  var n = p[0];
  var t = 0;
  for (i = 1; i <= n; i++) {
    while (t > i) {
      if (p[i] !== i) {
        return N;
      }
      i++;
    }
    var j = i;
    while (p[j] !== i) {
      j++;
      if (p[j] !== j) {
        return N;
      }
      j++;
    }
    t = j;
    while (j > i) {
      if (p[j - 2] < p[j - 1]) {
        return N;
      }
      p[j] = p[j - 2];
      j -= 2;
    }
  }
  return "Yes";
}
