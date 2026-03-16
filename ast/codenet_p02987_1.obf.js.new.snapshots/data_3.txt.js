function __DECODE_0__(KVWEqt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 144;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KVWEqt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("4AkZnEY") / 1 * (parseInt("294124AuoihA") / 2) + parseInt("250392HcLOLE") / 3 + -parseInt("539220mbhGxt") / 4 + -parseInt("2422765PzRovP") / 5 + -parseInt("1442508YaZgIa") / 6 * (parseInt("14rEKZaX") / 7) + -parseInt("363048YOnWbO") / 8 * (-parseInt("45IjlGxV") / 9) + parseInt("16820500OhtOEH") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 303977);
function main(input) {
  const inputList = input["split"]("");
  const list = [];
  inputList["forEach"](il => {
    if (!list["some"](l => l === il)) {
      list["push"](il);
    }
  });
  const result = list["length"] === 2 ? "Yes" : "No";
  console.log(result);
}
function __STRING_ARRAY__() {
  const _0x33bb17 = ["length", "16820500OhtOEH", "/dev/stdin", "split", "45IjlGxV", "14rEKZaX", "4AkZnEY", "forEach", "2422765PzRovP", "1442508YaZgIa", "readFileSync", "some", "utf8", "294124AuoihA", "push", "Yes", "250392HcLOLE", "539220mbhGxt", "363048YOnWbO"];
  __STRING_ARRAY__ = function () {
    return _0x33bb17;
  };
  return __STRING_ARRAY__();
}
;
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
