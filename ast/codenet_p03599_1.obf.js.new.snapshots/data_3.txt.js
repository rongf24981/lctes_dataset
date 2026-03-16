function __DECODE_0__(yOWfzv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 378;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yOWfzv, key);
}
function __STRING_ARRAY__() {
  const _0x4e50f8 = ["1864vNqiDQ", "705823YafDvQ", "245OziZNu", "trim", "split", "3625716rhxuDd", "3645265zCvWxe", "22fClyeW", "439050fiuCPp", "3708HxTZvI", "13enDRYe", "609SPxQIc", "utf8", "29043amyrcR", "4ccdkRd", "62646PMdIYU"];
  __STRING_ARRAY__ = function () {
    return _0x4e50f8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("705823YafDvQ") / 1 + parseInt("3708HxTZvI") / 2 * (parseInt("609SPxQIc") / 3) + -parseInt("4ccdkRd") / 4 * (-parseInt("3645265zCvWxe") / 5) + -parseInt("62646PMdIYU") / 6 * (parseInt("245OziZNu") / 7) + -parseInt("1864vNqiDQ") / 8 * (-parseInt("29043amyrcR") / 9) + -parseInt("439050fiuCPp") / 10 * (parseInt("22fClyeW") / 11) + parseInt("3625716rhxuDd") / 12 * (-parseInt("13enDRYe") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 396095);
const input = require("fs").readFileSync("/dev/stdin", "utf8");
(input => {
  const [A, B, C, D, E, F] = input["trim"]()["split"](" ").map(Number);
  let W = {};
  let S = {};
  for (let i = 1; i < F; i++) {
    for (let j = 0; j < F; j++) {
      const s = A * i * 100 + j * B * 100;
      if (s > F) {
        break;
      }
      W[s] = 1;
    }
  }
  const p = F * E / 100;
  for (let i = 0; i < F; i++) {
    for (let j = 0; j < F; j++) {
      const s = C * i + D * j;
      if (s > p) {
        break;
      }
      S[s] = 1;
    }
  }
  let ans = [A * 100, 0];
  let max = 0;
  let r = E / 100;
  for (let i in W) {
    for (let j in S) {
      const t = i - 0 + (j - 0);
      const sw = j / i;
      if (sw > r || t > F) {
        continue;
      }
      if (sw > max) {
        max = sw;
        ans = [t, j];
      }
    }
  }
  console.log(ans[0], ans[1]);
})(input);
