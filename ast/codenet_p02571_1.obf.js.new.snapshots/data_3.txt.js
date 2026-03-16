(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("251829XxADkg") / 1 + -parseInt("618548benbyw") / 2 + -parseInt("77502rdSIsV") / 3 * (-parseInt("224syEieD") / 4) + parseInt("7818865oGTruh") / 5 + parseInt("5085870QBVTJV") / 6 + parseInt("4903976FnkCMJ") / 7 + -parseInt("28915824oABHmD") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 886767);
function __STRING_ARRAY__() {
  const _0x9bcbc9 = ["5085870QBVTJV", "4903976FnkCMJ", "trim", "/dev/stdin", "251829XxADkg", "7818865oGTruh", "log", "length", "224syEieD", "28915824oABHmD", "618548benbyw", "utf8", "77502rdSIsV"];
  __STRING_ARRAY__ = function () {
    return _0x9bcbc9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CVtXHZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 315;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CVtXHZ, key);
}
(input => {
  const [S, T] = input["trim"]().split("\n");
  const sl = S["length"];
  const tl = T["length"];
  const range = sl - tl;
  let min = tl;
  for (let i = 0; i < range; i++) {
    const target = S.slice(i, tl + i);
    let diff = 0;
    for (let j = 0; j < tl; j++) {
      if (target[j] !== T[j]) {
        diff += 1;
      }
    }
    if (min > diff) {
      min = diff;
    }
  }
  console["log"](min);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
