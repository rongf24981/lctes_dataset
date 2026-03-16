'use strict';

function __STRING_ARRAY__() {
  const _0x4d65d5 = ["10TcBNFk", "5464gjmlxX", "607664oKNjIT", "/dev/stdin", "readFileSync", "930408rOOdNf", "9rXpcQF", "141053QueZqk", "204XZVdrY", "1BShOqi", "999429nRQrCH", "utf8", "2458340hywqXL", "3549uEbiPs", "split", "2267814MzIjqE"];
  __STRING_ARRAY__ = function () {
    return _0x4d65d5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QCAoGa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 473;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCAoGa, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1BShOqi") / 1 * (-parseInt("607664oKNjIT") / 2) + -parseInt("999429nRQrCH") / 3 + -parseInt("930408rOOdNf") / 4 * (-parseInt("10TcBNFk") / 5) + -parseInt("2267814MzIjqE") / 6 + -parseInt("3549uEbiPs") / 7 * (-parseInt("5464gjmlxX") / 8) + -parseInt("9rXpcQF") / 9 * (-parseInt("2458340hywqXL") / 10) + -parseInt("141053QueZqk") / 11 * (-parseInt("204XZVdrY") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 260366);
function main(input) {
  let line = input["split"](/\r?\n/g);
  let arr = line[0]["split"](" ");
  const N = parseInt(arr[0]);
  const K = parseInt(arr[1]);
  let cnt = 1;
  while (K ** cnt < N) {
    cnt++;
  }
  console.log(cnt);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
