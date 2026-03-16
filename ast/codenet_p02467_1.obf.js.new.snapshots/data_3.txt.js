function __STRING_ARRAY__() {
  var _0x5b0e7f = ["9809268gkYMSN", "utf8", "1434235ZqnPsA", "/dev/stdin", "2891OhbtsW", "856CPSjWr", "push", "172siXddS", "23510XgOThV", "sqrt", "join", "11nojfcq", "99AcHCeB", "readFileSync", "33342ZIqSGj", "567288FEYmFr", "83756DUzJsu", "split", "trim", "4BOwKLI"];
  __STRING_ARRAY__ = function () {
    return _0x5b0e7f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("4BOwKLI") / 1 * (parseInt("83756DUzJsu") / 2) + -parseInt("33342ZIqSGj") / 3 * (parseInt("172siXddS") / 4) + parseInt("1434235ZqnPsA") / 5 + -parseInt("567288FEYmFr") / 6 + -parseInt("2891OhbtsW") / 7 * (-parseInt("856CPSjWr") / 8) + -parseInt("99AcHCeB") / 9 * (parseInt("23510XgOThV") / 10) + -parseInt("11nojfcq") / 11 * (-parseInt("9809268gkYMSN") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 382654);
function __DECODE_0__(jmCvcK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 430;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jmCvcK, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n").map(function (x) {
    return x["split"](" ");
  });
  var n = parseInt(input[0][0], 10);
  var originalN = n;
  var v_ans = [];
  var start = 2;
  whole_loop: while (true) {
    for (var i = start; i <= Math["sqrt"](n); i++) {
      if (n % i === 0) {
        v_ans["push"](i);
        n /= i;
        start = i;
        continue whole_loop;
      }
    }
    v_ans.push(n);
    break;
  }
  console.log(originalN.toString() + ": " + v_ans["join"](" "));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
