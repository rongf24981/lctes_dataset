(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("36557tnwILD") / 1 * (parseInt("50afcazL") / 2) + -parseInt("2151fqPQzw") / 3 * (parseInt("440jqjLZG") / 4) + parseInt("3720770LziAnL") / 5 + parseInt("2623674CRCgSn") / 6 + parseInt("1088129CqAARF") / 7 + parseInt("7992uCVOxq") / 8 + -parseInt("14670054ozskoJ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 542928);
const config = {
  input: "/dev/stdin",
  newline: "\n"
};
const line = require("fs").readFileSync(config["input"], "utf-8")["split"](config["newline"]);
function __STRING_ARRAY__() {
  const _0x2c20c0 = ["map", "log", "split", "7992uCVOxq", "14670054ozskoJ", "2151fqPQzw", "input", "1088129CqAARF", "50afcazL", "length", "36557tnwILD", "newline", "/dev/stdin", "3720770LziAnL", "440jqjLZG", "utf-8", "toString", "2623674CRCgSn"];
  __STRING_ARRAY__ = function () {
    return _0x2c20c0;
  };
  return __STRING_ARRAY__();
}
const list = line[1]["split"](" ")["map"](x => parseInt(x));
const partition = arr => {
  const x = arr[arr.length - 1];
  const result = [...arr];
  let i = -1;
  for (let j = 0; j < arr["length"] - 1; j++) {
    if (result[j] <= x) {
      i++;
      const tmp = result[i];
      result[i] = result[j];
      result[j] = tmp;
    }
  }
  const tmp = result[i + 1];
  result[i + 1] = result[arr.length - 1];
  result[arr["length"] - 1] = tmp;
  return [i + 1, result];
};
function __DECODE_0__(xfTDRm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 277;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfTDRm, key);
}
const res = partition(list);
console["log"](res[1]["map"]((x, i) => i === res[0] ? "[" + x + "]" : x["toString"]()).join(" "));
