function __DECODE_0__(UjonRX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UjonRX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1666315SpLVrQ") / 1 + parseInt("1998736btDIKF") / 2 + -parseInt("4663884tWgIKr") / 3 + parseInt("38188qHDRDg") / 4 * (parseInt("425FiYCzC") / 5) + -parseInt("10869558LAtlIO") / 6 + parseInt("1493681vFtWgw") / 7 * (-parseInt("16irIETy") / 8) + parseInt("72xQGMHk") / 9 * (parseInt("5790940CdPuwx") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 984313);
function main(input) {
  var nums = input["split"]("\n")[1]["split"](" ")["map"](n => parseInt(n, 10));
  var count = 0;
  while (nums["every"](n => n % 2 === 0)) {
    count++;
    nums = nums.map(n => n / 2);
  }
  console["log"](count);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0xe4893d = ["log", "16irIETy", "38188qHDRDg", "10869558LAtlIO", "4663884tWgIKr", "split", "1998736btDIKF", "5790940CdPuwx", "readFileSync", "425FiYCzC", "72xQGMHk", "map", "1493681vFtWgw", "/dev/stdin", "1666315SpLVrQ", "every"];
  __STRING_ARRAY__ = function () {
    return _0xe4893d;
  };
  return __STRING_ARRAY__();
}
