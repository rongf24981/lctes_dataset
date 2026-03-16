function __STRING_ARRAY__() {
  const _0x1d7695 = ["835908MMXydX", "10qgDkNt", "4765684NIzOqV", "map", "7715835tnENTF", "8sVdoUf", "sort", "5877XBhVGV", "4764405TJKLtT", "/dev/stdin", "6EWlArf", "utf8", "1892BWdHEU", "readFileSync", "22YAFSsA", "585383DRqfqd", "split", "forEach", "815596aORQqN"];
  __STRING_ARRAY__ = function () {
    return _0x1d7695;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(fiutXz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 161;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fiutXz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("585383DRqfqd") / 1 + parseInt("815596aORQqN") / 2 + parseInt("5877XBhVGV") / 3 * (parseInt("1892BWdHEU") / 4) + parseInt("4764405TJKLtT") / 5 * (-parseInt("6EWlArf") / 6) + parseInt("4765684NIzOqV") / 7 * (parseInt("8sVdoUf") / 8) + parseInt("7715835tnENTF") / 9 * (-parseInt("10qgDkNt") / 10) + parseInt("22YAFSsA") / 11 * (-parseInt("835908MMXydX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 651086);
function main(input) {
  const args = input.split("\n");
  const N = parseInt(args[0], 10);
  const sorted = args[1]["split"](" ")["map"](v => parseInt(v))["sort"]((a, b) => b - a);
  var alice = 0;
  var bob = 0;
  sorted["forEach"]((v, i) => {
    if ((i + 1) % 2 == 0) {
      bob += v;
    } else {
      alice += v;
    }
  });
  console.log(alice - bob);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
