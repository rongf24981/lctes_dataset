function __DECODE_0__(EMNYKb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 404;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EMNYKb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1rfuZQj") / 1 * (parseInt("234082GvdEAL") / 2) + -parseInt("3624039GmgMzp") / 3 + parseInt("2436896ghxpDl") / 4 + -parseInt("3022125GWntMd") / 5 + -parseInt("63882iiLeha") / 6 * (-parseInt("623ROzfjF") / 7) + parseInt("8387840MSebdr") / 8 + -parseInt("2364876MzZbNJ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 647126);
const calc = str => {
  const areas = [];
  const depthIndexes = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "\\") {
      depthIndexes["push"](i);
      continue;
    }
    if (char === "/" && depthIndexes["length"] > 0) {
      const j = depthIndexes["pop"]();
      sum += i - j;
      let currentArea = i - j;
      while (areas.length > 0 && areas[areas.length - 1]["depth"] > j) {
        currentArea += areas[areas["length"] - 1].area;
        areas["pop"]();
      }
      areas["push"]({
        depth: j,
        area: currentArea
      });
    }
  }
  console["log"](sum);
  if (areas["length"] === 0) {
    console["log"](0);
    return;
  }
  console["log"](areas.length + " " + areas["map"](obj => obj["area"])["join"](" "));
};
let inputStr = "";
process["stdin"].on("data", input => {
  inputStr += String["raw"]`${input}`;
});
function __STRING_ARRAY__() {
  const _0x55d0c9 = ["1rfuZQj", "area", "63882iiLeha", "raw", "3624039GmgMzp", "depth", "map", "8387840MSebdr", "3022125GWntMd", "623ROzfjF", "234082GvdEAL", "join", "log", "2436896ghxpDl", "push", "stdin", "pop", "data", "2364876MzZbNJ", "length"];
  __STRING_ARRAY__ = function () {
    return _0x55d0c9;
  };
  return __STRING_ARRAY__();
}
process.stdin.on("end", () => {
  calc(inputStr);
});
