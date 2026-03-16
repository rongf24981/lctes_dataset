function __DECODE_0__(XCtCjo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 127;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XCtCjo, key);
}
function __STRING_ARRAY__() {
  const _0x5765c3 = ["log", "readFileSync", "5UWwXfK", "2727580wvfuGi", "10aloBSx", "920391JEPEUp", "772597bxlNrV", "9nRWdxd", "156974QzptCG", "362232hIqdDb", "720666TeXkDd", "365852hOTmXM", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5765c3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("5UWwXfK") / 1 * (parseInt("156974QzptCG") / 2) + parseInt("920391JEPEUp") / 3 + parseInt("365852hOTmXM") / 4 * (-parseInt("10aloBSx") / 5) + -parseInt("720666TeXkDd") / 6 + parseInt("772597bxlNrV") / 7 + parseInt("362232hIqdDb") / 8 + parseInt("9nRWdxd") / 9 * (-parseInt("2727580wvfuGi") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 279087);
function Main(input) {
  let t = input["split"]("\n")[0];
  let n;
  let a = new Array(n);
  let s = new Array(n);
  let x = 0;
  for (let i = 0; i < t; i++) {
    n = input["split"]("\n")[i * 3 + 1];
    a = input["split"]("\n")[i * 3 + 2].split(" ");
    s = input.split("\n")[i * 3 + 3]["split"]("");
    let tmp;
    for (let j = 0; j < n; j++) {
      tmp = x ^ a[j];
      if (s[j] == 0) {
        if (tmp == 0) {
          x = tmp;
        }
      } else {
        x = tmp;
      }
    }
    if (x == 0) {
      console["log"](0);
    } else {
      console["log"](1);
    }
    x = 0;
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
