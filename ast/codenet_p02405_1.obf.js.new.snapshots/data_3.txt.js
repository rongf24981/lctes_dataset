(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("164538cSZInj") / 1 + parseInt("1650860BblotM") / 2 + -parseInt("315ybWKhM") / 3 * (parseInt("26932eebpzd") / 4) + parseInt("5nciGQm") / 5 * (parseInt("450888WawIqq") / 6) + -parseInt("8232000BQpqIu") / 7 + -parseInt("6162760gMRSjI") / 8 + parseInt("20452914XNRcZq") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 684352);
(function () {
  var max;
  var max_log2;
  var series;
  var col;
  var j;
  var str;
  var i;
  var line;
  var hw;
  var even;
  var odd;
  max = 300;
  max_log2 = max["toString"](2)["length"] - 1;
  series = [1, 2];
  col = ["#", "#."];
  j = 2;
  str = "#.";
  for (i = 2; i <= max_log2; i++) {
    series["push"](j *= 2);
    col.push(str = str + str);
  }
  series["push"](series[series["length"] - 1] * 2);
  function get_column(w) {
    var i;
    var res;
    res = "";
    for (i = 1; i < series["length"]; i++) {
      if (w < series[i]) {
        break;
      }
      if (w % series[i + 1] >= series[i]) {
        res = res + col[i];
      }
    }
    if (w % 2 === 1) {
      res = res + "#";
    }
    return res;
  }
  line = require("fs").readFileSync("/dev/stdin", "ascii").split("\n");
  for (i in line) {
    if (line[i] === "0 0") {
      break;
    }
    hw = line[i]["split"](" ")["map"](Number);
    even = get_column(hw[1]);
    odd = even["slice"](1) + (hw[1] % 2 === 0 ? "#" : ".");
    for (j = 0; j < hw[0]; j++) {
      if (j % 2 === 0) {
        console.log(even);
      } else {
        console["log"](odd);
      }
    }
    console["log"]("");
  }
})();
function __DECODE_0__(hAZbHI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hAZbHI, key);
}
function __STRING_ARRAY__() {
  var _0x18d1a5 = ["5nciGQm", "1650860BblotM", "map", "0 0", "length", "push", "slice", "log", "164538cSZInj", "toString", "ascii", "split", "450888WawIqq", "26932eebpzd", "8232000BQpqIu", "6162760gMRSjI", "315ybWKhM", "/dev/stdin", "20452914XNRcZq"];
  __STRING_ARRAY__ = function () {
    return _0x18d1a5;
  };
  return __STRING_ARRAY__();
}
