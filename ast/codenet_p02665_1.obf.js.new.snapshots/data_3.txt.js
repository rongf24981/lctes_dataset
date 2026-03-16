function __DECODE_0__(Dodhqx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 223;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Dodhqx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("114972MIGFks") / 1 + parseInt("7282cWYIlf") / 2 * (parseInt("39mGSkss") / 3) + -parseInt("231932xbGTUo") / 4 * (-parseInt("10FvfqUT") / 5) + -parseInt("6684iQCuhn") / 6 * (-parseInt("77EPByTW") / 7) + parseInt("1442688TrIEWQ") / 8 + -parseInt("1015542kGNhdG") / 9 + parseInt("10OKFNSO") / 10 * (parseInt("67199myEsoM") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 134188);
console.log((args => {
  const [[N], A] = args.trim()["split"]("\n")["map"](r => r.split(" ")["map"](v => v | 0));
  const a = [1 - A[0]];
  for (let i = 1; i < N; i++) {
    a["push"](a[i - 1] * 2 - A[i]);
  }
  a["push"](0);
  let n = BigInt(A[N]);
  for (let i = N - 1; i >= 0; i--) {
    const c = a[i + 1] + A[i + 1];
    if (a[i] > c) {
      a[i] = c;
    } else if (a[i] * 2 < c) {
      return "-1";
    }
    n += BigInt(a[i] + A[i]);
  }
  return "" + n;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x13abe6 = ["10FvfqUT", "10OKFNSO", "readFileSync", "231932xbGTUo", "1015542kGNhdG", "utf8", "6684iQCuhn", "77EPByTW", "39mGSkss", "push", "split", "7282cWYIlf", "114972MIGFks", "67199myEsoM", "map", "1442688TrIEWQ"];
  __STRING_ARRAY__ = function () {
    return _0x13abe6;
  };
  return __STRING_ARRAY__();
}
