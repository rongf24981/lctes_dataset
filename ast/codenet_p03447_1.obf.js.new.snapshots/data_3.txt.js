function __STRING_ARRAY__() {
  const _0x1e5074 = ["544SecmNU", "join", "13UTdHTI", "split", "body", "44XrXooi", "6AiFhgX", "shift", "1398762gOloHC", "append", "\n1234\n150\n100\n", "<textarea>", "concat", "3571GVKdem", "<br>", "10boCNRJ", "99YnekDg", "stringify", "311628qHKBBQ", "undefined", "message", "readFileSync", "appendTo", "267095wkTllz", "map", "<form>", "stack", "string", "534CclmTr", "1780AUKKgl", "6342JmjhnF", "/dev/stdin", "8892170XMUySt", "slice"];
  __STRING_ARRAY__ = function () {
    return _0x1e5074;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("3571GVKdem") / 1 * (parseInt("44XrXooi") / 2) + -parseInt("534CclmTr") / 3 * (-parseInt("1780AUKKgl") / 4) + -parseInt("267095wkTllz") / 5 * (parseInt("6AiFhgX") / 6) + -parseInt("6342JmjhnF") / 7 * (-parseInt("544SecmNU") / 8) + parseInt("1398762gOloHC") / 9 * (-parseInt("10boCNRJ") / 10) + -parseInt("99YnekDg") / 11 * (parseInt("311628qHKBBQ") / 12) + parseInt("13UTdHTI") / 13 * (parseInt("8892170XMUySt") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 254853);
const BKRT = "\n";
const SPAC = " ";
function __DECODE_0__(VcEfCj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 117;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VcEfCj, key);
}
const NOSP = "";
function Main(input) {
  input = []["concat"](...input["split"](BKRT).map(a => a.split(SPAC)));
  const strShift = () => input["shift"]();
  const intShift = () => ~~input.shift();
  return ~~(intShift() - intShift()) % intShift();
}
((b, c, d) => "undefined" != typeof require ? console.log(Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"))) : [b = b["split"]("\n")["slice"](1, -1)["join"]("\n"), c = function () {
  try {
    return Main(b);
  } catch (f) {
    return f["stack"] || f["message"];
  }
}(), d = typeof c, "string" == d || (c = JSON["stringify"](c)), $("<form>")["append"]([[10, b], 0, [1, d], 0, [10, c]]["map"](f => $(f ? "<textarea>" : "<br>", f && {
  rows: f[0],
  cols: 40,
  text: f[1]
})))["appendTo"]("body")])("\n1234\n150\n100\n");
