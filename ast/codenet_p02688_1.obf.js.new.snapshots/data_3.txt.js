(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("311320TxTNCE") / 1 + parseInt("625344oiePrp") / 2 + -parseInt("15ffhZhM") / 3 * (parseInt("443236NnfERo") / 4) + -parseInt("864840pZyaxl") / 5 + parseInt("1627164gevjHZ") / 6 + -parseInt("889hYfENA") / 7 * (-parseInt("12808GnBHDP") / 8) + -parseInt("424242xzmADX") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 324362);
function __STRING_ARRAY__() {
  const _0x241e0e = ["1627164gevjHZ", "map", "length", "split", "311320TxTNCE", "625344oiePrp", "15ffhZhM", "864840pZyaxl", "443236NnfERo", "readFileSync", "12808GnBHDP", "indexOf", "log", "889hYfENA", "push", "424242xzmADX", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x241e0e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HLrbcm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 441;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HLrbcm, key);
}
function Main(input) {
  tmp = input["split"]("\n");
  tmp2 = tmp[0].split(" ");
  var n = parseInt(tmp2[0], 10);
  var k = parseInt(tmp2[1], 10);
  tmp.shift();
  arry = tmp.slice();
  list = [];
  count = 0;
  tmp3 = [];
  for (let i = 0; i < arry["length"]; i++) {
    if (i % 2 !== 0) {
      arry[i] = arry[i]["split"](" ");
      tmp3 = arry[i]["map"](Number);
      for (let index = 0; index < tmp3["length"]; index++) {
        list["push"](tmp3[index]);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (list["indexOf"](i) >= 0) {} else {
      count += 1;
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
