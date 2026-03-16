(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("92867LzMejk") / 1 * (parseInt("14AQSDdQ") / 2) + parseInt("48nHvliT") / 3 * (parseInt("312020OYGuvT") / 4) + parseInt("57515blnsCY") / 5 * (-parseInt("114lwjCMe") / 6) + -parseInt("188041dycSXf") / 7 * (-parseInt("392kXLeBd") / 8) + parseInt("3478383xUwIVG") / 9 * (-parseInt("40NEpebl") / 10) + parseInt("16285874eEdLkq") / 11 + -parseInt("23634684wvInqc") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 960908);
let inputString = "";
function __STRING_ARRAY__() {
  const _0xc61127 = ["3478383xUwIVG", "data", "92867LzMejk", "14AQSDdQ", "map", "392kXLeBd", "length", "57515blnsCY", "312020OYGuvT", "188041dycSXf", "48nHvliT", "23634684wvInqc", "split", "114lwjCMe", "16285874eEdLkq", "stdin", "40NEpebl", "end", "log"];
  __STRING_ARRAY__ = function () {
    return _0xc61127;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gJmhjk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gJmhjk, key);
}
process["stdin"].on("data", inputStdin => {
  inputString += inputStdin;
});
process.stdin.on("end", function () {
  inputString = inputString.replace(/\s*$/, "")["split"]("\n").map(str => str.replace(/\s*$/, ""));
  selectionSort(inputString[1]["split"](" ")["map"](str => Number(str)));
});
const selectionSort = arr => {
  let swap = 0;
  for (let i = 0; i < arr["length"]; i++) {
    let minj = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minj]) {
        minj = j;
      }
    }
    const a = arr[i];
    const b = arr[minj];
    if (a !== b) {
      arr[minj] = a;
      arr[i] = b;
      swap++;
    }
  }
  console.log(arr.join(" "));
  console["log"](swap);
};
