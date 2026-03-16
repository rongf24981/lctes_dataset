(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("973450CvsChg") / 1 + parseInt("1866610bijEBY") / 2 + parseInt("5565vLsSAm") / 3 * (-parseInt("2020hqGZow") / 4) + parseInt("4694080dWQKJu") / 5 + parseInt("1914228blySXZ") / 6 + parseInt("5573414VxAdkx") / 7 + -parseInt("2494736IPoClE") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 765294);
function __STRING_ARRAY__() {
  const _0x2c6dea = ["1914228blySXZ", "length", "1866610bijEBY", "utf8", "indexOf", "2494736IPoClE", "5573414VxAdkx", "/dev/stdin", "log", "2020hqGZow", "split", "readFileSync", "5565vLsSAm", "4694080dWQKJu", "973450CvsChg"];
  __STRING_ARRAY__ = function () {
    return _0x2c6dea;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  let target = parseInt(input[0].split(" ")[0]);
  let zerocheck = parseInt(input[0].split(" ")[1]);
  if (zerocheck == 0) {
    console["log"](target);
  } else {
    let str = input[1]["split"](" ");
    for (let i = 0; i < str["length"]; i++) {
      let num = parseInt(str[i]);
      str[i] = target - num;
    }
    for (let ite = 1; ite <= 100; ite++) {
      const isp = str["indexOf"](ite);
      const isn = str.indexOf(-ite);
      if (isp == -1) {
        console["log"](target - ite);
        break;
      }
      if (isn == -1) {
        console.log(target + ite);
        break;
      }
    }
  }
}
function __DECODE_0__(OpedKx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 308;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OpedKx, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
