(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1177577BZcBGl") / 1 + -parseInt("1892906vtRpHo") / 2 + -parseInt("3ZvMxaJ") / 3 * (parseInt("4515328RZuewi") / 4) + -parseInt("2164975mkIKQs") / 5 + parseInt("4628100iopUww") / 6 + -parseInt("9287194bYidev") / 7 * (-parseInt("8RJbujC") / 8) + parseInt("20804472PKFzmX") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 723843);
function Main(input) {
  input = input["split"]("\n");
  const N = input[0]["trim"]();
  const values = input[1]["split"](" ");
  for (let i = 0; i < N; i++) {
    if (values[i] == 0) {
      console["log"]("0");
      return;
    }
  }
  let result = BigInt(1);
  for (let i = 0; i < N; i++) {
    const nextVal = BigInt(values[i]);
    if (nextVal > BigInt(1000000000000000000)) {
      console["log"]("-1");
      return;
    }
    result = result * nextVal;
    if (result > BigInt(1000000000000000000)) {
      console.log("-1");
      return;
    }
  }
  console["log"](Number(result)["toString"]());
}
function __STRING_ARRAY__() {
  const _0x4d7b17 = ["/dev/stdin", "trim", "9287194bYidev", "4515328RZuewi", "toString", "8RJbujC", "3ZvMxaJ", "utf8", "20804472PKFzmX", "1892906vtRpHo", "split", "log", "2164975mkIKQs", "readFileSync", "1177577BZcBGl", "4628100iopUww"];
  __STRING_ARRAY__ = function () {
    return _0x4d7b17;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xzjkNa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xzjkNa, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
