(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("24197FLrkCp") / 1 * (-parseInt("72fJZDxT") / 2) + parseInt("70458wYmdIw") / 3 + -parseInt("1370048COQRZF") / 4 + -parseInt("726450vWWJrZ") / 5 + -parseInt("5682210dxmAzE") / 6 * (parseInt("7cChLAZ") / 7) + -parseInt("5558680XCQSCS") / 8 * (-parseInt("9HgNoaZ") / 9) + parseInt("130LHJMFg") / 10 * (parseInt("400796fqNfdS") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 628244);
function __STRING_ARRAY__() {
  const _0x2f484b = ["7cChLAZ", "400796fqNfdS", "9HgNoaZ", "130LHJMFg", "utf8", "72fJZDxT", "24197FLrkCp", "1370048COQRZF", "726450vWWJrZ", "readFileSync", "trim", "5558680XCQSCS", "5682210dxmAzE", "/dev/stdin", "70458wYmdIw"];
  __STRING_ARRAY__ = function () {
    return _0x2f484b;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const lines = input.split("\n");
let K = lines[0]["trim"]() - 0;
let ans = "";
for (let i = 0; i < K; i++) {
  ans += "ACL";
}
function __DECODE_0__(QiMVDa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 216;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QiMVDa, key);
}
console.log(ans);
