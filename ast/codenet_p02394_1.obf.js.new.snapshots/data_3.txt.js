(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("875131jRAivb") / 1 * (parseInt("2LDeeVl") / 2) + -parseInt("341283XdiVph") / 3 * (parseInt("52CJckQl") / 4) + parseInt("7672680PkGJQL") / 5 + parseInt("3580350nEvqYa") / 6 * (-parseInt("7teIqqi") / 7) + parseInt("243448krDAfh") / 8 * (-parseInt("189vRRXmQ") / 9) + parseInt("13744970BVOEEI") / 10 + parseInt("17382431YyQTFg") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 899454);
function __STRING_ARRAY__() {
  const _0x329d97 = ["875131jRAivb", "utf8", "log", "341283XdiVph", "readFileSync", "7teIqqi", "13744970BVOEEI", "7672680PkGJQL", "189vRRXmQ", "/dev/stdin", "52CJckQl", "map", "2LDeeVl", "3580350nEvqYa", "17382431YyQTFg", "Yes", "243448krDAfh"];
  __STRING_ARRAY__ = function () {
    return _0x329d97;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  let numarray = input.split(" ")["map"](Number);
  let W;
  let H;
  let x;
  let y;
  let r;
  W = numarray[0];
  H = numarray[1];
  x = numarray[2];
  y = numarray[3];
  r = numarray[4];
  if (x < r || y < r || x + r > W || y + r > H) {
    console["log"]("No");
  } else {
    console.log("Yes");
  }
}
function __DECODE_0__(GVIwPz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 467;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GVIwPz, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
