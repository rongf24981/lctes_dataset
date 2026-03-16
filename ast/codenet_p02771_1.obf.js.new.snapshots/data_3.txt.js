function __STRING_ARRAY__() {
  var _0x165643 = ["utf8", "482335WZIeQH", "split", "138156iLQuIR", "1207704ZbSuvU", "8WMPgrE", "log", "26276XvPRHL", "/dev/stdin", "299201kEBPrS", "2825595fIkXoc", "175350vHkjuH", "18sMEYRz"];
  __STRING_ARRAY__ = function () {
    return _0x165643;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cvVRJU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cvVRJU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("175350vHkjuH") / 1 + parseInt("26276XvPRHL") / 2 + -parseInt("138156iLQuIR") / 3 * (parseInt("8WMPgrE") / 4) + parseInt("482335WZIeQH") / 5 + -parseInt("18sMEYRz") / 6 * (-parseInt("299201kEBPrS") / 7) + -parseInt("1207704ZbSuvU") / 8 + parseInt("2825595fIkXoc") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 133372);
const Main = input => {
  const tmp = input["split"](" ");
  var a = parseInt(tmp[0]);
  var b = parseInt(tmp[1]);
  var c = parseInt(tmp[2]);
  if (a === b && b !== c || b === c && c !== a || c === a && b !== c) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
