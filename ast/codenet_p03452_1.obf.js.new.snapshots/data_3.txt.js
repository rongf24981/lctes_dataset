function __STRING_ARRAY__() {
  var _0x4f8799 = ["2624601Pyjssq", "1442326zVkzUO", "length", "split", "Yes", "481854FwbiIG", "55mCFrmZ", "8qVcEGF", "log", "5759047XcqLal", "1yhvIME", "110EAFjpA", "utf8", "4884752ghRPvz", "findIndex", "/dev/stdin", "11069577TSJsbp", "fill", "map", "readFileSync", "1223550WqJmAP", "splice"];
  __STRING_ARRAY__ = function () {
    return _0x4f8799;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zTZQau, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zTZQau, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1yhvIME") / 1 * (-parseInt("1442326zVkzUO") / 2) + parseInt("2624601Pyjssq") / 3 + parseInt("4884752ghRPvz") / 4 + parseInt("55mCFrmZ") / 5 * (parseInt("481854FwbiIG") / 6) + parseInt("5759047XcqLal") / 7 * (parseInt("8qVcEGF") / 8) + -parseInt("11069577TSJsbp") / 9 + -parseInt("1223550WqJmAP") / 10 * (parseInt("110EAFjpA") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 627509);
function Main(input) {
  input = input.split("\n");
  var M = input[0]["split"](" ")["map"](a => parseInt(a));
  var N = M[0];
  M = M[1];
  var L = [];
  for (var i = 0; i < M; i++) {
    L[i] = input[i + 1]["split"](" ").map(a => parseInt(a));
  }
  var anc = new Array(N + 1)["fill"](0);
  var x = new Array(N + 1)["fill"](0);
  anc[0] = anc[1] = 1;
  var i;
  var j;
  var low = 1;
  var ans = "Yes";
  top: while (L["length"]) {
    i = j = L.length;
    while (i--) {
      if (anc[L[i][0]] && anc[L[i][1]]) {
        if (x[L[i][1]] - x[L[i][0]] !== L[i][2]) {
          ans = "No";
          break top;
        } else {
          L["splice"](i, 1);
          continue;
        }
      }
      if (anc[L[i][0]]) {
        anc[L[i][1]] = 1;
        x[L[i][1]] = x[L[i][0]] + L[i][2];
        L["splice"](i, 1);
      } else if (anc[L[i][1]]) {
        anc[L[i][0]] = 1;
        x[L[i][0]] = x[L[i][1]] - L[i][2];
        L.splice(i, 1);
      }
    }
    if (j === L.length) {
      i = anc["findIndex"](a => a === 0);
      anc[i] = 1;
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
