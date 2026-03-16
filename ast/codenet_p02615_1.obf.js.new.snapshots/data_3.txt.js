function __STRING_ARRAY__() {
  const _0x428f10 = ["6iPwWRY", "map", "readFileSync", "env", "13116pikdlE", "utf8", "9402633vvUTNk", "8rjmqiH", "141164ZaDKxp", "/dev/stdin", "51NFMPIK", "split", "284NOYqqp", "sort", "3553070HAHLKE", "log", "8268350BJeThe", "13123VtNaqa", "4663nxVSBM", "7529326ihEkXB", "push"];
  __STRING_ARRAY__ = function () {
    return _0x428f10;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("4663nxVSBM") / 1 * (-parseInt("284NOYqqp") / 2) + parseInt("51NFMPIK") / 3 * (parseInt("141164ZaDKxp") / 4) + parseInt("3553070HAHLKE") / 5 * (parseInt("6iPwWRY") / 6) + -parseInt("7529326ihEkXB") / 7 + parseInt("8rjmqiH") / 8 * (-parseInt("9402633vvUTNk") / 9) + parseInt("8268350BJeThe") / 10 + parseInt("13123VtNaqa") / 11 * (parseInt("13116pikdlE") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 658844);
function __DECODE_0__(LwKEuv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LwKEuv, key);
}
const main = input => {
  input = input.trim()["split"]("\n");
  let n = parseInt(input[0], 10) - 2;
  const nums = input[1]["split"](" ")["map"](Number)["sort"]((a, b) => b - a);
  let r = [1];
  for (n; n >= 2; n -= 2) {
    r["push"](2);
  }
  r["push"](n);
  return console["log"](r.reduce((a, b, i) => a + b * nums[i], 0));
};
if (process["env"].MYTEST) {
  test();
} else {
  main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
