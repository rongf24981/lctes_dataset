function __STRING_ARRAY__() {
  const _0x4626df = ["shift", "1329811ZVfrNa", "min", "1437705HYhgoE", "4278190HRdJzU", "max", "readFileSync", "18MUPEEo", "1352272mYFlll", "map", "185602HGUcGY", "256LQCBaK", "/dev/stdin", "3381608UlJyNW", "190737qiNqmN"];
  __STRING_ARRAY__ = function () {
    return _0x4626df;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OHqWvw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 345;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHqWvw, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("185602HGUcGY") / 1 + -parseInt("1352272mYFlll") / 2 + -parseInt("1437705HYhgoE") / 3 + parseInt("3381608UlJyNW") / 4 + parseInt("4278190HRdJzU") / 5 + -parseInt("18MUPEEo") / 6 * (parseInt("1329811ZVfrNa") / 7) + -parseInt("256LQCBaK") / 8 * (-parseInt("190737qiNqmN") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 468324);
function Main(input) {
  input = input.split("\n");
  input["shift"]();
  let xy = input["map"](val => val.split(" ")["map"](Number));
  let arr0 = xy["map"](val => val[0] + val[1]);
  let arr1 = xy["map"](val => val[0] - val[1]);
  let arr0_calc = Math["max"](...arr0) - Math["min"](...arr0);
  let arr1_calc = Math["max"](...arr1) - Math["min"](...arr1);
  console.log(Math.max(arr0_calc, arr1_calc));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
