(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("40759ZSZpfI") / 1 * (parseInt("4pJFAgh") / 2) + -parseInt("442899JLXFPx") / 3 * (parseInt("4bsoxOS") / 4) + parseInt("197485dlUQEc") / 5 * (parseInt("6qOIGQa") / 6) + parseInt("3112326lapUDa") / 7 + parseInt("3183600MUnscp") / 8 + -parseInt("9GynOGU") / 9 * (-parseInt("3870350gdicYm") / 10) + parseInt("11aOKwem") / 11 * (-parseInt("9590208YJrcpd") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 240765);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [w, h, c] = input["trim"]().split(" ");
function __STRING_ARRAY__() {
  var _0x18a844 = ["/dev/stdin", "197485dlUQEc", "9GynOGU", "3870350gdicYm", "readFileSync", "4pJFAgh", "442899JLXFPx", "repeat", "11aOKwem", "3112326lapUDa", "4bsoxOS", "6qOIGQa", "push", "9590208YJrcpd", "40759ZSZpfI", "3183600MUnscp", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x18a844;
  };
  return __STRING_ARRAY__();
}
w = w - 0;
h = h - 0;
var ans = [];
ans.push("+" + "-"["repeat"](w - 2) + "+");
for (var i = 0; i < h - 2; i++) {
  ans.push("|" + ".".repeat(w - 2) + "|");
}
function __DECODE_0__(vUtjRZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 146;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vUtjRZ, key);
}
ans["push"]("+" + "-"["repeat"](w - 2) + "+");
ans[Math.floor(h / 2)] = "|" + "."["repeat"]((w - 3) / 2) + c + "."["repeat"]((w - 3) / 2) + "|";
console.log(ans.join("\n")["trim"]());
