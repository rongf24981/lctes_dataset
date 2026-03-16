(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1148757BJIgZd") / 1 + parseInt("1347184tfzOgp") / 2 + parseInt("3315762cZUYwh") / 3 + parseInt("963532cDyJFg") / 4 * (-parseInt("10OnidgH") / 5) + -parseInt("2790372dFRaDf") / 6 + parseInt("21FIrWSp") / 7 * (parseInt("3667984IQlVEk") / 8) + parseInt("531stmRLo") / 9 * (-parseInt("416450cpCKjX") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 899214);
function Main(input) {
  var idata = input["split"]("");
  var ninzuu = [];
  var nextninzuutemp = [];
  for (let i = 0; i < idata["length"]; i++) {
    ninzuu.push(1);
    nextninzuutemp["push"](0);
  }
  var nextninzuu = nextninzuutemp["slice"]();
  for (let turn = 0; turn < ninzuu["length"] + ninzuu["length"] % 2; turn++) {
    for (let j = 0; j < ninzuu["length"]; j++) {
      if (idata[j] == "R") {
        nextninzuu[j + 1] += ninzuu[j];
      } else if (idata[j] == "L") {
        nextninzuu[j - 1] += ninzuu[j];
      }
    }
    ninzuu = nextninzuu["slice"]();
    nextninzuu = nextninzuutemp["slice"]();
  }
  console.log(ninzuu["join"](" "));
}
function __DECODE_0__(eECjbM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eECjbM, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0xa0621c = ["split", "1148757BJIgZd", "readFileSync", "3315762cZUYwh", "1347184tfzOgp", "utf8", "push", "length", "21FIrWSp", "/dev/stdin", "963532cDyJFg", "join", "416450cpCKjX", "531stmRLo", "3667984IQlVEk", "slice", "2790372dFRaDf", "10OnidgH"];
  __STRING_ARRAY__ = function () {
    return _0xa0621c;
  };
  return __STRING_ARRAY__();
}
