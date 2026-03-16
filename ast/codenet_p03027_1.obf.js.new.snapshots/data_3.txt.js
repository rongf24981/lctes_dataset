function __DECODE_0__(OvUHjP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 318;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OvUHjP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1057121fXDmVE") / 1 + -parseInt("3218442Njwaxv") / 2 + -parseInt("413091vGFtim") / 3 * (-parseInt("24zitSiT") / 4) + parseInt("4745560zDsEVk") / 5 + -parseInt("6cHglxs") / 6 * (-parseInt("5464347CPstZo") / 7) + -parseInt("1606624VVYHxT") / 8 + -parseInt("9evuaoP") / 9 * (parseInt("9012890pklTFw") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 901698);
function __STRING_ARRAY__() {
  var _0x2b807d = ["5464347CPstZo", "4745560zDsEVk", "map", "1606624VVYHxT", "3218442Njwaxv", "6cHglxs", "413091vGFtim", "1057121fXDmVE", "split", "9012890pklTFw", "24zitSiT", "fill", "log", "utf8", "9evuaoP", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2b807d;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var Q = parseInt(input[0]);
  var Qs = input.slice(1, Q + 1)["map"](x => x["split"](" ")["map"](y => parseInt(y)));
  var ans = new Array(Q);
  ans["fill"](0);
  for (var i = 0; i < Qs.length; i++) {
    for (var j = 0; j < Qs[i][2]; j++) {
      if (j == 0) {
        ans[i] = Qs[i][0] % 1000003;
      } else {
        ans[i] = ans[i] * (Qs[i][0] + j * Qs[i][1]) % 1000003;
      }
    }
    console["log"](ans[i]);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
