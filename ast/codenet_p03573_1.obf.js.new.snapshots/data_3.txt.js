(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1205489oprJnl") / 1 * (-parseInt("2rDdfLa") / 2) + parseInt("14919hIpZVl") / 3 * (-parseInt("976iBPacE") / 4) + -parseInt("5hBFiUx") / 5 * (parseInt("4555374sCciTv") / 6) + parseInt("5162976OLsZAA") / 7 + -parseInt("1959464uqImYN") / 8 + parseInt("253440FqtbdX") / 9 + parseInt("11646230tprujc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 918266);
function Main(input) {
  const numbers = input.split(" ")["map"](n => Number(n));
  const a = numbers[0];
  const b = numbers[1];
  const c = numbers[2];
  if (a === b) {
    console["log"](c);
  } else if (b === c) {
    console.log(a);
  } else {
    console["log"](b);
  }
}
function __STRING_ARRAY__() {
  const _0x4360e6 = ["14919hIpZVl", "253440FqtbdX", "976iBPacE", "2rDdfLa", "4555374sCciTv", "1205489oprJnl", "map", "/dev/stdin", "1959464uqImYN", "5162976OLsZAA", "11646230tprujc", "5hBFiUx", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4360e6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BdBqDn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 435;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BdBqDn, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
