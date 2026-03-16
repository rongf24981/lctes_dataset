function __DECODE_0__(YivjfS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 255;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YivjfS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("391065oPgEwV") / 1 + parseInt("2926064gLjYpd") / 2 + -parseInt("1731957KFbQdJ") / 3 + parseInt("200ETrfou") / 4 * (parseInt("77200oBmmyN") / 5) + parseInt("2080182VnYXYo") / 6 + parseInt("4351438GiaiIb") / 7 + -parseInt("10973888mPciqT") / 8 * (parseInt("9YAXlfm") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 863243);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
function __STRING_ARRAY__() {
  var _0x471cc0 = ["map", "/dev/stdin", "9YAXlfm", "2926064gLjYpd", "2080182VnYXYo", "readFileSync", "10973888mPciqT", "log", "77200oBmmyN", "push", "391065oPgEwV", "4351438GiaiIb", "200ETrfou", "utf8", "split", "1731957KFbQdJ"];
  __STRING_ARRAY__ = function () {
    return _0x471cc0;
  };
  return __STRING_ARRAY__();
}
var n = Arr.shift() - 0;
for (var i = 0; i < n; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  var s = arr[0];
  var g = arr[1];
  var ans = [s];
  var plus = 1;
  if (s < g) {
    do {
      s++;
      ans["push"](s);
    } while (s != g);
  } else if (s > g && s <= 5) {
    do {
      s--;
      ans["push"](s);
    } while (s != g);
  } else if (s > g && s >= 6 && g >= 6) {
    do {
      s++;
      if (s == 10) {
        s = 5;
      }
      ans.push(s);
    } while (s != g);
  } else if (s > g && s >= 6 && g <= 5) {
    do {
      s += plus;
      if (s == 10) {
        s = 5;
        plus = -1;
      }
      ;
      ans.push(s);
    } while (s != g);
  }
  console["log"](ans.join(" "));
}
