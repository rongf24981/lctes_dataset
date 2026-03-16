function __STRING_ARRAY__() {
  const _0x4113a2 = ["/dev/stdin", "1367064xBAWEx", "utf8", "10daTnvb", "1472790ATtBuL", "log", "split", "198596xnKsQR", "4129032pjpWXi", "610YUCmKZ", "1549303YsONXn", "3HOFJVd", "104463jVlUWQ", "readFileSync", "2037087HUuSfW"];
  __STRING_ARRAY__ = function () {
    return _0x4113a2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HucXBO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 492;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HucXBO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("3HOFJVd") / 1 * (parseInt("198596xnKsQR") / 2) + -parseInt("2037087HUuSfW") / 3 + parseInt("1367064xBAWEx") / 4 * (parseInt("10daTnvb") / 5) + parseInt("1472790ATtBuL") / 6 + parseInt("1549303YsONXn") / 7 + -parseInt("4129032pjpWXi") / 8 + parseInt("104463jVlUWQ") / 9 * (parseInt("610YUCmKZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 365301);
function Main(impu) {
  let imput = impu.split("\n");
  let name = imput[0]["split"](" ");
  let count = imput[1]["split"](" ");
  if (name[0] === imput[2]) {
    count[0]--;
  } else {
    count[1]--;
  }
  console["log"](count[0] + " " + count[1]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
