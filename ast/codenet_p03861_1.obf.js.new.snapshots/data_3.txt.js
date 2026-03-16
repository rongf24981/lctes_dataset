(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("127421tGjdlD") / 1 * (parseInt("6IiWDmB") / 2) + parseInt("208224TJSUYV") / 3 + parseInt("784928ErLcNQ") / 4 + -parseInt("288875arlxIa") / 5 * (parseInt("66TOzrJi") / 6) + -parseInt("3997cfAZHa") / 7 * (-parseInt("4024DlDRPQ") / 8) + parseInt("3848517KHAMMs") / 9 + parseInt("853070mAmITO") / 10 * (-parseInt("22VUJsUC") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 556590);
const padLeft = (w, l, c) => ([...Array(l)]["map"](_ => c)["join"]("") + w)["slice"](l * -1);
const split = (w, n) => (ws => ws["reduce"]((acc, _, i) => i % n ? acc : [...acc, ws.slice(i, i + n).join("")], []))([...w]);
const arrange = n => (x => x[0] ? [x[0] - 1, x[1] + 10000000000] : x)(split(padLeft(n, 20, "0"), 10)["map"](x => +x));
const solve0 = (a, b, x) => Math["floor"](b / x) - Math["floor"](a / x);
const solve1 = (a, b, x) => Math["floor"](b / x) - (a == 0 ? -1 : Math["floor"]((a - 1) / x));
const nullOrStr = n => n ? String(n) : "";
const fn2 = (a2, b2, x) => "" + nullOrStr(solve0(+a2[0], b2[0], x)) + solve1(a2[1], b2[1], x);
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);
function __DECODE_0__(ddfbSP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 409;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ddfbSP, key);
}
const main = input => fn1(...input.split(" "));
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x35d206 = ["readFileSync", "3997cfAZHa", "join", "784928ErLcNQ", "map", "4024DlDRPQ", "6IiWDmB", "log", "66TOzrJi", "3848517KHAMMs", "22VUJsUC", "208224TJSUYV", "/dev/stdin", "floor", "127421tGjdlD", "reduce", "slice", "288875arlxIa", "853070mAmITO"];
  __STRING_ARRAY__ = function () {
    return _0x35d206;
  };
  return __STRING_ARRAY__();
}
