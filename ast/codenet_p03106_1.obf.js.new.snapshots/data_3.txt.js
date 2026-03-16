function __STRING_ARRAY__() {
  var _0x52f56c = ["isInteger", "810033aBVCKs", "104872SuoUXn", "118725rxdaQs", "713378FmPHMM", "703668BCsRXV", "4943218kqsLmt", "1062576LLrAta", "utf8", "readFileSync", "423PVXZvf", "/dev/stdin", "30hvTCwE", "split"];
  __STRING_ARRAY__ = function () {
    return _0x52f56c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("810033aBVCKs") / 1 + parseInt("713378FmPHMM") / 2 + -parseInt("703668BCsRXV") / 3 + -parseInt("1062576LLrAta") / 4 + -parseInt("118725rxdaQs") / 5 * (parseInt("30hvTCwE") / 6) + -parseInt("4943218kqsLmt") / 7 + -parseInt("104872SuoUXn") / 8 * (-parseInt("423PVXZvf") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 457746);
function main(input) {
  const args = input["split"](" ");
  var A = Number(args[0]);
  var B = Number(args[1]);
  var K = Number(args[2]);
  var cu = 0;
  var sum;
  var count = 0;
  for (cu = A; cu > 0; --cu) {
    if (Number["isInteger"](A / cu) && Number["isInteger"](B / cu)) {
      count++;
      if (count === K) {
        sum = cu;
        break;
      }
    }
  }
  console.log(sum);
}
function __DECODE_0__(Ayidwm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 272;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ayidwm, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
