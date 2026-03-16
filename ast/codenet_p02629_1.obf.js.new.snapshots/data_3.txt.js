function __STRING_ARRAY__() {
  const _0x656a8f = ["fromCharCode", "readFileSync", "1156968FPErpD", "utf8", "54002Ekzuou", "27lqofsF", "184074vVwcgy", "/dev/stdin", "10yTcmgL", "2748429lyKoCC", "11612348HVvlTn", "864927DoKaln", "6vLVeEQ", "1598365FttimN", "split", "24RUUbOV"];
  __STRING_ARRAY__ = function () {
    return _0x656a8f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("184074vVwcgy") / 1 + parseInt("54002Ekzuou") / 2 * (-parseInt("27lqofsF") / 3) + -parseInt("1156968FPErpD") / 4 + parseInt("1598365FttimN") / 5 * (-parseInt("6vLVeEQ") / 6) + parseInt("864927DoKaln") / 7 * (parseInt("24RUUbOV") / 8) + parseInt("2748429lyKoCC") / 9 * (-parseInt("10yTcmgL") / 10) + parseInt("11612348HVvlTn") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 453120);
function Main(inputs) {
  const inputline = inputs["split"]("\n").map(x => parseInt(x, 10));
  const line = inputline[0];
  function base26(number) {
    let remainder26 = number % 26;
    let division26 = Math.floor(number / 26);
    let output = remainder26 != 0 ? String["fromCharCode"](64 + remainder26) : (--division26, "Z");
    return output = division26 != 0 ? base26(division26) + output : output;
  }
  console.log(base26(line).toLowerCase());
}
function __DECODE_0__(tqbwyB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tqbwyB, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
