function __DECODE_0__(jNnVzi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 435;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jNnVzi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("578108hzZLDu") / 1 + parseInt("1508038kqybrh") / 2 * (-parseInt("3dNcClE") / 3) + -parseInt("43296KCWKjD") / 4 + parseInt("32835dvPPHx") / 5 * (parseInt("150XtNgMv") / 6) + -parseInt("119IugNdf") / 7 * (parseInt("230288gdWyAe") / 8) + -parseInt("4491450IILEtv") / 9 + -parseInt("26165480TTQaBO") / 10 * (-parseInt("11HMfsNn") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 449360);
function Main(input) {
  input = input["split"]("\n");
  if (input[input["length"] - 1] === "") {
    input["pop"]();
  }
  const N = input[0]["split"](" ")[0] - 0;
  const M = input[0]["split"](" ")[1] - 0;
  const S = input[1];
  var cur = S["length"] - 1;
  var ret = [];
  while (cur > 0) {
    if (cur <= M) {
      ret["unshift"](cur);
      break;
    }
    for (var i = 0; i < M; i++) {
      if (S[cur - M + i] === "0") {
        ret["unshift"](M - i);
        cur = cur - M + i;
        break;
      }
      if (i === M - 1) {
        console["log"](-1);
        return;
      }
    }
  }
  console["log"](ret["join"](" "));
}
function __STRING_ARRAY__() {
  const _0x51234c = ["11HMfsNn", "1508038kqybrh", "578108hzZLDu", "pop", "43296KCWKjD", "length", "join", "230288gdWyAe", "119IugNdf", "3dNcClE", "/dev/stdin", "4491450IILEtv", "150XtNgMv", "split", "utf8", "unshift", "26165480TTQaBO", "32835dvPPHx", "log"];
  __STRING_ARRAY__ = function () {
    return _0x51234c;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
