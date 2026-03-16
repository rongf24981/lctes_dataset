'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("707254RbBkDY") / 1 + -parseInt("615262vuUpww") / 2 + -parseInt("608856ORWxAO") / 3 + -parseInt("2396760DmhdTm") / 4 + parseInt("10lUXSwB") / 5 * (-parseInt("885030ZyTmGc") / 6) + parseInt("35SvCSaY") / 7 * (parseInt("654104JUIJgU") / 8) + parseInt("9KXAFpQ") / 9 * (parseInt("6616570gUqjYy") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 372943);
function __DECODE_0__(QSyXyX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QSyXyX, key);
}
const main = arg => {
  const S = arg["split"]("\n")[0]["split"](" ");
  let tail = S[0]["split"]("").pop();
  for (let i = 1; i < S["length"]; i++) {
    if (tail == S[i]["split"]("")[0]) {
      tail = S[i]["split"]("")["pop"]();
    } else {
      console["log"]("NO");
      return;
    }
  }
  console["log"]("YES");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0xfa7cf7 = ["split", "6616570gUqjYy", "10lUXSwB", "707254RbBkDY", "readFileSync", "length", "9KXAFpQ", "log", "654104JUIJgU", "2396760DmhdTm", "pop", "608856ORWxAO", "/dev/stdin", "885030ZyTmGc", "615262vuUpww", "utf8", "35SvCSaY"];
  __STRING_ARRAY__ = function () {
    return _0xfa7cf7;
  };
  return __STRING_ARRAY__();
}
