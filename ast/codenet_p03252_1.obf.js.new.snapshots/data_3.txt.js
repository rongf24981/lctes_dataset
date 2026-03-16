function __DECODE_0__(GZqMNP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GZqMNP, key);
}
function __STRING_ARRAY__() {
  var _0xe905f1 = ["26831976uWLdEL", "312250MwCVJS", "Yes", "10014IowOqD", "substr", "value", "split", "1091929pmCzMU", "length", "5GxJAbm", "8ZLHSNa", "11223288XFSxlQ", "2mDyFIr", "77TpzEJq", "1890AyqXLX", "3307983zCrzoU", "4355044egXvMp"];
  __STRING_ARRAY__ = function () {
    return _0xe905f1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1091929pmCzMU") / 1 + -parseInt("2mDyFIr") / 2 * (-parseInt("3307983zCrzoU") / 3) + parseInt("4355044egXvMp") / 4 * (-parseInt("5GxJAbm") / 5) + -parseInt("10014IowOqD") / 6 * (-parseInt("1890AyqXLX") / 7) + -parseInt("8ZLHSNa") / 8 * (-parseInt("11223288XFSxlQ") / 9) + parseInt("312250MwCVJS") / 10 * (parseInt("77TpzEJq") / 11) + -parseInt("26831976uWLdEL") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 786068);
function Main(input) {
  input = input["split"]("\n");
  var S = input[0];
  var T = input[1];
  var ans = "Yes";
  while (T["length"] != 0) {
    for (i = 1; i < T["length"]; i++) {
      if (T.substr(0, 1) == T["substr"](i, 1)) {
        if (S["substr"](0, 1) != S["substr"](i, 1)) {
          ans = "No";
          break;
        }
      }
      if (S["substr"](0, 1) == S["substr"](i, 1)) {
        if (T["substr"](0, 1) != T.substr(i, 1)) {
          ans = "No";
          break;
        }
      }
    }
    if (ans == "No") {
      break;
    }
    S = S["substr"](1);
    T = T["substr"](1);
  }
  console.log("%s", ans);
}
function debug() {
  var input = document.getElementById("input")["value"];
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
