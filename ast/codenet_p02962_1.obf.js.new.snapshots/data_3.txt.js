function __DECODE_0__(zHGyPj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 285;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zHGyPj, key);
}
function __STRING_ARRAY__() {
  const _0x4b6b41 = ["log", "slice", "length", "readFileSync", "2189901RRnKhk", "2qEoLdk", "1458656VDTFYv", "push", "18ZrWpCS", "117858MngWvE", "6bYGsfE", "33fRaVHK", "indexOf", "5032500XJZLzD", "utf8", "2899200ygCSus", "277284fbJujb", "/dev/stdin", "split", "7086893qRmAtZ"];
  __STRING_ARRAY__ = function () {
    return _0x4b6b41;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("2qEoLdk") / 1 * (-parseInt("117858MngWvE") / 2) + parseInt("33fRaVHK") / 3 * (parseInt("277284fbJujb") / 4) + -parseInt("2899200ygCSus") / 5 + -parseInt("6bYGsfE") / 6 * (parseInt("2189901RRnKhk") / 7) + -parseInt("1458656VDTFYv") / 8 * (parseInt("18ZrWpCS") / 9) + parseInt("5032500XJZLzD") / 10 + parseInt("7086893qRmAtZ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 534839);
function Main(input) {
  input = input["split"]("\n");
  const s = input[0];
  const t = input[1];
  const match = [];
  for (i = 0; i < s["length"]; i++) {
    if ((s + t)["slice"](i, i + t["length"]) == t) {
      match["push"](true);
    } else {
      match["push"](false);
    }
  }
  max = 0;
  for (i = 0; i < s["length"]; i++) {
    isInf = false;
    now = i;
    getted = [];
    while (match[now]) {
      getted["push"](now);
      now = (now + t.length) % s["length"];
      if (getted["indexOf"](now) != -1) {
        isInf = true;
        break;
      }
    }
    if (isInf) {
      max = -1;
      break;
    } else if (max < getted["length"]) {
      max = getted["length"];
    }
  }
  console["log"](max);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
