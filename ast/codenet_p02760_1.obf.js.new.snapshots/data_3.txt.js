(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("204627HzAOfn") / 1 + -parseInt("639094tFohWS") / 2 + -parseInt("6oqkIgc") / 3 * (-parseInt("599924DGiTfV") / 4) + -parseInt("5fkqAHg") / 5 * (parseInt("9486JtIVMY") / 6) + parseInt("70Yenqhg") / 7 * (parseInt("71080qEqeJY") / 8) + -parseInt("2788659DSVoee") / 9 + parseInt("3787870NPeptl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 341247);
function __DECODE_0__(gmSoWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 120;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gmSoWi, key);
}
function Main(input) {
  var n = input[3];
  var ansmap = [[false, false, false], [false, false, false], [false, false, false]];
  var chk = [];
  for (var i = 4; i < n + 4; i++) {
    chk["push"](input[i] - 0);
  }
  var map = [input[0]["split"](" ")["map"](v => chk["indexOf"](v - 0) >= 0), input[1]["split"](" ")["map"](v => chk.indexOf(v - 0) >= 0), input[2]["split"](" ")["map"](v => chk["indexOf"](v - 0) >= 0)];
  var flg = false;
  if (map[0][0] && map[0][1] && map[0][2]) {
    flg = true;
  }
  if (map[1][0] && map[1][1] && map[1][2]) {
    flg = true;
  }
  if (map[2][0] && map[2][1] && map[2][2]) {
    flg = true;
  }
  if (map[0][0] && map[1][0] && map[2][0]) {
    flg = true;
  }
  if (map[0][1] && map[1][1] && map[2][1]) {
    flg = true;
  }
  if (map[0][2] && map[1][2] && map[2][2]) {
    flg = true;
  }
  if (map[0][0] && map[1][1] && map[2][2]) {
    flg = true;
  }
  if (map[0][2] && map[1][1] && map[2][0]) {
    flg = true;
  }
  console["log"](flg ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
function __STRING_ARRAY__() {
  var _0x436a41 = ["599924DGiTfV", "3787870NPeptl", "indexOf", "2788659DSVoee", "70Yenqhg", "Yes", "71080qEqeJY", "trim", "split", "639094tFohWS", "204627HzAOfn", "9486JtIVMY", "log", "5fkqAHg", "push", "map", "6oqkIgc"];
  __STRING_ARRAY__ = function () {
    return _0x436a41;
  };
  return __STRING_ARRAY__();
}
