function __DECODE_0__(MfpCJm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MfpCJm, key);
}
function __STRING_ARRAY__() {
  var _0x25a5a5 = ["split", "4502188BqdkJL", "shift", "5bWWzWD", "7GhhILY", "5960168WqLOrH", "utf8", "9jlHxpE", "2216265SkFamL", "readFileSync", "13535643JQVcMf", "2775950zTkUeb", "12CDcwXH", "sort", "/dev/stdin", "10TgTfyW", "7724598qADQMD", "length", "64877rQzbnb", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x25a5a5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("64877rQzbnb") / 1 * (-parseInt("10TgTfyW") / 2) + parseInt("2216265SkFamL") / 3 + parseInt("4502188BqdkJL") / 4 * (parseInt("5bWWzWD") / 5) + -parseInt("7724598qADQMD") / 6 * (parseInt("7GhhILY") / 7) + -parseInt("5960168WqLOrH") / 8 * (-parseInt("9jlHxpE") / 9) + parseInt("2775950zTkUeb") / 10 + -parseInt("13535643JQVcMf") / 11 * (parseInt("12CDcwXH") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 693357);
function fillZero(l, num) {
  num = String(num);
  for (var i = num["length"]; i < l; i++) {
    num = "0" + num;
  }
  return num;
}
function main(arg) {
  arg = arg["trim"]()["split"]("\n");
  arg[0] = arg[0]["split"](" ");
  var N = Number(arg[0][0]);
  var M = Number(arg[0][1]);
  arg["shift"]();
  var p_master = {};
  for (var i = 0; i < arg.length; i++) {
    var tmp = arg[i]["split"](" ").map(e => Number(e));
    arg[i] = tmp;
    if (!p_master[tmp[0]]) {
      p_master[tmp[0]] = [];
    }
    p_master[tmp[0]].push(tmp[1]);
  }
  for (key in p_master) {
    p_master[key]["sort"]();
  }
  for (var i = 0; i < arg.length; i++) {
    var _p = arg[i][0];
    var j = 0;
    for (var j = 0; j < p_master[_p].length; j++) {
      if (p_master[_p][j] === arg[i][1]) {
        break;
      }
    }
    console.log(fillZero(6, _p) + fillZero(6, j + 1));
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
