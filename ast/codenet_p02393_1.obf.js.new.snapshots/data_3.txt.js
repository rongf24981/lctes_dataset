function __STRING_ARRAY__() {
  var _0x478fe4 = ["28352mtaKMS", "50rWzFPP", "3YHuoWD", "1974177RFsevS", "575HpuGBQ", "88FdIIih", "/dev/stdin", "split", "9902760owwHUn", "591762AbHxia", "49WjMMgl", "utf8", "108555zQCozV", "1650900WJjELL", "%d %d %d", "435718oBJUis"];
  __STRING_ARRAY__ = function () {
    return _0x478fe4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3YHuoWD") / 1 * (parseInt("435718oBJUis") / 2) + -parseInt("108555zQCozV") / 3 + -parseInt("28352mtaKMS") / 4 * (-parseInt("575HpuGBQ") / 5) + -parseInt("591762AbHxia") / 6 * (parseInt("49WjMMgl") / 7) + parseInt("9902760owwHUn") / 8 + parseInt("1974177RFsevS") / 9 * (-parseInt("50rWzFPP") / 10) + -parseInt("88FdIIih") / 11 * (-parseInt("1650900WJjELL") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 676649);
function __DECODE_0__(BZFWUH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BZFWUH, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cnt;
var i;
var j;
input = input["split"](" ");
for (cnt = 0; cnt < 3; cnt++) {
  for (i = 0; i < 3; i++) {
    if (input[i] > input[i + 1]) {
      j = input[i];
      input[i] = input[i + 1];
      input[i + 1] = j;
    }
  }
}
console.log("%d %d %d", input[0], input[1], input[2]);
