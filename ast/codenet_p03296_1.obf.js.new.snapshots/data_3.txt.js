'use strict';

function __DECODE_0__(HgGrAc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 365;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HgGrAc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("75730aGkBaO") / 1 + -parseInt("237694OHAOzU") / 2 + -parseInt("106257CgqRGM") / 3 * (-parseInt("36leVuem") / 4) + -parseInt("27355OELwzd") / 5 * (-parseInt("258XaUGRT") / 6) + -parseInt("1532818gnxnzA") / 7 + parseInt("2512VBbXKV") / 8 * (parseInt("1818fiyPnK") / 9) + -parseInt("2780qJoFpZ") / 10 * (parseInt("1287JGPdVk") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 171375);
function __STRING_ARRAY__() {
  var _0x195d34 = ["258XaUGRT", "1532818gnxnzA", "1287JGPdVk", "2780qJoFpZ", "106257CgqRGM", "/dev/stdin", "map", "237694OHAOzU", "split", "27355OELwzd", "utf8", "1818fiyPnK", "2512VBbXKV", "log", "readFileSync", "75730aGkBaO", "36leVuem"];
  __STRING_ARRAY__ = function () {
    return _0x195d34;
  };
  return __STRING_ARRAY__();
}
function myin() {
  return require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
}
function myout(t) {
  console["log"](t);
}
function myconv(i, no) {
  switch (no) {
    case 0:
      return i;
    case 1:
      return parseInt(i);
    case 2:
      return i["split"](" ");
    case 3:
      return i.split("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i.split("\n")["map"](a => Number(a));
    case 6:
      return i.split("");
    case 7:
      return i["split"]("")["map"](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 3);
  var N = myconv(input[0], 1);
  var list = myconv(input[1], 4);
  var output = 0;
  for (var i = 0; i < N - 1; i++) {
    var mae = list[i];
    var ato = list[i + 1];
    if (mae == ato) {
      output++;
      list[i + 1] = -1;
    }
  }
  myout(output);
}
Main(myin());
