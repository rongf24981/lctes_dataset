function __STRING_ARRAY__() {
  const _0x2cf6c7 = ["8038Ljcoya", "utf8", "9054hgyZwx", "6296685spKLRE", "1928qZfqAV", "27JpNeRY", "233vVCNzU", "35UoFQzs", "2170024gJemgR", "63390iNLOnU", "abs", "max", "split", "1933254jypfoM", "map", "shift", "2012592tidRvR", "1012dRAGGj"];
  __STRING_ARRAY__ = function () {
    return _0x2cf6c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QCRFfU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 104;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCRFfU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("233vVCNzU") / 1 * (-parseInt("8038Ljcoya") / 2) + -parseInt("9054hgyZwx") / 3 * (-parseInt("1928qZfqAV") / 4) + parseInt("6296685spKLRE") / 5 + parseInt("1933254jypfoM") / 6 * (-parseInt("35UoFQzs") / 7) + -parseInt("2170024gJemgR") / 8 * (parseInt("27JpNeRY") / 9) + -parseInt("63390iNLOnU") / 10 * (parseInt("1012dRAGGj") / 11) + parseInt("2012592tidRvR") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 810164);
function main(input) {
  const lines = input["split"]("\n");
  const NZW = lines["shift"]().split(" ")["map"](x => parseInt(x));
  const N = NZW[0];
  const Z = NZW[1];
  const W = NZW[2];
  const A = lines.shift()["split"](" ")["map"](x => parseInt(x));
  const initial = Math.abs(Z - W);
  var fetch_n_1 = Math["abs"](A[N - 1] - A[N - 2]);
  if (N < 2) {
    fetch_n_1 = 0;
  }
  const fetch_n = Math["abs"](A[N - 1] - W);
  const result = Math["max"](initial, fetch_n_1, fetch_n);
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
