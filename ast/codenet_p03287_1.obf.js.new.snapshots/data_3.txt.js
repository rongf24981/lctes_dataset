function __DECODE_0__(KOsEDO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 163;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KOsEDO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("178847fpLttJ") / 1 + parseInt("2ZUdOOB") / 2 * (parseInt("2061219loofnx") / 3) + parseInt("101204JQHEeq") / 4 * (parseInt("190JftjaA") / 5) + -parseInt("42DVOggh") / 6 * (parseInt("166803GIDHdj") / 7) + -parseInt("4568088ZwxaZp") / 8 + parseInt("4843791tvERjr") / 9 + -parseInt("11316080LzvyzJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 496135);
function Main(s) {
  s = s["split"]("\n");
  var n = s[0]["split"](" ")["map"](a => +a);
  var m = n[1];
  n = n[0];
  var a = s[1]["split"](" ")["map"](a => +a);
  var ans = 0;
  var b = {};
  var t = 0;
  for (var i = 0; i < n; i++) {
    t = (t + a[i]) % m;
    if (b[t]) {
      b[t]++;
    } else {
      b[t] = 1;
    }
  }
  for (i in b) {
    i = +i;
    if (i === 0) {
      ans += b[i] * (b[i] + 1) / 2;
    } else if (b[i] > 1) {
      ans += b[i] * (b[i] - 1) / 2;
    }
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x12e66a = ["190JftjaA", "readFileSync", "178847fpLttJ", "utf8", "166803GIDHdj", "11316080LzvyzJ", "4568088ZwxaZp", "4843791tvERjr", "2061219loofnx", "2ZUdOOB", "map", "log", "split", "42DVOggh", "/dev/stdin", "101204JQHEeq"];
  __STRING_ARRAY__ = function () {
    return _0x12e66a;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
