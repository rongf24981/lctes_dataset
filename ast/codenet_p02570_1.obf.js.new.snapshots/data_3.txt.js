(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1165586LgWFNg") / 1 * (parseInt("2PeypZG") / 2) + -parseInt("2608707jstJvJ") / 3 + parseInt("3973552SJEWgE") / 4 * (parseInt("5XatKNl") / 5) + -parseInt("6209508gYOJrk") / 6 + -parseInt("6628006VTWwEd") / 7 + -parseInt("48UgbNQP") / 8 * (-parseInt("1155699oxDKwV") / 9) + parseInt("6164870puBsAi") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 694582);
function Main(raw_input) {
  const [line] = raw_input.split("\n");
  const [d, t, s] = toNumArray(line);
  let isYes = t * s >= d;
  console["log"](isYes ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function toNumArray(str, delimitor = " ") {
  return str["split"](delimitor)["map"](s => parseInt(s, 10));
}
function toBitIntArray(str, delimitor = " ") {
  return str["split"](delimitor).map(s => BigInt(s));
}
function __DECODE_0__(oQaqjU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 319;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oQaqjU, key);
}
function __STRING_ARRAY__() {
  const _0x277260 = ["48UgbNQP", "5XatKNl", "split", "6209508gYOJrk", "reduce", "Yes", "utf8", "3973552SJEWgE", "log", "2608707jstJvJ", "6164870puBsAi", "1155699oxDKwV", "map", "1165586LgWFNg", "2PeypZG", "6628006VTWwEd"];
  __STRING_ARRAY__ = function () {
    return _0x277260;
  };
  return __STRING_ARRAY__();
}
function toMatrix(array, delimitor = " ") {
  const result = array["map"](v => v["split"](delimitor));
  return result;
}
function sum(n) {
  return n["reduce"]((a, b) => a + b);
}
