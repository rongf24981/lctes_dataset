(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("484310SaBkXe") / 1 + -parseInt("1192648pHhPKk") / 2 + parseInt("48PduKHr") / 3 * (-parseInt("122160AvKDyx") / 4) + parseInt("464595NunHrI") / 5 + parseInt("414rwCltk") / 6 * (parseInt("22897nWlMyu") / 7) + -parseInt("1606336ZlAiRt") / 8 + -parseInt("153wFBcru") / 9 * (-parseInt("499390oPManv") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 366135);
function __DECODE_0__(yaEYlB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 413;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yaEYlB, key);
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8").split(/\n/);
for (let i = 0; i < input.length; i++) {
  let [n, x] = input[i]["split"](" ")["map"](Number);
  if (n === 0 && x === 0) {
    break;
  }
  let count = 0;
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      if (j === k) {
        break;
      }
      for (let l = 1; l <= n; l++) {
        if (j === l || k === l || j === k) {
          break;
        }
        if (j + k + l === x) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
function __STRING_ARRAY__() {
  const _0x38265b = ["464595NunHrI", "153wFBcru", "split", "22897nWlMyu", "414rwCltk", "122160AvKDyx", "map", "484310SaBkXe", "48PduKHr", "/dev/stdin", "499390oPManv", "1606336ZlAiRt", "1192648pHhPKk", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x38265b;
  };
  return __STRING_ARRAY__();
}
