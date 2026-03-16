var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"](" ")["map"](Number);
arr.sort(function (a, b) {
  return a - b;
});
var sum = 0;
if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]) {
  sum++;
}
if (arr[4] == arr[5] && arr[5] == arr[6] && arr[6] == arr[7]) {
  sum++;
}
if (arr[8] == arr[9] && arr[9] == arr[10] && arr[10] == arr[11]) {
  sum++;
}
console["log"](sum == 3 ? "yes" : "no");
