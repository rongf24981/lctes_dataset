function __DECODE_0__(BsEQDA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BsEQDA, key);
}
function __STRING_ARRAY__() {
  var _0x455b1d = ["5343600wRghBS", "13376TiFDpV", "729XtPvRO", "380fgIWIE", "utf8", "split", "10667430RjBNmx", "readFileSync", "80FWSmpO", "YES", "78296LglFJq", "605704DaOImM", "84KFlcMu", "82577wbekRz", "1514650bIxMZQ", "log"];
  __STRING_ARRAY__ = function () {
    return _0x455b1d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1514650bIxMZQ") / 1 + parseInt("13376TiFDpV") / 2 * (-parseInt("729XtPvRO") / 3) + parseInt("78296LglFJq") / 4 * (parseInt("380fgIWIE") / 5) + -parseInt("5343600wRghBS") / 6 + -parseInt("84KFlcMu") / 7 * (parseInt("605704DaOImM") / 8) + parseInt("10667430RjBNmx") / 9 + parseInt("80FWSmpO") / 10 * (parseInt("82577wbekRz") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 823260);
function Main(input) {
  tmp = input["split"](" ");
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  for (var i = 0; i < 4; i++) {
    if (tmp[i] == "1") {
      a = 1;
    }
    if (tmp[i] == "9") {
      b = 1;
    }
    if (tmp[i] == "7") {
      c = 1;
    }
    if (tmp[i] == "4") {
      d = 1;
    }
  }
  if (a == 1 && b == 1 && c == 1 && d == 1) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
