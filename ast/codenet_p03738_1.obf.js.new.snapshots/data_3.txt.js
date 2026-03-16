(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1175786HRWSsz") / 1 + parseInt("842542hBChVU") / 2 + -parseInt("577197ALOedG") / 3 + -parseInt("4096876blGKHu") / 4 + -parseInt("533545dLjuWI") / 5 * (parseInt("42ZRXFcZ") / 6) + parseInt("3592694owxvLH") / 7 + parseInt("23609216XMQvSp") / 8 * (parseInt("9fCSLbd") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 746298);
function __DECODE_0__(bLscSU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 276;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bLscSU, key);
}
function rec(a, b) {
  if (a[0] > b[0]) {
    return "GREATER";
  } else if (a[0] < b[0]) {
    return "LESS";
  } else if (a["length"] == 1) {
    return "EQUAL";
  } else {
    return rec(a["slice"](1), b["slice"](1));
  }
}
function main(s) {
  s = s["split"]("\n");
  if (s[0]["length"] > s[1]["length"]) {
    console["log"]("GREATER");
  } else if (s[0]["length"] < s[1].length) {
    console["log"]("LESS");
  } else {
    console.log("%s", rec(s[0].slice(1), s[1]["slice"](1)));
  }
}
function __STRING_ARRAY__() {
  var _0x4bc78c = ["readFileSync", "4096876blGKHu", "LESS", "842542hBChVU", "3592694owxvLH", "/dev/stdin", "utf8", "slice", "533545dLjuWI", "42ZRXFcZ", "23609216XMQvSp", "log", "1175786HRWSsz", "577197ALOedG", "GREATER", "EQUAL", "9fCSLbd", "split", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4bc78c;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
