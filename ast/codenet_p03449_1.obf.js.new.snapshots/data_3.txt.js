function __DECODE_0__(CFDNyx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 446;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CFDNyx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("376505LVSQEo") / 1 + parseInt("3399548hYoVrw") / 2 + -parseInt("6pHPtSf") / 3 * (-parseInt("2938888kziXPs") / 4) + -parseInt("281600TnvdAl") / 5 * (parseInt("48kANodA") / 6) + -parseInt("4732077TPfRrD") / 7 + -parseInt("6450296qcVQji") / 8 + parseInt("856584wfVJIY") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 955031);
function Main(input) {
  const setting = input["trim"]()["split"]("\n");
  const process_sum = setting[0] - 0;
  const up = setting[1].split(" ");
  const down = setting[2]["split"](" ");
  let answer = 0;
  for (let process_up = 0; process_up < process_sum; process_up++) {
    let process_down = process_sum - process_up - 1;
    let candies = 0;
    for (let i = 0; i <= process_up; i++) {
      candies += parseInt(up[i]);
    }
    for (let i = 0; i <= process_down; i++) {
      candies += parseInt(down[process_up + i]);
    }
    if (answer < candies) {
      answer = candies;
    }
  }
  console.log(answer);
}
function __STRING_ARRAY__() {
  const _0x497ca5 = ["856584wfVJIY", "trim", "2938888kziXPs", "281600TnvdAl", "6450296qcVQji", "/dev/stdin", "4732077TPfRrD", "utf8", "readFileSync", "split", "376505LVSQEo", "6pHPtSf", "3399548hYoVrw", "48kANodA"];
  __STRING_ARRAY__ = function () {
    return _0x497ca5;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
