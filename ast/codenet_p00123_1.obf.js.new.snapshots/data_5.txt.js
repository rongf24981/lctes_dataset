var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
Arr["forEach"](function (v) {
  var arr = v.split(" ")["map"](Number);
  var a = arr[0];
  var b = arr[1];
  var ans;
  if (a < 35.5 && b < 71) {
    ans = "AAA";
  } else if (a < 37.5 && b < 77) {
    ans = "AA";
  } else if (a < 40 && b < 83) {
    ans = "A";
  } else if (a < 43 && b < 89) {
    ans = "B";
  } else if (a < 50 && b < 105) {
    ans = "C";
  } else if (a < 55 && b < 116) {
    ans = "D";
  } else if (a < 70 && b < 148) {
    ans = "E";
  } else {
    ans = "NA";
  }
  console.log(ans);
});
