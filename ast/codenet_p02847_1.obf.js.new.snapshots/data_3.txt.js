function __STRING_ARRAY__() {
  var _0x2e9072 = ["1722156HSMsmv", "4670533DCbiEs", "949576IDuXlx", "TUE", "FRI", "19729701Tiudiq", "92XxnWCr", "/dev/stdin", "105959eXTngb", "40155KbBDQJ", "1674339wHaTDj", "log", "10NhByPS", "WED", "2CfzmeM"];
  __STRING_ARRAY__ = function () {
    return _0x2e9072;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("105959eXTngb") / 1 + -parseInt("2CfzmeM") / 2 * (parseInt("1674339wHaTDj") / 3) + parseInt("92XxnWCr") / 4 * (-parseInt("40155KbBDQJ") / 5) + -parseInt("1722156HSMsmv") / 6 + -parseInt("4670533DCbiEs") / 7 + parseInt("949576IDuXlx") / 8 + parseInt("19729701Tiudiq") / 9 * (parseInt("10NhByPS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 507856);
function Main(input) {
  var result;
  switch (input) {
    case "SUN":
      result = "7";
      break;
    case "MON":
      result = "6";
      break;
    case "TUE":
      result = "5";
      break;
    case "WED":
      result = "4";
      break;
    case "THU":
      result = "3";
      break;
    case "FRI":
      result = "2";
      break;
    case "SAT":
      result = "1";
      break;
  }
  console["log"](result);
}
function __DECODE_0__(rendgq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 448;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rendgq, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
