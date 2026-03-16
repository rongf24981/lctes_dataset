function __STRING_ARRAY__() {
  const _0x57f783 = ["slice", "19310GKlUjM", "28FfRmKg", "4321360aJBHNQ", "2746656vHLZeU", "utf8", "10835143QpKXLt", "log", "60DmeqMu", "16568eOpbGO", "87OIVHdi", "553192iXUbxK", "91655BQJXer", "228nJXssL", "/dev/stdin", "12dbPefB"];
  __STRING_ARRAY__ = function () {
    return _0x57f783;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("19310GKlUjM") / 1 * (-parseInt("60DmeqMu") / 2) + parseInt("87OIVHdi") / 3 * (parseInt("16568eOpbGO") / 4) + -parseInt("91655BQJXer") / 5 * (parseInt("228nJXssL") / 6) + parseInt("28FfRmKg") / 7 * (-parseInt("553192iXUbxK") / 8) + parseInt("2746656vHLZeU") / 9 + -parseInt("4321360aJBHNQ") / 10 + parseInt("10835143QpKXLt") / 11 * (parseInt("12dbPefB") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 584305);
function __DECODE_0__(zRErJn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 314;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zRErJn, key);
}
function Main(input) {
  input = input.split("\n");
  input = input[0];
  const last = input["slice"](-1);
  const sufix = last === "s" ? "es" : "s";
  console["log"]("" + input + sufix);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
