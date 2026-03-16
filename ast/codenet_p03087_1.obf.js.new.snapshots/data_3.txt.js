(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("739994dqsxkl") / 1 * (-parseInt("2dgeLMC") / 2) + -parseInt("1617138CTrjKm") / 3 + -parseInt("1291552qRVAYL") / 4 + -parseInt("384255oiYmNA") / 5 + -parseInt("6sdyXkB") / 6 * (parseInt("5558049WWDasG") / 7) + -parseInt("168Jjqbba") / 8 * (parseInt("369153NDiAGG") / 9) + parseInt("23015720REIYVK") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 447417);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["split"]("\n");
var nq = arr[0]["split"](" ")["map"](Number);
var str = arr[1];
var a = [0, 0];
var cnt = 0;
function __STRING_ARRAY__() {
  var _0x2a93d0 = ["168Jjqbba", "1291552qRVAYL", "push", "384255oiYmNA", "map", "369153NDiAGG", "join", "1617138CTrjKm", "5558049WWDasG", "6sdyXkB", "739994dqsxkl", "split", "23015720REIYVK", "/dev/stdin", "utf8", "2dgeLMC"];
  __STRING_ARRAY__ = function () {
    return _0x2a93d0;
  };
  return __STRING_ARRAY__();
}
for (var i = 1; i < str.length; i++) {
  if (str[i] == "C" && str[i - 1] == "A") {
    cnt++;
  }
  a.push(cnt);
}
var ans = [];
for (var i = 2, len = nq[1] + 2; i < len; i++) {
  var lr = arr[i].split(" ");
  ans["push"](a[lr[1] - 0] - a[lr[0] - 0]);
}
function __DECODE_0__(yfrwyh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 202;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yfrwyh, key);
}
console.log(ans["join"]("\n"));
