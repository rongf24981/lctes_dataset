(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("130568xWxxRV") / 1 + -parseInt("582rqzOEW") / 2 * (-parseInt("1479bZIOFD") / 3) + parseInt("2773760MruYyY") / 4 + parseInt("123335DAogmi") / 5 * (parseInt("6jPTQvM") / 6) + parseInt("839433yxVnDL") / 7 + -parseInt("40568xTAuOJ") / 8 * (-parseInt("531RhtMNc") / 9) + -parseInt("10636180hnLoEe") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 347628);
function main(arg) {
  let n = Number(arg["split"]("\n")[0]);
  let a = arg["split"]("\n")[1].split(" ").map(Number);
  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = 0;
  }
  dp[0] = 1000;
  let stock = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i == n) {
      dp[i] = dp[i - 1] + stock * a[i - 1];
    } else if (a[i] > a[i - 1]) {
      let addStock = parseInt(dp[i - 1] / a[i - 1]);
      dp[i] = dp[i - 1] - addStock * a[i - 1];
      stock += addStock;
    } else {
      let rmStock = stock;
      dp[i] = dp[i - 1] + rmStock * a[i - 1];
      stock -= rmStock;
    }
  }
  console.log(dp[n]);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(QQWGxF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 184;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QQWGxF, key);
}
function __STRING_ARRAY__() {
  const _0xcc47e9 = ["582rqzOEW", "531RhtMNc", "130568xWxxRV", "1479bZIOFD", "2773760MruYyY", "40568xTAuOJ", "split", "123335DAogmi", "10636180hnLoEe", "839433yxVnDL", "6jPTQvM", "utf8", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xcc47e9;
  };
  return __STRING_ARRAY__();
}
