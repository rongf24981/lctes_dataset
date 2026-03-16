'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("95tNpLwW") / 1 * (parseInt("15634YoJpxG") / 2) + parseInt("2670537FfBGod") / 3 + -parseInt("3915624LLDdtR") / 4 + -parseInt("1555000XjreDy") / 5 + -parseInt("54MxfkNn") / 6 * (-parseInt("242837PDZoRn") / 7) + -parseInt("41864lFGoxP") / 8 * (parseInt("81zByTlW") / 9) + parseInt("654780BePYUI") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 673488);
function main(input) {
  input = input["split"]("\n");
  input[0] = input[0]["split"](" ")["map"](v => ~~v);
  const h = input[0][0];
  const w = input[0][1];
  let tmp = "#"["repeat"](w + 2) + "\n";
  for (let i = 1; i <= h; i++) {
    tmp += "#" + input[i] + "#\n";
  }
  tmp += "#".repeat(w + 2);
  console.log(tmp);
}
function __DECODE_0__(oOvpVI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 380;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oOvpVI, key);
}
function __STRING_ARRAY__() {
  const _0x34d7f2 = ["41864lFGoxP", "81zByTlW", "3915624LLDdtR", "15634YoJpxG", "split", "1555000XjreDy", "654780BePYUI", "2670537FfBGod", "95tNpLwW", "map", "repeat", "readFileSync", "242837PDZoRn", "utf8", "54MxfkNn", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x34d7f2;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
