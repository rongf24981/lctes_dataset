function __STRING_ARRAY__() {
  const _0x9970bd = ["10zzKEUG", "2034856ANepLA", "969270IZhnGP", "760980bxUbIl", "89048UANctP", "21mOGYyW", "479344OQBYdT", "utf8", "/dev/stdin", "map", "split", "290uvRhhy", "sort", "210783TLlfTS", "readFileSync", "450783bhTdRj", "log"];
  __STRING_ARRAY__ = function () {
    return _0x9970bd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TnVrKC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TnVrKC, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("89048UANctP") / 1 + -parseInt("10zzKEUG") / 2 * (parseInt("210783TLlfTS") / 3) + -parseInt("2034856ANepLA") / 4 + -parseInt("760980bxUbIl") / 5 + -parseInt("969270IZhnGP") / 6 + parseInt("21mOGYyW") / 7 * (parseInt("479344OQBYdT") / 8) + parseInt("450783bhTdRj") / 9 * (parseInt("290uvRhhy") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547565);
const main = input => {
  const data = input["split"](/\n/);
  const num = data[0];
  const hoge = data[1]["split"](/\s/)["map"](a => parseInt(a, 10))["sort"]((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
  var res = 0;
  for (i = 0; i < num; i++) {
    res += hoge[i * 2 + 1];
  }
  console["log"](res);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
