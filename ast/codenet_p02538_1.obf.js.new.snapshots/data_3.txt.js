function __DECODE_0__(eOBUQS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eOBUQS, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("611386dJuZPv") / 1 + -parseInt("10SzOCjU") / 2 * (-parseInt("297003kjYbnt") / 3) + -parseInt("916tUOCEw") / 4 * (parseInt("6595HgUhzT") / 5) + -parseInt("2450586hoqJHw") / 6 + parseInt("6913270rZyqRa") / 7 + parseInt("14018784YVfpMP") / 8 + parseInt("7614rMddCn") / 9 * (-parseInt("10870oMUuGp") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 993493);
function Main(input) {
  input = input["split"]("\n").map(v => v["split"](" "));
  const [n, q] = input[0].map(v => +v);
  input["shift"]();
  const mod = 998244353;
  const str = new Array(n)["fill"](1);
  input["map"](value => {
    const [l, r, d] = [value[0] - 1, value[1] - 1, +value[2]];
    for (let i = l; i <= r; i++) {
      str[i] = d;
    }
    let num = 0;
    for (let s = 0; s < n; s++) {
      num = (num * 10 + str[s]) % mod;
    }
    console["log"](num);
  });
}
function __STRING_ARRAY__() {
  const _0x3e0c1 = ["10SzOCjU", "10870oMUuGp", "6913270rZyqRa", "utf8", "6595HgUhzT", "map", "split", "fill", "/dev/stdin", "297003kjYbnt", "2450586hoqJHw", "log", "14018784YVfpMP", "7614rMddCn", "916tUOCEw", "611386dJuZPv", "readFileSync", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x3e0c1;
  };
  return __STRING_ARRAY__();
}
function toInt(v) {
  return parseInt(v, 10);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
