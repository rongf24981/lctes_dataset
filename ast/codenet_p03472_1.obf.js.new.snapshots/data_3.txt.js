'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("205416YNtzxM") / 1 + parseInt("2agDxAi") / 2 * (parseInt("1414533ldRqwI") / 3) + -parseInt("8ZavojO") / 4 * (-parseInt("1499180xkLjrK") / 5) + -parseInt("36fwvqwL") / 6 * (parseInt("359009rdsuNp") / 7) + parseInt("384bwhwEP") / 8 * (-parseInt("115371HtLaLa") / 9) + -parseInt("4021980VwKeSF") / 10 + parseInt("8441279HPorFL") / 11 * (parseInt("12CyNHpv") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 307924);
function __DECODE_0__(TtBBmq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 456;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TtBBmq, key);
}
const main = arg => {
  arg = arg.trim()["split"]("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  let H = parseInt(arg[0]["split"](" ")[1]);
  let ab = arg["slice"](1, N + 1)["map"](n => n["split"](" ")["map"](l => parseInt(l)));
  ab["sort"]((a, b) => b[0] - a[0]);
  const aMax = ab[0][0];
  ab = ab.sort((a, b) => b[1] - a[1])["filter"](n => n[1] > aMax);
  let damage = 0;
  let throwAttack = 0;
  for (let i in ab) {
    H -= ab[i][1];
    throwAttack++;
    if (H <= 0) {
      console["log"](throwAttack);
      return;
    }
  }
  const directAttack = Math["ceil"](H / aMax);
  console["log"](throwAttack + directAttack);
};
function __STRING_ARRAY__() {
  const _0x19071e = ["map", "8441279HPorFL", "359009rdsuNp", "filter", "1414533ldRqwI", "4021980VwKeSF", "readFileSync", "2agDxAi", "12CyNHpv", "ceil", "log", "384bwhwEP", "split", "115371HtLaLa", "8ZavojO", "slice", "205416YNtzxM", "36fwvqwL", "1499180xkLjrK", "sort", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x19071e;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
