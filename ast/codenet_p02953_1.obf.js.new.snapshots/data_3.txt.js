function __STRING_ARRAY__() {
  const _0x302bb2 = ["217716bQFcTv", "8lnqlsO", "Yes", "110jSSyAl", "2776100mUoiyL", "log", "split", "10705437SHMUDL", "9769753CkzwkC", "1636681QswKMQ", "utf8", "1050KLxBoX", "7632340AKanrA", "readFileSync", "/dev/stdin", "215AloEnA"];
  __STRING_ARRAY__ = function () {
    return _0x302bb2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zbkqyZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 396;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zbkqyZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1636681QswKMQ") / 1 + parseInt("110jSSyAl") / 2 * (-parseInt("1050KLxBoX") / 3) + parseInt("2776100mUoiyL") / 4 + parseInt("215AloEnA") / 5 * (-parseInt("217716bQFcTv") / 6) + parseInt("9769753CkzwkC") / 7 * (parseInt("8lnqlsO") / 8) + parseInt("10705437SHMUDL") / 9 + parseInt("7632340AKanrA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 826202);
function Main(args) {
  const firstRow = args.split("\n")[0];
  const row = args["split"]("\n")[1]["split"](" ");
  for (var i = row.length - 1; i > 0; i--) {
    if (row[i - 1] > row[i]) {
      row[i - 1] -= 1;
    }
    if (row[i - 1] > row[i]) {
      return console["log"]("No");
    }
  }
  console["log"]("Yes");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
