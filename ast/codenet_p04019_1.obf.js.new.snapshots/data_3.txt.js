function __DECODE_0__(OgDyby, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 494;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OgDyby, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("170275TpitOT") / 1 + -parseInt("3260464cJnrVC") / 2 + parseInt("4528347XEVYPi") / 3 + -parseInt("2836MtKdtg") / 4 * (parseInt("4390pITSXp") / 5) + -parseInt("4197120zZJXud") / 6 + parseInt("6381466JcJdJA") / 7 + -parseInt("4968INZpby") / 8 * (-parseInt("17118erdaGo") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 820250);
function Main(input) {
  input = input["split"]("");
  let N = input["includes"]("N");
  let S = input["includes"]("S");
  let E = input.includes("E");
  let W = input["includes"]("W");
  let NS = N && S || !N && !S;
  let EW = E && W || !E && !W;
  if (NS && EW) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x21ee4b = ["readFileSync", "3260464cJnrVC", "6381466JcJdJA", "4390pITSXp", "2836MtKdtg", "4197120zZJXud", "log", "4968INZpby", "/dev/stdin", "includes", "4528347XEVYPi", "utf8", "split", "170275TpitOT", "17118erdaGo"];
  __STRING_ARRAY__ = function () {
    return _0x21ee4b;
  };
  return __STRING_ARRAY__();
}
