function Main(inputData) {
  init(inputData);
  var a = inI();
  var b = inI();
  outln((a * b / (a + b))["toFixed"](10));
}
var input;
var inputCnt;
function debug() {
  Main(document["getElementById"]("input")["value"]);
}
function init(inputData) {
  input = inputData["replace"](/\n/g, " ");
  input = input["split"](" ");
  inputCnt = 0;
}
const out = output => {
  console["log"](output);
};
const outln = output => {
  console["log"](output + "\n");
};
const inS = () => {
  return input[inputCnt++];
};
const inI = () => {
  return parseInt(inS(), 10);
};
const inF = () => {
  return parseFloat(inS());
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
