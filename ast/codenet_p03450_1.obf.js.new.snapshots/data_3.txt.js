function __STRING_ARRAY__() {
  var _0x52980d = ["11dkxIxt", "423YArzaR", "split", "Yes", "3164iMKsMp", "36056KLhkca", "29864wOmIHI", "readFileSync", "push", "160zxtFOS", "1698kErBvF", "2088890KnBfYV", "323635hiuwPp", "993945IUnqpP", "utf8", "404318hloLkz", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x52980d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EQkiAF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EQkiAF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("323635hiuwPp") / 1 + -parseInt("404318hloLkz") / 2 + -parseInt("993945IUnqpP") / 3 + parseInt("36056KLhkca") / 4 * (parseInt("160zxtFOS") / 5) + -parseInt("1698kErBvF") / 6 * (-parseInt("3164iMKsMp") / 7) + -parseInt("29864wOmIHI") / 8 * (-parseInt("423YArzaR") / 9) + -parseInt("2088890KnBfYV") / 10 * (parseInt("11dkxIxt") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 173087);
function Main(input) {
  var line = input["split"]("\n");
  var tmp = line[0]["split"](" ");
  var N = Number(tmp[0]);
  var M = Number(tmp[1]);
  var L = [];
  var R = [];
  var D = [];
  for (var i = 1; i <= M; i++) {
    var tmp = line[i]["split"](" ");
    L["push"](Number(tmp[0]));
    R["push"](Number(tmp[1]));
    D["push"](Number(tmp[2]));
  }
  var pos = [];
  var ans;
  loopj: for (var j = 0; j < M; j++) {
    if (j === 0) {
      pos[L[j] - 1] = 1;
    }
    var rightpos = pos[L[j] - 1] + D[j];
    if (!pos[R[j] - 1]) {
      pos[R[j] - 1] = rightpos;
    } else if (pos[R[j] - 1] !== rightpos) {
      ans = "No";
      break loopj;
    }
  }
  if (!ans) {
    ans = "Yes";
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
