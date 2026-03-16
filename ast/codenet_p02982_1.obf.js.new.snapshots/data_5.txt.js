function main(input) {
  const args = input["split"]("\n");
  const aiueo = args[0]["split"](" ");
  const N = parseInt(aiueo[0], 10);
  const D = parseInt(aiueo[1], 10);
  var arr = [];
  for (var i = 0; i < N; i++) {
    arr[i] = [];
    var subArgs = args[i + 1]["split"](" ");
    for (var j = 0; j < D + 1; j++) {
      arr[i].push(parseInt(subArgs[j], 10));
    }
  }
  var kakunin = 0;
  function kyori(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < D; i++) {
      sum = sum + Math["pow"](arr1[i] - arr2[i], 2);
    }
    if (Number["isInteger"](Math["sqrt"](sum)) == true) {
      return true;
    } else {
      return false;
    }
  }
  for (var i = 0; i < N; i++) {
    for (var j = i + 1; j < N; j++) {
      if (kyori(arr[i], arr[j]) == true) {
        kakunin++;
      }
    }
  }
  console["log"](kakunin);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
