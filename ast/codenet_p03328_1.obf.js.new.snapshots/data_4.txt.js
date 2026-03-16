function Main(input) {
  input = input["split"](" ");
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);
  var a_real = 1;
  var b_real = 1;
  var a_count = 1;
  var b_count = 1;
  var ans = 0;
  while (true) {
    while (true) {
      a_count++;
      a_real += a_count;
      b_count++;
      b_real += b_count;
      if (a_real > a) {
        break;
      }
    }
    while (true) {
      b_count++;
      b_real += b_count;
      if (b_real > b) {
        break;
      }
    }
    if (a_real - a == b_real - b) {
      break;
    }
  }
  ans = a_real - a;
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
