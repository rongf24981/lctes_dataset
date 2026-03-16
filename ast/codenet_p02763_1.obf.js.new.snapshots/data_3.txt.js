'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("38925ImVEef") / 1 + -parseInt("113882zAQzYZ") / 2 * (parseInt("51bAwkYE") / 3) + -parseInt("5788UoUkqw") / 4 * (parseInt("165JZyVca") / 5) + -parseInt("4722384EmCLiB") / 6 + parseInt("14zaCBoJ") / 7 * (parseInt("987416IVkwEc") / 8) + parseInt("999vQajFD") / 9 * (-parseInt("31370lUMfaW") / 10) + parseInt("27592939agXeyb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 565359);
function __STRING_ARRAY__() {
  const _0x123b09 = ["5788UoUkqw", "trim", "readFileSync", "utf8", "split", "999vQajFD", "31370lUMfaW", "165JZyVca", "/dev/stdin", "27592939agXeyb", "38925ImVEef", "log", "987416IVkwEc", "14zaCBoJ", "slice", "4722384EmCLiB", "51bAwkYE", "113882zAQzYZ"];
  __STRING_ARRAY__ = function () {
    return _0x123b09;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(hWLvTe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hWLvTe, key);
}
function main(input) {
  let n = parseInt(input[0]);
  let s = input[1];
  let q_l = parseInt(input[2]);
  let q = [];
  for (let j = 0; j < q_l; j++) {
    let kari = input[j + 3]["trim"]()["split"](" ");
    q[j] = parseInt(kari[0]);
    if (q[j] === 1) {
      let i = parseInt(kari[1]);
      let c = kari[2];
      let str1 = s["slice"](0, i - 1);
      let str2 = s["slice"](i);
      s = str1 + c + str2;
    } else {
      let l = parseInt(kari[1]);
      let r = parseInt(kari[2]);
      let str = s["slice"](l - 1, r);
      let list = {};
      let counter = 0;
      for (let i = 0; i < str.length; i++) {
        if (list[str[i]] === undefined) {
          counter++;
          list[str[i]] = true;
        }
      }
      console["log"](counter);
    }
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n"));
