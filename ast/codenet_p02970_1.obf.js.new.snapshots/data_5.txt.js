function Main(input) {
  var dataList = input["split"]("\n");
  var data = dataList[0].split(" ");
  var n = data[0];
  var d = data[1];
  var checkNum = d * 2 + 1;
  var num = Math.floor(n / checkNum);
  var rest = n % checkNum;
  if (rest > 0) {
    num += 1;
  }
  console["log"](num);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
