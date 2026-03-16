function __DECODE_0__(tFIcdF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 418;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tFIcdF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1543504niBuzh") / 1 + -parseInt("34RmOPsO") / 2 * (parseInt("97332XomNNE") / 3) + -parseInt("24zFFKfA") / 4 * (-parseInt("851055MXyVVp") / 5) + -parseInt("6xknYOV") / 6 * (-parseInt("642530kMLZjC") / 7) + parseInt("48esuiQl") / 8 * (-parseInt("84951MAMbVL") / 9) + -parseInt("1560rJgHXc") / 10 * (-parseInt("53471hmwhmk") / 11) + parseInt("84HpRFSN") / 12 * (parseInt("2226289hxfkDX") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 918457);
function __STRING_ARRAY__() {
  var _0x4feb4b = ["trim", "split", "84HpRFSN", "24zFFKfA", "851055MXyVVp", "6xknYOV", "join", "642530kMLZjC", "/dev/stdin", "34RmOPsO", "utf8", "1543504niBuzh", "84951MAMbVL", "53471hmwhmk", "1560rJgHXc", "shift", "48esuiQl", "97332XomNNE", "2226289hxfkDX"];
  __STRING_ARRAY__ = function () {
    return _0x4feb4b;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var ab = Arr["shift"]()["split"](" ");
  ;
  if (ab[0] == 0 && ab[1] == 0) {
    break;
  }
  var m = ab[1] - ab[0];
  var arr = [0, 0, 0];
  while (m >= 1000) {
    m -= 1000;
    arr[2]++;
  }
  while (m >= 500) {
    m -= 500;
    arr[1]++;
  }
  while (m >= 100) {
    m -= 100;
    arr[0]++;
  }
  console.log(arr["join"](" "));
}
