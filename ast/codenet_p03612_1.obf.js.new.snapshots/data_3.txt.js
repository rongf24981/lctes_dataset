'use strict';

function __DECODE_0__(lgGxxS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 158;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lgGxxS, key);
}
function __STRING_ARRAY__() {
  const _0x5a1a08 = ["60650LIFZIh", "59694RDHilm", "1886076jHBkEd", "32NrUelp", "readFileSync", "20487pcLrWo", "utf8", "145mSnNmf", "267465UepbMA", "1YbIOoB", "16AgRELU", "1591280zIbGxG", "624211UEjauz", "split", "map", "/dev/stdin", "log"];
  __STRING_ARRAY__ = function () {
    return _0x5a1a08;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1YbIOoB") / 1 * (parseInt("60650LIFZIh") / 2) + parseInt("20487pcLrWo") / 3 * (parseInt("32NrUelp") / 4) + parseInt("145mSnNmf") / 5 * (parseInt("59694RDHilm") / 6) + -parseInt("624211UEjauz") / 7 * (parseInt("16AgRELU") / 8) + parseInt("1886076jHBkEd") / 9 + -parseInt("1591280zIbGxG") / 10 + parseInt("267465UepbMA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 209233);
const main = arg => {
  arg = arg.trim()["split"]("\n");
  const N = parseInt(arg[0]);
  const P = arg[1].split(" ")["map"](n => parseInt(n));
  let answer = 0;
  for (let i in P) {
    if (parseInt(i) + 1 === P[i]) {
      let temp = P[i];
      P[i] = P[parseInt(i) + 1];
      P[parseInt(i) + 1] = temp;
      answer++;
    }
  }
  console["log"](answer);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
