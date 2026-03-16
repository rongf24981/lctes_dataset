function Main(raw_input) {
  const [line] = raw_input.split("\n");
  const [d, t, s] = toNumArray(line);
  let isYes = t * s >= d;
  console["log"](isYes ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function toNumArray(str, delimitor = " ") {
  return str["split"](delimitor)["map"](s => parseInt(s, 10));
}
function toBitIntArray(str, delimitor = " ") {
  return str["split"](delimitor).map(s => BigInt(s));
}
function toMatrix(array, delimitor = " ") {
  const result = array["map"](v => v["split"](delimitor));
  return result;
}
function sum(n) {
  return n["reduce"]((a, b) => a + b);
}
