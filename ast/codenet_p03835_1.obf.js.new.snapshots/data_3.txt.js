function __STRING_ARRAY__() {
  const _0x11e37a = ["825949tNmElX", "5327615cZLezZ", "287ghRPMy", "30wfDelu", "3986382qQVhzM", "4aoKIwW", "24753751uXYCaH", "readFileSync", "79986tfCNYh", "2zNGZTE", "split", "15002480iBEbPo", "log", "4074507Uracwq", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x11e37a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xfwmha, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 396;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfwmha, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("825949tNmElX") / 1 * (-parseInt("2zNGZTE") / 2) + -parseInt("3986382qQVhzM") / 3 + parseInt("4aoKIwW") / 4 * (parseInt("5327615cZLezZ") / 5) + parseInt("79986tfCNYh") / 6 * (-parseInt("287ghRPMy") / 7) + parseInt("15002480iBEbPo") / 8 + parseInt("4074507Uracwq") / 9 * (parseInt("30wfDelu") / 10) + -parseInt("24753751uXYCaH") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 999245);
function Main(input) {
  let inputs = input["split"](" ");
  let K = Number(inputs[0]);
  let S = Number(inputs[1]);
  let count = 0;
  for (let X = 0; X <= K; X++) {
    for (let Y = 0; Y <= K; Y++) {
      for (let Z = 0; Z <= K; Z++) {
        if (X + Y + Z === S) {
          count++;
        }
      }
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
