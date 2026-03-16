(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("257625ydxfpE") / 1 + parseInt("644EPXXUv") / 2 * (-parseInt("4998SnUDTF") / 3) + -parseInt("12TpzFkg") / 4 * (parseInt("361250FyovVF") / 5) + -parseInt("1855344TjkCIm") / 6 + -parseInt("698831Jccbvo") / 7 + parseInt("4203528CyPCQX") / 8 + parseInt("10531728OZFpXX") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 275749);
function Main(input) {
  const arr = input["split"]("");
  if (arr["length"] % 2 !== 0) {
    console["log"]("No");
    return;
  }
  const a = arr["slice"](0, arr["length"] / 2);
  const b = arr["slice"](arr["length"] / 2, arr["length"]);
  if (a["join"]("") === b["reverse"]().map(mirror)["join"]("")) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
  function mirror(a) {
    switch (a) {
      case "b":
        return "d";
      case "d":
        return "b";
      case "p":
        return "q";
      case "q":
        return "p";
    }
  }
}
function __DECODE_0__(SCXuUk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 252;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SCXuUk, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x4baf8f = ["join", "slice", "utf8", "257625ydxfpE", "698831Jccbvo", "644EPXXUv", "split", "reverse", "12TpzFkg", "10531728OZFpXX", "log", "readFileSync", "/dev/stdin", "4998SnUDTF", "length", "361250FyovVF", "4203528CyPCQX", "1855344TjkCIm"];
  __STRING_ARRAY__ = function () {
    return _0x4baf8f;
  };
  return __STRING_ARRAY__();
}
