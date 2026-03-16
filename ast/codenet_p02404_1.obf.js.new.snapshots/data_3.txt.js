function __DECODE_0__(HUHQek, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 178;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HUHQek, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("26WdUMyb") / 1 * (-parseInt("24392ZmvyHW") / 2) + -parseInt("836862QqGaex") / 3 + parseInt("30044UZyAoM") / 4 * (parseInt("450rIANLp") / 5) + -parseInt("2005986eLtdby") / 6 * (-parseInt("14eFzQnr") / 7) + parseInt("6663160GodOTr") / 8 + parseInt("477dCVKRa") / 9 * (-parseInt("163810oGybfV") / 10) + -parseInt("17963dFLyaM") / 11 * (parseInt("6540byTVJJ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 457511);
let content = "";
process["stdin"]["resume"]();
process.stdin["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  const _0x20be5f = ["end", "477dCVKRa", "30044UZyAoM", "split", "2005986eLtdby", "resume", "6540byTVJJ", "26WdUMyb", "836862QqGaex", "163810oGybfV", "data", "setEncoding", "24392ZmvyHW", "utf8", "17963dFLyaM", "log", "6663160GodOTr", "stdin", "trim", "450rIANLp", "repeat", "map", "14eFzQnr"];
  __STRING_ARRAY__ = function () {
    return _0x20be5f;
  };
  return __STRING_ARRAY__();
}
process["stdin"].on("data", buf => {
  content += buf;
});
process["stdin"].on("end", () => {
  const rects = content["trim"]()["split"]("\n")["map"](line => line["split"](" ").map(n => parseInt(n, 10)));
  for (const rect of rects) {
    if (rect[0] !== 0 || rect[1] !== 0) {
      console["log"](drawReact(rect));
    }
  }
});
const drawReact = ([h, w]) => {
  const hline = "#"["repeat"](w) + "\n";
  return hline + ("#" + "."["repeat"](w - 2) + "#\n")["repeat"](h - 2) + hline;
};
