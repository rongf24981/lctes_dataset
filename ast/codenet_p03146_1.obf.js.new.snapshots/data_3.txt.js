(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1281234bkLWOa") / 1 + parseInt("1622086CrllBq") / 2 + parseInt("1222848dEdyTz") / 3 + parseInt("116QHqvEE") / 4 * (-parseInt("192315UxnRsc") / 5) + parseInt("2514576zWARwR") / 6 + parseInt("7826413RkWauP") / 7 + parseInt("2943440REsCdh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 727083);
const collatz = n => {
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n = n * 3 + 1;
  }
  return n;
};
const main = stdin => {
  const input = stdin["trim"]()["split"]("\n");
  const s = parseInt(input[0]);
  if (s === 1 || s === 2 || s === 4) {
    console["log"](4);
    return;
  }
  let tmp = s;
  let first = 0;
  let second = 0;
  for (let i = 1;; i++) {
    if (tmp === 4 && first === 0) {
      first = i;
    } else if (tmp === 4 && first !== 0) {
      second = i;
      break;
    }
    tmp = collatz(tmp);
  }
  console["log"](second);
};
function __STRING_ARRAY__() {
  const _0x4be6fc = ["log", "7826413RkWauP", "split", "1622086CrllBq", "/dev/stdin", "trim", "1222848dEdyTz", "utf8", "116QHqvEE", "192315UxnRsc", "1281234bkLWOa", "2514576zWARwR", "2943440REsCdh", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4be6fc;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KvmSmP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 338;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KvmSmP, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
