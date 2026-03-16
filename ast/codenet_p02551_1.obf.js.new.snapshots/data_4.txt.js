function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var N = parseInt(tmp[0]);
  var Q = parseInt(tmp[1]);
  var minRows = Array(N - 2);
  var minCols = Array(N - 2);
  minRows["fill"](N - 2);
  minCols["fill"](N - 2);
  var result = BigInt((N - 2) * (N - 2));
  for (var i = 0; i < Q; i++) {
    var query = input[i + 1]["split"](" ");
    var q_1 = parseInt(query[0]);
    var q_2 = parseInt(query[1]);
    var myArray = minRows;
    var myArray2 = minCols;
    var index = q_2 - 2;
    var closest = minCols[index];
    if (q_1 == 1) {
      myArray = minCols;
      myArray2 = minRows;
      closest = minRows[index];
    }
    result -= BigInt(closest);
    for (var j = 0; j < closest; j++) {
      if (myArray[j] > index) {
        myArray[j] = index;
      }
    }
    myArray2[index] = 0;
  }
  console["log"]("%d", Number(result));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
