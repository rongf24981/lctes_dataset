function __DECODE_0__(OaLZzH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 415;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OaLZzH, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("320YTDTmg") / 1 * (-parseInt("2426dYPwHy") / 2) + -parseInt("3232311LCIVvJ") / 3 + parseInt("3677204jNGvdn") / 4 * (-parseInt("5hGLWYJ") / 5) + parseInt("6jMLjfA") / 6 * (-parseInt("2237109KOGhRY") / 7) + -parseInt("433448PyqpBj") / 8 * (parseInt("117uFSKyp") / 9) + parseInt("5198160pQRqNp") / 10 * (parseInt("22bjQgqL") / 11) + parseInt("36CwXRIT") / 12 * (parseInt("12710347IxtHcx") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 563951);
console["log"]((args => {
  const [HW, ...S] = args["trim"]()["split"]("\n");
  const [H, W] = HW.split(" ").map(v => parseInt(v));
  const trail = Array.from({
    length: H
  }, _ => Array(W)["fill"](false));
  const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  let p = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (trail[i][j]) {
        continue;
      }
      const stack = [[i, j]];
      trail[i][j] = true;
      let w = S[i][j] === "." | 0;
      let b = w ^ 1;
      while (stack["length"]) {
        const [x, y] = stack["pop"]();
        for (const [dx, dy] of dir) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || H <= nx || ny < 0 || W <= ny || trail[nx][ny] || S[x][y] === S[nx][ny]) {
            continue;
          }
          trail[nx][ny] = true;
          if (S[nx][ny] === "#") {
            b++;
          } else {
            w++;
          }
          stack["push"]([nx, ny]);
        }
      }
      p += w * b;
    }
  }
  return "" + p;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x4e90d5 = ["2237109KOGhRY", "6jMLjfA", "22bjQgqL", "fill", "utf8", "pop", "log", "length", "3232311LCIVvJ", "433448PyqpBj", "5hGLWYJ", "/dev/stdin", "3677204jNGvdn", "split", "320YTDTmg", "push", "36CwXRIT", "5198160pQRqNp", "2426dYPwHy", "trim", "12710347IxtHcx", "readFileSync", "117uFSKyp"];
  __STRING_ARRAY__ = function () {
    return _0x4e90d5;
  };
  return __STRING_ARRAY__();
}
