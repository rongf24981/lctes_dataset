function __DECODE_0__(mhqXKk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mhqXKk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2LLTgYh") / 1 * (-parseInt("1053288oMpBwu") / 2) + parseInt("1544604gTnaVF") / 3 * (parseInt("4MwSUCa") / 4) + parseInt("5zuntCZ") / 5 * (-parseInt("9200652UCiehC") / 6) + parseInt("8465604fNQGFn") / 7 + -parseInt("2621888QBudAt") / 8 + parseInt("729585MafIPS") / 9 + -parseInt("1611770vcHGMo") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 836238);
function Main(input) {
  input = input.split("\n");
  input1 = input[0].split(" ");
  const N = parseInt(input1[0]);
  const K = parseInt(input1[1]);
  const As = input[1]["split"](" ");
  var filtered = [];
  var results = [""];
  for (i = 0; i < K; i++) {
    for (j = 0; j < N; j++) {
      if (filtered["indexOf"](As[j]) != -1) {
        var id = filtered["indexOf"](As[j]);
        filtered = filtered.slice(0, id);
      } else {
        filtered["push"](As[j]);
      }
    }
    if (results.indexOf(filtered["join"](" ")) == -1) {
      results["push"](filtered["join"](" "));
    } else {
      break;
    }
  }
  const roopstart = results.indexOf(filtered["join"](" "));
  if (roopstart == K) {
    console.log(results[roopstart]);
  } else {
    const roopId = (K - roopstart) % (results["length"] - roopstart);
    console["log"](results[roopstart + roopId]);
  }
}
function __STRING_ARRAY__() {
  const _0xb01d61 = ["2LLTgYh", "log", "9200652UCiehC", "5zuntCZ", "indexOf", "join", "push", "split", "1544604gTnaVF", "/dev/stdin", "729585MafIPS", "8465604fNQGFn", "4MwSUCa", "readFileSync", "1611770vcHGMo", "length", "2621888QBudAt", "1053288oMpBwu"];
  __STRING_ARRAY__ = function () {
    return _0xb01d61;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
