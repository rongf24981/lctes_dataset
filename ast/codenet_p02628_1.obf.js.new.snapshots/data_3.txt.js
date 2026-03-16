(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("160617PAiLTE") / 1 + -parseInt("766322yfYkQM") / 2 + -parseInt("1560678GWKwYM") / 3 + -parseInt("1970636vsmurB") / 4 * (parseInt("5eQeowS") / 5) + -parseInt("1971372mbZojH") / 6 + -parseInt("700nmKcGy") / 7 * (-parseInt("30064uFRhok") / 8) + parseInt("16159896PwPTum") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 286119);
function main(lines) {
  const [N, K] = parseNumberLine(lines[0]);
  const prices = parseNumberLine(lines[1])["sort"]((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < K; ++i) {
    total += prices[i];
  }
  console["log"](total);
}
function __STRING_ARRAY__() {
  const _0xc0c803 = ["sort", "5eQeowS", "1971372mbZojH", "utf8", "1560678GWKwYM", "766322yfYkQM", "700nmKcGy", "readFileSync", "map", "16159896PwPTum", "1970636vsmurB", "30064uFRhok", "log", "split", "160617PAiLTE", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0xc0c803;
  };
  return __STRING_ARRAY__();
}
function parseNumberLine(line, radix = 10) {
  return line["split"](/\s+/)["map"](_ => parseInt(_, radix));
}
function __DECODE_0__(HVEvPz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 414;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HVEvPz, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
