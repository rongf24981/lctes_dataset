function __DECODE_0__(hjctRp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 172;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hjctRp, key);
}
function __STRING_ARRAY__() {
  const _0x58f482 = ["length", "/dev/stdin", "3WmNeHb", "45xbLKNW", "readFileSync", "14pbjHbE", "split", "3746evyZrm", "385746dGradW", "17254611JSfLBK", "1000430IwXKod", "utf8", "210032jPJOLn", "3865232fCSMIf", "249dXocRb", "87140xkjMTe"];
  __STRING_ARRAY__ = function () {
    return _0x58f482;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("249dXocRb") / 1 * (-parseInt("3746evyZrm") / 2) + parseInt("3WmNeHb") / 3 * (parseInt("210032jPJOLn") / 4) + -parseInt("1000430IwXKod") / 5 + parseInt("385746dGradW") / 6 * (parseInt("14pbjHbE") / 7) + -parseInt("3865232fCSMIf") / 8 + -parseInt("45xbLKNW") / 9 * (-parseInt("87140xkjMTe") / 10) + parseInt("17254611JSfLBK") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 643644);
function main(input) {
  input = input.trim();
  let list = input["split"]("");
  let answer = 0;
  for (let i = 0; i < list["length"]; i++) {
    if (list[i] === "R") {
      if (answer === 0) {
        answer++;
      } else if (list[i - 1] === "R") {
        answer++;
      }
    }
  }
  console.log(answer);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
