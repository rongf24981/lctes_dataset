function __STRING_ARRAY__() {
  const _0x3617d6 = ["utf8", "length", "env", "480198sHzrOv", "1292039lgeXDe", "dev/stdin", "test", "1342780nxtByY", "6747664mpYiyN", "35529lroGNG", "641060ByXMYT", "14DWQvwP", "trim", "readFileSync", "MYTEST", "531471iywYal", "fill"];
  __STRING_ARRAY__ = function () {
    return _0x3617d6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("35529lroGNG") / 1 * (-parseInt("14DWQvwP") / 2) + parseInt("531471iywYal") / 3 + -parseInt("1342780nxtByY") / 4 + -parseInt("641060ByXMYT") / 5 + parseInt("480198sHzrOv") / 6 + -parseInt("1292039lgeXDe") / 7 + parseInt("6747664mpYiyN") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 203461);
function __DECODE_0__(AgvsYq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 236;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AgvsYq, key);
}
const main = input => {
  const mod = 1000000007;
  const s = Number(input["trim"]());
  const dp = [1, ...new Array(s)["fill"](0)];
  for (let x = 3; x < dp["length"]; x++) {
    let sum = 0;
    for (let i = x - 3; i >= 0; i--) {
      sum = (sum + dp[i]) % mod;
    }
    dp[x] = sum;
  }
  return console.log((dp[s] % mod + mod) % mod);
};
if (process.env["MYTEST"]) {
  if (process["env"]["MYTEST"] === "test") {
    test();
  } else {
    main(require("fs")["readFileSync"]("dev/stdin", "utf8"));
  }
} else {
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
