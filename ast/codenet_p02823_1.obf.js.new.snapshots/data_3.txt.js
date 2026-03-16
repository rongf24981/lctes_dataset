(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1208013UaJQOC") / 1 + -parseInt("1443524QlYzAY") / 2 + parseInt("1484106JJTEXL") / 3 + -parseInt("2711336bFaErL") / 4 + -parseInt("2850780KieNaH") / 5 + -parseInt("306gxOXDB") / 6 * (parseInt("84518gGyONR") / 7) + parseInt("104MBzQMN") / 8 * (parseInt("2903400woiMeG") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 894963);
function Main(input) {
  const array = input["trim"]()["split"](" ")["map"](s => parseInt(s));
  const N = array[0];
  var A = array[1];
  var B = array[2];
  var ans = 0;
  var dist = B - A;
  if (dist % 2) {
    var diff = Math.min(N - B, A - 1) + 1;
    ans += diff;
    ans += Math.floor((B - A - 1) / 2);
  } else {
    ans = dist / 2;
  }
  console["log"](ans);
}
function __DECODE_0__(umyhxV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 475;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(umyhxV, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x393131 = ["trim", "2711336bFaErL", "306gxOXDB", "readFileSync", "/dev/stdin", "2903400woiMeG", "log", "split", "1208013UaJQOC", "1484106JJTEXL", "2850780KieNaH", "map", "1443524QlYzAY", "84518gGyONR", "104MBzQMN", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x393131;
  };
  return __STRING_ARRAY__();
}
