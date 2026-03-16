function __DECODE_0__(iheDeq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iheDeq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("37405Wkdkyq") / 1 + -parseInt("583114EtqVgg") / 2 + parseInt("861018LAfLYn") / 3 + -parseInt("44984DwEyaW") / 4 * (-parseInt("90ncsfSc") / 5) + -parseInt("55230WAkVHz") / 6 + parseInt("2407741pQbIYl") / 7 * (parseInt("8oJiSru") / 8) + parseInt("126TpcjPV") / 9 * (-parseInt("269710IIfGsZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 192446);
function Main(input) {
  var str = input;
  var tmp = str["split"](" ")["map"](Number);
  if (tmp[0] == tmp[1] && tmp[1] == tmp[2]) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x5d0eaa = ["log", "861018LAfLYn", "583114EtqVgg", "90ncsfSc", "readFileSync", "269710IIfGsZ", "44984DwEyaW", "55230WAkVHz", "map", "split", "8oJiSru", "2407741pQbIYl", "utf8", "/dev/stdin", "Yes", "37405Wkdkyq", "126TpcjPV"];
  __STRING_ARRAY__ = function () {
    return _0x5d0eaa;
  };
  return __STRING_ARRAY__();
}
