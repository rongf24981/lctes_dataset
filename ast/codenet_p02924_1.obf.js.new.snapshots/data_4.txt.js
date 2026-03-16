function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0], 10);
  var count = 0;
  if (n != 1) {
    for (var i = 1; i < n; i++) {
      count += i % (i + 1);
    }
  }
  console.log("%s", count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
