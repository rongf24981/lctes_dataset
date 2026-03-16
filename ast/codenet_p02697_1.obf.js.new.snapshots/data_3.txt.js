function __STRING_ARRAY__() {
  const _0xd0911c = ["7274370OEuHRv", "log", "234222FYNJCv", "1096CcTnaE", "22232080sJZBiF", "map", "stdin", "data", "end", "2427250yitiwi", "42OXoVlt", "split", "68odZevx", "78636lpGMKg", "117774veVlrj", "1492914MmNLRo"];
  __STRING_ARRAY__ = function () {
    return _0xd0911c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1492914MmNLRo") / 1 + parseInt("2427250yitiwi") / 2 + -parseInt("78636lpGMKg") / 3 * (-parseInt("68odZevx") / 4) + parseInt("7274370OEuHRv") / 5 + -parseInt("234222FYNJCv") / 6 * (parseInt("42OXoVlt") / 7) + parseInt("1096CcTnaE") / 8 * (parseInt("117774veVlrj") / 9) + -parseInt("22232080sJZBiF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 956541);
const processData = lines => {
  let [n, m] = lines[0]["split"](" ")["map"](x => +x);
  if (n % 2 === 1) {
    let end = n - 1;
    let start = 1;
    while (m) {
      console["log"](start++ + " " + end--);
      m--;
    }
  } else {
    let end = n / 2 + 1;
    let start = n / 2;
    while (m) {
      console["log"](start-- + " " + end++);
      m--;
    }
  }
};
let i = "";
function __DECODE_0__(cMpfAi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 284;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cMpfAi, key);
}
process["stdin"].on("data", c => i += c);
process["stdin"].on("end", () => {
  const {
    EOL: EOL
  } = require("os");
  const lines = i["split"](EOL);
  processData(lines);
});
