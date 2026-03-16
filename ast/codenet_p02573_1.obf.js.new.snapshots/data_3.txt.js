(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("901AtTwik") / 1 * (-parseInt("866LSLToM") / 2) + -parseInt("129XpxNeh") / 3 * (parseInt("20564uUAwWw") / 4) + -parseInt("1170875QCOFEZ") / 5 + -parseInt("13194sBmUpv") / 6 * (-parseInt("1043eHieLG") / 7) + parseInt("823192wOOotf") / 8 + -parseInt("3644343SettBD") / 9 + -parseInt("26900tnVaMJ") / 10 * (-parseInt("1056tCsvuv") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 218758);
function __STRING_ARRAY__() {
  const _0x3b7449 = ["901AtTwik", "13194sBmUpv", "stdin", "20564uUAwWw", "split", "1056tCsvuv", "1043eHieLG", "map", "max", "26900tnVaMJ", "log", "3644343SettBD", "823192wOOotf", "1170875QCOFEZ", "866LSLToM", "end", "129XpxNeh"];
  __STRING_ARRAY__ = function () {
    return _0x3b7449;
  };
  return __STRING_ARRAY__();
}
const processData = lines => {
  const [n, m] = lines[0]["split"](" ")["map"](x => +x);
  let friendships = {};
  for (let i = 0; i < m; i++) {
    const f = lines[i + 1]["split"](" ")["map"](x => +x);
    let friendItem = friendships[f[0]] || friendships[f[1]] || {};
    friendships[f[0]] = friendItem;
    friendships[f[1]] = friendItem;
    friendItem[f[0]] = true;
    friendItem[f[1]] = true;
  }
  let maxCount = 1;
  for (let p in friendships) {
    let count = 0;
    for (let t2 in friendships[p]) {
      count++;
    }
    maxCount = Math["max"](maxCount, count);
  }
  console["log"](maxCount);
};
let i = "";
function __DECODE_0__(dIzKOt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 429;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dIzKOt, key);
}
process["stdin"].on("data", c => i += c);
process["stdin"].on("end", () => {
  const {
    EOL: EOL
  } = require("os");
  const lines = i.split(EOL);
  processData(lines);
});
