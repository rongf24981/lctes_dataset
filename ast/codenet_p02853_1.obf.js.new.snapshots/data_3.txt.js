function __DECODE_0__(MQboTR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MQboTR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("125018ClrXzt") / 1 + -parseInt("113264FzJlCy") / 2 + -parseInt("291036NUEaga") / 3 + -parseInt("391688GTFnpZ") / 4 + -parseInt("1239920fuBjPE") / 5 + -parseInt("1140210pXYWUj") / 6 + parseInt("5196877lynNRO") / 7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 177844);
function Main(input) {
  const chars = input["trim"]()["split"](" ");
  const x = Math["floor"](chars[0]);
  const y = Math.floor(chars[1]);
  let ans = 0;
  if (x === 1 && y === 1) {
    ans += 400000;
  }
  if (x === 1) {
    ans += 300000;
  }
  if (y === 1) {
    ans += 300000;
  }
  if (x === 2) {
    ans += 200000;
  }
  if (y === 2) {
    ans += 200000;
  }
  if (x === 3) {
    ans += 100000;
  }
  if (y === 3) {
    ans += 100000;
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  const _0xaec5b8 = ["floor", "/dev/stdin", "391688GTFnpZ", "split", "5196877lynNRO", "1239920fuBjPE", "utf8", "log", "125018ClrXzt", "1140210pXYWUj", "291036NUEaga", "113264FzJlCy", "trim", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xaec5b8;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
