function __STRING_ARRAY__() {
  var _0x319a2f = ["6465984gCVMPM", "min", "log", "readFileSync", "323101UFLHEf", "pow", "343055McsRIX", "600237QKFRUz", "27161030pYewIC", "utf8", "2892758LttPPg", "8CcTCwU", "3RIPnMO", "split", "175PHIEQB", "174618ZrPIqM"];
  __STRING_ARRAY__ = function () {
    return _0x319a2f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("323101UFLHEf") / 1 + -parseInt("2892758LttPPg") / 2 * (parseInt("3RIPnMO") / 3) + -parseInt("8CcTCwU") / 4 * (parseInt("343055McsRIX") / 5) + parseInt("174618ZrPIqM") / 6 * (parseInt("175PHIEQB") / 7) + -parseInt("6465984gCVMPM") / 8 + parseInt("600237QKFRUz") / 9 + parseInt("27161030pYewIC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 795421);
function __DECODE_0__(PHdqUq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 439;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PHdqUq, key);
}
function main(input) {
  const lines = input.split("\n");
  const N = parseInt(lines[0]);
  const S = lines[1]["split"]("");
  var result = Math["pow"](10, 8);
  var current_count = 0;
  for (var i = 0; i < N; i++) {
    if (S[i] == "E") {
      current_count++;
    }
  }
  result = current_count;
  for (var i = 1; i < N; i++) {
    if (S[i] == "E") {
      current_count--;
    }
    if (S[i - 1] == "W") {
      current_count++;
    }
    result = Math["min"](result, current_count);
  }
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
