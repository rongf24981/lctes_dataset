'use strict';

function __STRING_ARRAY__() {
  const _0x26c7a3 = ["/dev/stdin", "639Mtktev", "7ZyMxVI", "2536323sDRqiV", "map", "217478ukFxEP", "109644Ushgne", "5103978YJQVYD", "fill", "1229080mkIxLs", "21YZkNhF", "split", "shift", "utf8", "981343SuctIf", "123260NslyLn", "readFileSync", "70eFfyPB"];
  __STRING_ARRAY__ = function () {
    return _0x26c7a3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("7ZyMxVI") / 1 * (-parseInt("217478ukFxEP") / 2) + -parseInt("2536323sDRqiV") / 3 + -parseInt("109644Ushgne") / 4 * (-parseInt("70eFfyPB") / 5) + parseInt("5103978YJQVYD") / 6 + parseInt("21YZkNhF") / 7 * (parseInt("1229080mkIxLs") / 8) + parseInt("639Mtktev") / 9 * (-parseInt("123260NslyLn") / 10) + parseInt("981343SuctIf") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 825121);
function Main(input) {
  let lines = input["split"]("\n");
  let nmq = lines.shift()["split"](/\s/)["map"](v => v - 0);
  let N = nmq[0];
  let M = nmq[1];
  let Q = nmq[2];
  let T = new Array(N + 1).fill(0)["map"](() => new Array(N + 1)["fill"](0));
  for (let m = 0; m < M; m++) {
    let lr = lines["shift"]()["split"](/\s/)["map"](v => v - 0);
    T[lr[0]][lr[1]] += 1;
  }
  for (let p = 1; p <= N; p++) {
    for (let q = 1; q <= N; q++) {
      T[p][q] += T[p - 1][q];
      T[p][q] += T[p][q - 1];
      T[p][q] -= T[p - 1][q - 1];
    }
  }
  for (let n = 0; n < Q; n++) {
    let pq = lines.shift().split(/\s/)["map"](v => v - 0);
    let p = pq[0];
    let q = pq[1];
    console.log(T[q][q] - T[p - 1][q]);
  }
}
function __DECODE_0__(JAeMJc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 450;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JAeMJc, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
