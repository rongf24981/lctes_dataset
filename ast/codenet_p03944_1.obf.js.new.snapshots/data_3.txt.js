'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1260169LxgdIT") / 1 + parseInt("1962154eoTXjd") / 2 * (-parseInt("3ILEcwA") / 3) + parseInt("1069436oLJbqk") / 4 * (-parseInt("5GzSlwJ") / 5) + parseInt("3410076VCNwEq") / 6 * (-parseInt("7sKjEwN") / 7) + parseInt("308536yitpvM") / 8 * (-parseInt("54CghDZA") / 9) + parseInt("11143790omYVCU") / 10 + -parseInt("21483GKAYQN") / 11 * (-parseInt("17412FldftG") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 639829);
function __DECODE_0__(SJKcdi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SJKcdi, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  let WHN = input[0]["split"](" ")["map"](Number);
  let minX = 0;
  let minY = 0;
  let maxX = WHN[0];
  let maxY = WHN[1];
  const N = WHN[2];
  for (let i = 1; i <= N; i++) {
    let tmp = input[i].trim()["split"](" ")["map"](Number);
    let A = tmp[2];
    if (A === 1) {
      if (tmp[0] > minX) {
        minX = tmp[0];
      }
    } else if (A === 2) {
      if (tmp[0] < maxX) {
        maxX = tmp[0];
      }
    } else if (A === 3) {
      if (tmp[1] > minY) {
        minY = tmp[1];
      }
    } else if (A === 4) {
      if (tmp[1] < maxY) {
        maxY = tmp[1];
      }
    }
  }
  const X = maxX - minX;
  const Y = maxY - minY;
  if (X <= 0 || Y <= 0) {
    console.log(0);
  } else {
    console["log"](X * Y);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x271685 = ["11143790omYVCU", "split", "21483GKAYQN", "54CghDZA", "3410076VCNwEq", "3ILEcwA", "readFileSync", "map", "5GzSlwJ", "log", "/dev/stdin", "utf8", "1069436oLJbqk", "17412FldftG", "1962154eoTXjd", "7sKjEwN", "308536yitpvM", "trim", "1260169LxgdIT"];
  __STRING_ARRAY__ = function () {
    return _0x271685;
  };
  return __STRING_ARRAY__();
}
