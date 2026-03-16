(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("5shzaku") / 1 * (-parseInt("97562DirJDO") / 2) + parseInt("62661jTLxfT") / 3 * (-parseInt("68mFNlNx") / 4) + -parseInt("1597560ykbLnK") / 5 + -parseInt("1125186cLSaqT") / 6 + -parseInt("14959YWryqw") / 7 + parseInt("1619984rHegpS") / 8 + parseInt("9TTdMLg") / 9 * (parseInt("11051570TVmwWQ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 199491);
function __STRING_ARRAY__() {
  const _0xc4fc80 = ["split", "1619984rHegpS", "62661jTLxfT", "log", "9TTdMLg", "97562DirJDO", "push", "5shzaku", "1125186cLSaqT", "68mFNlNx", "14959YWryqw", "1597560ykbLnK", "reduce", "11051570TVmwWQ"];
  __STRING_ARRAY__ = function () {
    return _0xc4fc80;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  inputs = input["split"]("\n");
  const N = Number(inputs[0]);
  const arr = [];
  for (let i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      arr["push"](i);
    }
  }
  const sum = arr["reduce"]((prev, current) => {
    return prev + current;
  });
  console["log"](sum);
}
function __DECODE_0__(NpaDBS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 172;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NpaDBS, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
