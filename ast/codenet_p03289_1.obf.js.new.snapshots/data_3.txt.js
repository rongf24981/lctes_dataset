(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("58murczf") / 1 * (-parseInt("7086rDvExb") / 2) + -parseInt("277737DkKJfR") / 3 + parseInt("20lgnSWw") / 4 * (parseInt("45125HYXEYn") / 5) + -parseInt("12YMEQVA") / 6 * (parseInt("153251SZDzoZ") / 7) + -parseInt("853744ZlPVmp") / 8 * (-parseInt("18RYGEWV") / 9) + parseInt("164700dBmwmn") / 10 * (parseInt("99URLyIL") / 11) + parseInt("24AbeJwD") / 12 * (parseInt("381628djSjmd") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 123644);
function main(input) {
  input = input["trim"]();
  var arr = input["split"]("")["map"](n => n);
  var ans = 0;
  if (arr[0] == "A") {
    ans++;
  }
  var temp = 0;
  var memo = 0;
  for (var i = 2; i < arr["length"] - 1; i++) {
    if (arr[i] == "C") {
      temp++;
      memo = i;
    }
  }
  if (temp == 1) {
    ans++;
  }
  if (ans == 2) {
    arr["splice"](0, 1);
    arr["splice"](memo - 1, 1);
    if (/A-Z/["test"](arr) == false) {
      ans++;
    }
    if (ans == 3) {
      console["log"]("AC");
    } else {
      console["log"]("WA");
    }
  } else {
    console["log"]("WA");
  }
}
function __STRING_ARRAY__() {
  var _0x3a90f9 = ["153251SZDzoZ", "trim", "utf8", "18RYGEWV", "853744ZlPVmp", "test", "length", "map", "split", "24AbeJwD", "log", "45125HYXEYn", "12YMEQVA", "58murczf", "splice", "20lgnSWw", "7086rDvExb", "277737DkKJfR", "381628djSjmd", "99URLyIL", "readFileSync", "164700dBmwmn"];
  __STRING_ARRAY__ = function () {
    return _0x3a90f9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rRIvEn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rRIvEn, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
