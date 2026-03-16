function __DECODE_0__(yPEpeI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 346;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yPEpeI, key);
}
function __STRING_ARRAY__() {
  const _0x3ea689 = ["253lRgtdV", "3377586btrHAt", "2588648JrmaaU", "115tBMgPd", "763188nEGOtx", "2018511WxQdMN", "244vYMavJ", "98586UPUtHX", "10QDMPgn", "7LqSXMb", "utf8", "9283yhsqgK", "/dev/stdin", "4ltdVMp", "split", "13zyixYK", "12481742KFAgBt", "join", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x3ea689;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("9283yhsqgK") / 1 * (-parseInt("244vYMavJ") / 2) + -parseInt("3377586btrHAt") / 3 * (parseInt("4ltdVMp") / 4) + -parseInt("115tBMgPd") / 5 * (parseInt("98586UPUtHX") / 6) + parseInt("7LqSXMb") / 7 * (parseInt("2588648JrmaaU") / 8) + parseInt("2018511WxQdMN") / 9 * (parseInt("10QDMPgn") / 10) + parseInt("253lRgtdV") / 11 * (parseInt("763188nEGOtx") / 12) + parseInt("13zyixYK") / 13 * (-parseInt("12481742KFAgBt") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 747835);
function main(lines) {
  const n = lines["split"]("\n")[0];
  const An = lines.split("\n")[1]["split"](" ").map(Number);
  console.log(An["join"](" "));
  for (let i = 1; i < n; i++) {
    value = An[i];
    let j = i - 1;
    while (j >= 0 && value < An[j]) {
      An[j + 1] = An[j];
      j--;
    }
    An[j + 1] = value;
    console.log(An["join"](" "));
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
