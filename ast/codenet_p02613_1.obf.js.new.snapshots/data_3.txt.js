function __STRING_ARRAY__() {
  const _0x44a359 = ["11QiPyrI", "30368pDRsfI", "MYTEST", "1044aKyMHk", " x ", "trim", "readFileSync", "2pRJbec", "TLE", "log", "922100SIFPVT", "1526660ZoofxL", "6jHzsLs", "4168272xqmYhM", "99IyCHfP", "155581riIJcY", "3183KLFbnx", "2564947sDqcGf", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0x44a359;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDmlFM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 445;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDmlFM, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("155581riIJcY") / 1 * (-parseInt("2pRJbec") / 2) + -parseInt("3183KLFbnx") / 3 * (parseInt("1044aKyMHk") / 4) + -parseInt("922100SIFPVT") / 5 + parseInt("6jHzsLs") / 6 * (parseInt("2564947sDqcGf") / 7) + -parseInt("30368pDRsfI") / 8 * (parseInt("99IyCHfP") / 9) + -parseInt("1526660ZoofxL") / 10 * (-parseInt("11QiPyrI") / 11) + parseInt("4168272xqmYhM") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 207765);
const main = input => {
  const [n, ...rows] = input["trim"]()["split"]("\n");
  const k = ["AC", "WA", "TLE", "RE"];
  const ans = {};
  for (let v of k) {
    ans[v] = 0;
  }
  for (let r of rows) {
    ans[r] += 1;
  }
  for (let v of k) {
    console["log"](v + " x " + ans[v]);
  }
};
if (process.env["MYTEST"]) {
  test();
} else {
  main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
