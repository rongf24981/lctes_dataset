function Main(input) {
  input = input["split"](" ");
  var tem = input;
  var beforeText = tem;
  var arr = String(tem)["split"]("");
  var a = parseInt(arr[0], 10);
  var b = parseInt(arr[1], 10);
  var c = parseInt(arr[2], 10);
  var d = parseInt(arr[3], 10);
  if (a == b) {
    console["log"]("Bad");
  } else if (b == c) {
    console["log"]("Bad");
  } else if (c == d) {
    console.log("Bad");
  } else {
    console.log("Good");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
