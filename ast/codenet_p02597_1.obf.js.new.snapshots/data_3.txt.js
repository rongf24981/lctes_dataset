function __DECODE_0__(PjuREK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PjuREK, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("7ojoqoQ") / 1 * (parseInt("341468aCGmWn") / 2) + parseInt("3bGxyHV") / 3 * (-parseInt("278564LAKXCn") / 4) + parseInt("6084645Vgdree") / 5 * (parseInt("6Leicfi") / 6) + parseInt("4548705QasxQM") / 7 + parseInt("8SBbXqE") / 8 * (parseInt("8532414ndIUUT") / 9) + -parseInt("20NWmEBH") / 10 * (-parseInt("5117849TzlgsP") / 11) + -parseInt("1644RQbFeA") / 12 * (parseInt("169481TbJpDo") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 694460);
function __STRING_ARRAY__() {
  const _0x58a1a9 = ["split", "8532414ndIUUT", "1644RQbFeA", "7ojoqoQ", "341468aCGmWn", "20NWmEBH", "/dev/stdin", "6Leicfi", "3bGxyHV", "8SBbXqE", "5117849TzlgsP", "length", "6084645Vgdree", "4548705QasxQM", "169481TbJpDo", "278564LAKXCn", "log"];
  __STRING_ARRAY__ = function () {
    return _0x58a1a9;
  };
  return __STRING_ARRAY__();
}
function MainD(input) {
  const arr = input["split"]("\n");
  const N = arr[0];
  const Ci = arr[1]["split"]("");
  let answer = 0;
  let Wnum = 0;
  for (let i = 0; i < Ci["length"]; i++) {
    if (Ci[i] === "W") {
      Wnum++;
    }
  }
  if (Wnum === 0) {
    return console["log"](0);
  }
  for (let i = Wnum - 1; i < Ci["length"]; i++) {
    if (Ci[i] === "R") {
      answer++;
    }
  }
  console["log"](answer);
}
MainD(require("fs").readFileSync("/dev/stdin", "utf8"));
