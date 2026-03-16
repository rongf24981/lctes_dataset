function __DECODE_0__(ymAPkM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ymAPkM, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("85818yOUFsG") / 1 * (parseInt("6aiDzud") / 2) + parseInt("504396gVnDij") / 3 + parseInt("24nSoJEq") / 4 * (-parseInt("366070sGknwn") / 5) + -parseInt("50034PTVTDK") / 6 * (parseInt("21SyvbPZ") / 7) + -parseInt("40YRLQAj") / 8 * (parseInt("891747vRRRfz") / 9) + parseInt("1764900nZePgC") / 10 + parseInt("13649933sqUrjf") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 368355);
function __STRING_ARRAY__() {
  const _0x2d92a1 = ["50034PTVTDK", "85818yOUFsG", "40YRLQAj", "366070sGknwn", "utf8", "MYTEST", "log", "13649933sqUrjf", "1764900nZePgC", "test", "/dev/stdin", "map", "env", "24nSoJEq", "21SyvbPZ", "split", "6aiDzud", "891747vRRRfz", "504396gVnDij", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x2d92a1;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const mod = 1000000007;
  const [n, k] = input.trim()["split"](" ")["map"](Number);
  let ans = 0;
  for (let i = k; i <= n + 1; i++) {
    const s_sum = (i - 1) * i / 2;
    const b_f = n - i + 1;
    const b_sum = (b_f + n) * i / 2;
    ans += b_sum - s_sum + 1;
  }
  return console["log"]((ans % mod + mod) % mod);
};
if (process["env"]["MYTEST"]) {
  if (process.env["MYTEST"] === "test") {
    test();
  } else {
    main(require("fs")["readFileSync"]("dev/stdin", "utf8"));
  }
} else {
  main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
