function __DECODE_0__(pgaNCL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 327;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pgaNCL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("726233rEFPIN") / 1 * (parseInt("4NekeQw") / 2) + parseInt("3683106FOhQcS") / 3 + -parseInt("3176bPCwLE") / 4 * (-parseInt("5695EXcdPl") / 5) + parseInt("3963636klGMHs") / 6 + parseInt("1711241sjbYDU") / 7 * (-parseInt("8UZWzuI") / 8) + -parseInt("14369085lJsZmA") / 9 + -parseInt("14374830llbUXu") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 966629);
function main(input) {
  const nums = input.split(" ");
  if (nums["indexOf"]("5") != -1) {
    nums.splice(nums["indexOf"]("5"), 1);
  }
  if (nums["indexOf"]("5") != -1) {
    nums["splice"](nums.indexOf("5"), 1);
  }
  if (nums["indexOf"]("7") != -1) {
    nums["splice"](nums["indexOf"]("7"), 1);
  }
  console["log"](nums[0] == null ? "YES" : "NO");
}
function __STRING_ARRAY__() {
  const _0x4a031f = ["3176bPCwLE", "splice", "4NekeQw", "3963636klGMHs", "readFileSync", "log", "14374830llbUXu", "indexOf", "3683106FOhQcS", "8UZWzuI", "14369085lJsZmA", "1711241sjbYDU", "YES", "726233rEFPIN", "5695EXcdPl", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x4a031f;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
