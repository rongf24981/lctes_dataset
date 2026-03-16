(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("607603SoqVUg") / 1 + -parseInt("1494sGPzYg") / 2 * (-parseInt("207ngnvne") / 3) + -parseInt("18004FQOuti") / 4 + -parseInt("4122945HlioQH") / 5 + parseInt("6XYWepj") / 6 * (parseInt("2776942sdAcvc") / 7) + parseInt("2464528bxQGvR") / 8 + parseInt("10699515wNlukb") / 9 * (parseInt("10FybqLB") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 508457);
function Main(input) {
  inputList = input["split"]("\n");
  inputNum = parseInt(inputList[0], 10);
  firstList = inputList[1].split("");
  secondList = inputList[2]["split"]("");
  thirdList = inputList[3]["split"]("");
  count = 0;
  for (var i = 0; i < inputNum; i++) {
    if (firstList[i] == secondList[i] && secondList[i] == thirdList[i]) {
      continue;
    }
    if (firstList[i] == secondList[i] || secondList[i] == thirdList[i] || thirdList[i] == firstList[i]) {
      count++;
      continue;
    }
    count++;
    count++;
  }
  console.log(count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(ZwTejd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 237;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZwTejd, key);
}
function __STRING_ARRAY__() {
  var _0x4d3ba6 = ["4122945HlioQH", "split", "2776942sdAcvc", "18004FQOuti", "readFileSync", "/dev/stdin", "10699515wNlukb", "utf8", "1494sGPzYg", "6XYWepj", "207ngnvne", "2464528bxQGvR", "607603SoqVUg", "10FybqLB"];
  __STRING_ARRAY__ = function () {
    return _0x4d3ba6;
  };
  return __STRING_ARRAY__();
}
