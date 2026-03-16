(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1227594tpvPni") / 1 + parseInt("300258ZaPyZM") / 2 * (parseInt("3JuWSnQ") / 3) + -parseInt("5629248xTjyWW") / 4 + -parseInt("3061870DhmJNO") / 5 + parseInt("258vdZtVo") / 6 * (parseInt("207403ovEKjs") / 7) + parseInt("11685656MAGNTa") / 8 + -parseInt("1287JwjQiL") / 9 * (-parseInt("91190OAtinl") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 941620);
function __DECODE_0__(vDcOzs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 469;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vDcOzs, key);
}
function __STRING_ARRAY__() {
  var _0x374b3c = ["3JuWSnQ", "3061870DhmJNO", "readFileSync", "91190OAtinl", "300258ZaPyZM", "map", "1287JwjQiL", "utf8", "207403ovEKjs", "split", "5629248xTjyWW", "258vdZtVo", "11685656MAGNTa", "/dev/stdin", "1227594tpvPni"];
  __STRING_ARRAY__ = function () {
    return _0x374b3c;
  };
  return __STRING_ARRAY__();
}
require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n")["map"](function (i) {
  j = +i;
  s = 0;
  if (j) {
    while (j = ~~(j / 5)) {
      s += j;
    }
    console.log(s);
  }
});
