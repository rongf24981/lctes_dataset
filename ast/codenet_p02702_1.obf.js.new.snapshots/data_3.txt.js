function __STRING_ARRAY__() {
  const _0x3dbcca = ["487115UIcJqL", "64oPCacp", "1252365ihfYJQ", "63wCYjYu", "77608mZXUIw", "1557vrteLI", "utf8", "4274hLzJna", "55Sfvcsa", "17585020syIhsb", "log", "1170NkCIal", "58296yxuDLK", "readFileSync", "8467668vOBlci"];
  __STRING_ARRAY__ = function () {
    return _0x3dbcca;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1252365ihfYJQ") / 1 + parseInt("4274hLzJna") / 2 * (parseInt("1557vrteLI") / 3) + parseInt("64oPCacp") / 4 * (-parseInt("487115UIcJqL") / 5) + parseInt("1170NkCIal") / 6 * (-parseInt("58296yxuDLK") / 7) + -parseInt("77608mZXUIw") / 8 * (parseInt("63wCYjYu") / 9) + -parseInt("17585020syIhsb") / 10 + parseInt("55Sfvcsa") / 11 * (parseInt("8467668vOBlci") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 880526);
const Main = () => {
  let line = require("fs")["readFileSync"]("/dev/stdin", "utf8");
  const mod = {};
  let count = 0;
  for (let i = line.length; i > 0; i--) {
    const n = parseInt(line, 10);
    const m = n % 2019;
    if (mod[m] || m === 0) {
      count++;
    }
    mod[m] = true;
    line = line.slice(1);
  }
  console["log"](count);
};
function __DECODE_0__(jDnYHl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 378;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jDnYHl, key);
}
Main();
