(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("98489FBtOxY") / 1 + parseInt("654086XRgYLN") / 2 * (parseInt("3jvGASR") / 3) + -parseInt("799196GDBfef") / 4 + -parseInt("166115susGKK") / 5 * (-parseInt("24gAauaH") / 6) + parseInt("140pLYoxZ") / 7 * (parseInt("88144pLUmFZ") / 8) + parseInt("9QoQQOM") / 9 * (parseInt("3807750vEnWTn") / 10) + -parseInt("6060197vQMjym") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 211855);
function __STRING_ARRAY__() {
  const _0x33539b = ["166115susGKK", "split", "88144pLUmFZ", "799196GDBfef", "utf8", "3jvGASR", "reduce", "98489FBtOxY", "6060197vQMjym", "9QoQQOM", "trim", "log", "24gAauaH", "654086XRgYLN", "140pLYoxZ", "slice", "readFileSync", "3807750vEnWTn"];
  __STRING_ARRAY__ = function () {
    return _0x33539b;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const k = input[0][1];
  const as = input[1].map(Number);
  const answer = as["reduce"]((total, cv, ci) => {
    var result = 0;
    as["slice"](ci)["reduce"]((pv, value, index) => {
      const remainder = (pv + value) % k;
      if (remainder === index + 1) {
        result++;
      }
      return remainder;
    }, 0);
    return total + result;
  }, null);
  console["log"](answer);
}
function __DECODE_0__(GMiTlF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 338;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GMiTlF, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n").map(line => line["split"](" ")));
