function Main(input) {
  input = input.split("\n");
  input = input[0];
  const last = input["slice"](-1);
  const sufix = last === "s" ? "es" : "s";
  console["log"]("" + input + sufix);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
