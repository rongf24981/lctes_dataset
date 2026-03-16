(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("394712FVBhtH") / 1 + parseInt("408222cBdhXV") / 2 + parseInt("9Ngscta") / 3 * (-parseInt("559796QDvDDp") / 4) + parseInt("10WOaeRz") / 5 * (parseInt("25626xUEEmd") / 6) + -parseInt("7rMJrie") / 7 * (-parseInt("2836664JAZrZf") / 8) + -parseInt("19665lajEHD") / 9 * (-parseInt("2380yAypYk") / 10) + parseInt("682704TnQHNY") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 334771);
function __DECODE_0__(asezzC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 438;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(asezzC, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n")["map"](function (x) {
    return x.split(" ");
  });
  let M = parseInt(input[0][0], 10);
  let ans = -1;
  let tmp = 0;
  for (let i = 0; i < M; i++) {
    ans += parseInt(input[i + 1][1], 10);
    tmp += parseInt(input[i + 1][0], 10) * parseInt(input[i + 1][1], 10);
  }
  ans += Math["floor"]((tmp - 1) / 9);
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x191639 = ["utf8", "2380yAypYk", "559796QDvDDp", "trim", "floor", "408222cBdhXV", "19665lajEHD", "10WOaeRz", "map", "25626xUEEmd", "/dev/stdin", "394712FVBhtH", "9Ngscta", "readFileSync", "682704TnQHNY", "7rMJrie", "2836664JAZrZf", "split"];
  __STRING_ARRAY__ = function () {
    return _0x191639;
  };
  return __STRING_ARRAY__();
}
