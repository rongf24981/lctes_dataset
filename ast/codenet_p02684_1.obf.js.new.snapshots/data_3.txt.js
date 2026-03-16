function __STRING_ARRAY__() {
  const _0x5bba4d = ["utf8", "/dev/stdin", "4410kGYbmb", "54yooGLb", "392364vjqpvk", "split", "size", "1234268nOsmQi", "set", "8FsqpUt", "187690dyDesC", "1083048Syuebm", "422992rXuEcK", "162BHZiKr", "log", "3263491HRRddf"];
  __STRING_ARRAY__ = function () {
    return _0x5bba4d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("422992rXuEcK") / 1 + -parseInt("392364vjqpvk") / 2 + parseInt("1083048Syuebm") / 3 + -parseInt("1234268nOsmQi") / 4 + parseInt("187690dyDesC") / 5 * (parseInt("54yooGLb") / 6) + parseInt("3263491HRRddf") / 7 * (parseInt("8FsqpUt") / 8) + parseInt("162BHZiKr") / 9 * (parseInt("4410kGYbmb") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 245268);
function main(input) {
  const lines = input.trim().split("\n");
  let [n, k] = lines[0]["split"](" ");
  n = +n;
  k = BigInt(k);
  const towns = lines[1]["split"](" ").map(Number);
  const visited = new Map();
  let pos = 1;
  while (k > 0) {
    const i = visited.get(pos);
    if (!i) {
      visited["set"](pos, BigInt(visited["size"]));
      pos = towns[pos - 1];
      k--;
    } else {
      const cycle = BigInt(visited["size"]) - i;
      const rest = k % cycle;
      for (let [key, value] of visited) {
        if (value == i + rest) {
          pos = key;
          break;
        }
      }
      k = 0;
    }
  }
  console["log"](pos);
}
function __DECODE_0__(KdgRXe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 116;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KdgRXe, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
