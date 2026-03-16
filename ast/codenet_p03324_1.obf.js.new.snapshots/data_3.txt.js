'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("236612OUJzHB") / 1 + parseInt("18414KmaGsA") / 2 + -parseInt("3MwyEsO") / 3 * (-parseInt("574184gMrClc") / 4) + parseInt("1227425zVeZzi") / 5 + parseInt("770274BZaTtu") / 6 * (-parseInt("14ItxJfI") / 7) + parseInt("1712360evAgjb") / 8 + parseInt("27801ZUYRre") / 9 * (parseInt("130JOFogg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 159070);
function __DECODE_0__(Tdjxoq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 233;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Tdjxoq, key);
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const D = parseInt(arg[0].split(" ")[0]);
  const N = parseInt(arg[0]["split"](" ")[1]);
  let temp = [...Array(D * 2)]["fill"](0);
  let answer = parseInt(N + String(temp["join"]("")));
  let plus = parseInt(1 + String(temp["join"]("")));
  console.log(N !== 100 ? answer : answer + plus);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0xf89187 = ["readFileSync", "trim", "1227425zVeZzi", "/dev/stdin", "1712360evAgjb", "3MwyEsO", "770274BZaTtu", "236612OUJzHB", "130JOFogg", "27801ZUYRre", "18414KmaGsA", "574184gMrClc", "14ItxJfI", "split", "fill", "join"];
  __STRING_ARRAY__ = function () {
    return _0xf89187;
  };
  return __STRING_ARRAY__();
}
