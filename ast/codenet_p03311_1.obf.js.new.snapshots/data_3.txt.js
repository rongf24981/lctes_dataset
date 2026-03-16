function __STRING_ARRAY__() {
  var _0x180e5f = ["concat", "/dev/stdin", "length", "257064spfNMA", "abs", "map", "816GFvZMA", "reduce", "log", "sort", "2955XEkGVf", "308ZhaWjc", "669919OUluTh", "1243368MTCdHh", "786NBZwFD", "pop", "11394rZCCwr", "18406400FfEigz", "7984809ueqLWr", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0x180e5f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("669919OUluTh") / 1 + parseInt("11394rZCCwr") / 2 * (parseInt("816GFvZMA") / 3) + parseInt("1243368MTCdHh") / 4 + parseInt("2955XEkGVf") / 5 * (parseInt("786NBZwFD") / 6) + parseInt("308ZhaWjc") / 7 * (-parseInt("257064spfNMA") / 8) + -parseInt("7984809ueqLWr") / 9 + parseInt("18406400FfEigz") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 807515);
function Main(input) {
  input = input["split"]("\n");
  if (input[input["length"] - 1] === "") {
    input["pop"]();
  }
  const N = input[0]["split"](" ")[0] - 0;
  var array = input[1]["split"](" ")["map"]((e, i) => {
    return e - i - 1;
  })["sort"]((a, b) => {
    return a - b;
  });
  console["log"](array["reduce"]((acc, cur) => {
    return acc + Math["abs"](cur - array[Math.floor(array["length"] / 2)]);
  }, 0));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __DECODE_0__(cPRQpj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 415;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cPRQpj, key);
}
function permutation(n, k) {
  var ret = [[]];
  var next;
  for (var i = 0; i < k; i++) {
    next = [];
    ret.forEach(e => {
      for (var k = 1; k <= n; k++) {
        if (!e.includes(k)) {
          next.push(e["concat"]([k]));
        }
      }
    });
    ret = next["concat"]([]);
  }
  return ret;
}
