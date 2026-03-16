function __STRING_ARRAY__() {
  const _0x2ec6fc = ["6193ffIdLA", "279937CugODf", "1629455jBLPwV", "22870aRcCJu", "294dgQVai", "8dCArPD", "map", "23335cwuKqy", "log", "/dev/stdin", "54cZLlcB", "4068YzQLZA", "length", "14574SoLciU", "277512vyoXvb", "12590DsQEVx", "1421qmMNta"];
  __STRING_ARRAY__ = function () {
    return _0x2ec6fc;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DpykFD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 230;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DpykFD, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("279937CugODf") / 1 + -parseInt("12590DsQEVx") / 2 * (-parseInt("294dgQVai") / 3) + parseInt("8dCArPD") / 4 * (-parseInt("1629455jBLPwV") / 5) + -parseInt("14574SoLciU") / 6 * (-parseInt("1421qmMNta") / 7) + parseInt("277512vyoXvb") / 8 * (-parseInt("54cZLlcB") / 9) + -parseInt("22870aRcCJu") / 10 * (-parseInt("6193ffIdLA") / 11) + parseInt("4068YzQLZA") / 12 * (-parseInt("23335cwuKqy") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 649220);
function Main(input) {
  let [l, ...valArr] = input.split("\n");
  valArr = valArr["map"](e => parseFloat(e));
  let result = [];
  for (let ele of valArr) {
    let temp = valArr["map"](e => {
      if (e !== ele && e * ele % 1 === 0 && ele < e) {
        return [ele, e];
      }
    });
    temp = temp.filter(e => e !== undefined);
    if (temp["length"]) {
      result = [...result, ...temp];
    }
  }
  console["log"](result["length"]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
