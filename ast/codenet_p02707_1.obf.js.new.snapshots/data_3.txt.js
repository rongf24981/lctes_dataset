function __DECODE_0__(MsdkyN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MsdkyN, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("563803HwUYqG") / 1 + -parseInt("355882IjmVxY") / 2 * (-parseInt("3roEqsu") / 3) + -parseInt("709120XrNbhO") / 4 + -parseInt("618405Lgfgof") / 5 + -parseInt("1428690HiEDqZ") / 6 + -parseInt("3235533rjbUOx") / 7 + parseInt("4801304IlIgWh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 340612);
function __STRING_ARRAY__() {
  const _0x5daab4 = ["355882IjmVxY", "3235533rjbUOx", "readFileSync", "indexOf", "filter", "618405Lgfgof", "709120XrNbhO", "split", "length", "3roEqsu", "push", "join", "563803HwUYqG", "/dev/stdin", "1428690HiEDqZ", "utf8", "4801304IlIgWh"];
  __STRING_ARRAY__ = function () {
    return _0x5daab4;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  const tmp = input.trim()["split"]("\n");
  const employees = parseInt(tmp[0]);
  const subordinateArray = tmp[1].split(" ");
  const subordinateCount = {};
  const distinctSubordinate = subordinateArray["filter"]((x, i, self) => self["indexOf"](x) === i);
  subordinateArray.forEach(elem => {
    subordinateCount[elem] = subordinateCount[elem] ? subordinateCount[elem] + 1 : 1;
  });
  let result = [];
  distinctSubordinate.forEach(elem => {
    return result["push"](subordinateCount[elem]);
  });
  const zeroCount = employees - distinctSubordinate["length"];
  if (zeroCount > 0) {
    for (let index = 0; index < zeroCount; index++) {
      result["push"](0);
    }
  }
  result = result["join"]("\n");
  console.log(result);
  return result;
};
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
