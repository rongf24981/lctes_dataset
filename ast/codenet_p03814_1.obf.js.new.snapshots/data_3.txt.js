(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("22089wWdmlw") / 1 + -parseInt("1838286YVkMfS") / 2 + parseInt("3651qQzLQC") / 3 * (parseInt("1380GVshLA") / 4) + parseInt("240TOmaMf") / 5 * (-parseInt("16266ngcxuV") / 6) + -parseInt("7397068mNzpIP") / 7 + -parseInt("848648BiTtvf") / 8 * (-parseInt("63yfjVDm") / 9) + parseInt("14594890UUimrb") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 538015);
function __STRING_ARRAY__() {
  const _0x35cdfe = ["240TOmaMf", "utf8", "split", "63yfjVDm", "3651qQzLQC", "1838286YVkMfS", "22089wWdmlw", "7397068mNzpIP", "readFileSync", "/dev/stdin", "1380GVshLA", "16266ngcxuV", "14594890UUimrb", "848648BiTtvf"];
  __STRING_ARRAY__ = function () {
    return _0x35cdfe;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(hOjtOO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 137;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hOjtOO, key);
}
function main(input) {
  const S = input["split"]("");
  let a_idx;
  let z_idx;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "A" && !a_idx) {
      a_idx = i;
    }
    if (S[i] === "Z") {
      z_idx = i;
    }
  }
  console.log(z_idx - a_idx + 1);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
