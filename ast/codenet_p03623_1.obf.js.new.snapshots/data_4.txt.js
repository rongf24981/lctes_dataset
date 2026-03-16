function Main(input) {
  input = input.split("\n")[0]["split"](" ");
  if (Math["abs"](input[0] - input[1]) < Math["abs"](input[0] - input[2])) {
    console.log("A");
  } else {
    console["log"]("B");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
