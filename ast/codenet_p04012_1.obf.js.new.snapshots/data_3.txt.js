'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("17329XLpzMf") / 1 * (parseInt("86wXDmEQ") / 2) + -parseInt("30fbxSAH") / 3 * (parseInt("251012SGfikZ") / 4) + -parseInt("1183825yLUNMb") / 5 + parseInt("12fdvBeM") / 6 * (-parseInt("1178856IjfFhm") / 7) + parseInt("232408pCwztg") / 8 + -parseInt("6714000SILvIo") / 9 + parseInt("30774390eyrgdK") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 414232);
function __DECODE_0__(OpMaGo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OpMaGo, key);
}
function __STRING_ARRAY__() {
  const _0xc03d89 = ["counter", "indexOf", "6714000SILvIo", "log", "split", "readFileSync", "1178856IjfFhm", "232408pCwztg", "251012SGfikZ", "replace", "push", "30774390eyrgdK", "86wXDmEQ", "1183825yLUNMb", "Yes", "forEach", "30fbxSAH", "17329XLpzMf", "12fdvBeM"];
  __STRING_ARRAY__ = function () {
    return _0xc03d89;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const input = s["replace"](/\n/g, "")["split"]("");
  let words = [];
  input["forEach"]((x, i, self) => {
    if (self["indexOf"](x) === i) {
      words["push"]({
        word: x,
        counter: 1
      });
    } else {
      words["forEach"](y => {
        if (x === y.word) {
          y["counter"] += 1;
        }
      });
    }
  });
  const result = words.every(x => x["counter"] % 2 === 0) ? "Yes" : "No";
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
