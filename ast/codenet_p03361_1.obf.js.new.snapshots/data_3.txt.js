function __STRING_ARRAY__() {
  const _0x2c1a8a = ["1328160dMANbv", "572172LBcrbo", "10886fozLIQ", "1477140AmCtrc", "fill", "map", "/dev/stdin", "2474635vXlgTT", "utf8", "5455898BNMieI", "split", "2018944yWCKEa", "23gaueqF", "every"];
  __STRING_ARRAY__ = function () {
    return _0x2c1a8a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iWHWiO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iWHWiO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("23gaueqF") / 1 * (parseInt("10886fozLIQ") / 2) + parseInt("1328160dMANbv") / 3 + -parseInt("572172LBcrbo") / 4 + -parseInt("2474635vXlgTT") / 5 + -parseInt("1477140AmCtrc") / 6 + parseInt("5455898BNMieI") / 7 + parseInt("2018944yWCKEa") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 465153);
const main = input => {
  const lines = input["split"]("\n");
  const [h, w] = lines[0]["split"](" ")["map"](Number);
  const data = Array(h)["fill"](false)["map"]((_, i) => lines[i + 1]["split"]("").slice(0, w).map(c => c === "#"));
  const ans = data["every"]((row, i) => row.every((cell, j) => !cell || (data[i - 1] || [])[j] || (data[i + 1] || [])[j] || data[i][j - 1] || data[i][j + 1]));
  console.log(ans ? "Yes" : "No");
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
