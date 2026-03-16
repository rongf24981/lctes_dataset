(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("367175KUwxWU") / 1 + parseInt("345474bHdLWB") / 2 + parseInt("377964avahfm") / 3 + parseInt("1441804xoMDXT") / 4 + -parseInt("8725cIdGpn") / 5 * (parseInt("366CYwlxv") / 6) + parseInt("2618014ODaQZN") / 7 + -parseInt("2812280ufXDAJ") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 208023);
function __STRING_ARRAY__() {
  const _0x109196 = ["345474bHdLWB", "abs", "readFileSync", "split", "/dev/stdin", "YES", "366CYwlxv", "1441804xoMDXT", "log", "2618014ODaQZN", "367175KUwxWU", "map", "utf8", "377964avahfm", "2812280ufXDAJ", "trim", "8725cIdGpn"];
  __STRING_ARRAY__ = function () {
    return _0x109196;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const arr = input["trim"]()["split"]("\n");
  const AV = arr[0].split(" ")["map"](Number);
  const BW = arr[1]["split"](" ").map(Number);
  const T = Number(arr[2]);
  if (Math["abs"](AV[0] - BW[0]) < T * (AV[1] - BW[1])) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
function __DECODE_0__(eqvUVe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 228;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eqvUVe, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
