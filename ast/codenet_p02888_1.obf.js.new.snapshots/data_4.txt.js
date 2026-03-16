function Main(input) {
  input = input["split"]("\n");
  var N = input[0];
  var L = input[1].split(" ")["map"](Number);
  var sum = 0;
  L["sort"](function (a, b) {
    return b - a;
  });
  for (var i = 0; i < N - 1; i++) {
    for (var j = i + 1; j < N; j++) {
      var tag = L[i] - L[j];
      var arr = L["slice"](0, L["length"]);
      arr.splice(0, j + 1);
      arr["reverse"]();
      sum += arr["length"] - caninsert(arr, tag);
    }
  }
  console["log"](sum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function caninsert(array, value) {
  value += 0.1;
  var lower = 0;
  var upper = array.length;
  while (lower < upper) {
    var mid = Math["floor"](lower + (upper - lower) / 2);
    if (array[mid] <= value) {
      lower = mid + 1;
    } else {
      upper = mid;
    }
  }
  return lower;
}
;
