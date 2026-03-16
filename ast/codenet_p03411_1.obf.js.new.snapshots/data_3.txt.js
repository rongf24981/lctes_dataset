function __DECODE_0__(IyYssE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 461;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IyYssE, key);
}
function __STRING_ARRAY__() {
  const _0x50996f = ["515slkpgt", "10126776bZmqIL", "utf8", "440077RaSeCw", "132170LHiaAM", "2330vxPoIo", "/dev/stdin", "3125451CiDtee", "trim", "1119472nBsYDP", "7UuhkeI", "push", "split", "map", "152mFmJlv", "492MwUcAW", "splice", "151380HIBSLo", "length", "960JMwsTR"];
  __STRING_ARRAY__ = function () {
    return _0x50996f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("515slkpgt") / 1 * (-parseInt("2330vxPoIo") / 2) + -parseInt("3125451CiDtee") / 3 + parseInt("152mFmJlv") / 4 * (parseInt("132170LHiaAM") / 5) + parseInt("10126776bZmqIL") / 6 * (parseInt("7UuhkeI") / 7) + -parseInt("1119472nBsYDP") / 8 + -parseInt("151380HIBSLo") / 9 * (-parseInt("960JMwsTR") / 10) + parseInt("440077RaSeCw") / 11 * (-parseInt("492MwUcAW") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 884995);
console.log((args => {
  const [[N], ...tmp] = args["trim"]()["split"]("\n")["map"](r => r["split"](" ")["map"](v => v | 0));
  const rp = [];
  const bp = [];
  for (let i = 0; i < N; i++) {
    rp["push"](tmp[i]);
    bp.push(tmp[N + i]);
  }
  bp.sort(([a], [b]) => a - b);
  let count = 0;
  const test = [];
  for (let i = 0; i < N; i++) {
    const [bx, by] = bp[i];
    let max = [-1, -1];
    for (let j = 0; j < rp["length"]; j++) {
      const [rx, ry] = rp[j];
      if (bx < rx) {
        continue;
      }
      if (by > ry && ry > max[1]) {
        max = [j, ry];
      }
    }
    if (max[1] >= 0) {
      rp["splice"](max[0], 1);
      count++;
    }
  }
  return "" + count;
})(require("fs").readFileSync("/dev/stdin", "utf8")));
