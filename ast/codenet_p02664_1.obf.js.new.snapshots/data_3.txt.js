function __DECODE_0__(hrOeyv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hrOeyv, key);
}
function __STRING_ARRAY__() {
  const _0x38c25d = ["987405AmwGsI", "3966660nySzQE", "length", "2gUfBom", "1081853JxjVQU", "log", "7532968IFDZbM", "readFileSync", "utf8", "8848530IeThjz", "218436HTJtKV", "259rMZcVV", "2239508toSjYD"];
  __STRING_ARRAY__ = function () {
    return _0x38c25d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1081853JxjVQU") / 1 * (-parseInt("2gUfBom") / 2) + -parseInt("987405AmwGsI") / 3 + -parseInt("2239508toSjYD") / 4 + -parseInt("3966660nySzQE") / 5 + -parseInt("218436HTJtKV") / 6 * (-parseInt("259rMZcVV") / 7) + parseInt("7532968IFDZbM") / 8 + -parseInt("8848530IeThjz") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 704982);
function Main(str) {
  let newString = "";
  for (let i = 0; i < str["length"]; i++) {
    if (str[i] === "?" && (str[i - 1] && str[i - 1] === "P" || str[i + 1] && str[i + 1] === "P")) {
      newString = newString + "D";
    } else if (str[i] == "?") {
      newString = newString + "P";
    } else {
      newString = newString + str[i];
    }
  }
  console["log"](newString);
}
let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
Main(input);
