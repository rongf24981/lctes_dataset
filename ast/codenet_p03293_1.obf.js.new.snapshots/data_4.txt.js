function Main(input) {
  ans = "No";
  input = input.trim()["split"]("\n");
  rotate = input[0];
  for (i = 0; i <= input[0]["length"]; i++) {
    head = rotate["substr"](0, 1);
    str = rotate["slice"](1) + head;
    if (input[1] === str) {
      ans = "Yes";
      break;
    }
    rotate = str;
  }
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
