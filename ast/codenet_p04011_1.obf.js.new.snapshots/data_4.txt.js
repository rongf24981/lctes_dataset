process["stdin"].resume();
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var arg = input.split("\n");
  var line0 = arg[0].split(" ");
  var line1 = arg[1]["split"](" ");
  var line2 = arg[2].split(" ");
  var line3 = arg[3].split(" ");
  var input1 = Number(line0[0]);
  var input2 = Number(line1[0]);
  var input3 = Number(line2[0]);
  var input4 = Number(line3[0]);
  var ans = "initial_answer";
  if (input1 < input2) {
    console["log"](input3 * input1);
  } else {
    console["log"](input3 * input2 + (input1 - input2) * input4);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
