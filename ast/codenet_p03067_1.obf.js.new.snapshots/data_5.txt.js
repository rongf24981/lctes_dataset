function Main(input) {
  var A = parseInt(input[0], 10);
  var B = parseInt(input[1], 10);
  var C = parseInt(input[2], 10);
  if (A < B) {
    if (A < C && C < B) {
      console.log("Yes");
    } else {
      console["log"]("No");
    }
  } else if (B < C && C < A) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](/\n|\s/));
