(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1QqYnsu") / 1 * (-parseInt("449146ssMUdM") / 2) + -parseInt("840897WtGzKG") / 3 + -parseInt("3474956UaYQmM") / 4 * (-parseInt("5hlYjmr") / 5) + -parseInt("12ZgBnhp") / 6 * (parseInt("2923060dDrSgs") / 7) + -parseInt("9003320DjKEek") / 8 + parseInt("27954thNpPW") / 9 * (parseInt("2150MULFjL") / 10) + -parseInt("17765473OJrlRy") / 11 * (-parseInt("12qsihQC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 686125);
function __DECODE_0__(aFZTpB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 272;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFZTpB, key);
}
console.log((args => {
  const [N, ...A] = args["trim"]().split("\n")["map"](v => v | 0);
  if (A[0] > 0) {
    return "-1";
  }
  let m = 0;
  for (let i = 1; i < N; i++) {
    if (A[i] > i || A[i] > A[i - 1] + 1) {
      return "-1";
    }
    if (A[i] === A[i - 1] + 1) {
      m++;
    } else if (A[i] <= A[i - 1]) {
      m += A[i];
    }
  }
  return "" + m;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x13773b = ["readFileSync", "utf8", "3474956UaYQmM", "27954thNpPW", "17765473OJrlRy", "12ZgBnhp", "trim", "2923060dDrSgs", "5hlYjmr", "9003320DjKEek", "2150MULFjL", "449146ssMUdM", "1QqYnsu", "840897WtGzKG", "map", "12qsihQC"];
  __STRING_ARRAY__ = function () {
    return _0x13773b;
  };
  return __STRING_ARRAY__();
}
