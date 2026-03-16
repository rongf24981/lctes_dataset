function __STRING_ARRAY__() {
  var _0x1f4dc6 = ["1XjFjMN", "Wednesday", "6961240mLQyVP", "utf8", "7420lxlGWl", "Tuesday", "715714pLvoNi", "20744OOCgKd", "Friday", "2904156UTUmuq", "/dev/stdin", "map", "split", "Saturday", "getDay", "2634058pYbjto", "479040XeJTII", "replace", "shift", "6NozxqP", "readFileSync", "3072GdjTao"];
  __STRING_ARRAY__ = function () {
    return _0x1f4dc6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1XjFjMN") / 1 * (-parseInt("715714pLvoNi") / 2) + -parseInt("6NozxqP") / 3 * (-parseInt("20744OOCgKd") / 4) + -parseInt("7420lxlGWl") / 5 * (parseInt("3072GdjTao") / 6) + parseInt("2634058pYbjto") / 7 + parseInt("479040XeJTII") / 8 + -parseInt("2904156UTUmuq") / 9 + parseInt("6961240mLQyVP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 418035);
(function (input) {
  var p = input["replace"](/\n$/, "")["split"]("\n");
  while (true) {
    var a = p["shift"]()["split"](" ")["map"](Number);
    var m = a["shift"]();
    var d = a["shift"]();
    if (m === 0 && d === 0) {
      return;
    }
    var date = new Date(2004, m - 1, d);
    console.log(getWeekDay(date["getDay"]()));
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(xTcRqB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 370;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xTcRqB, key);
}
function getWeekDay(d) {
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return week[d];
}
