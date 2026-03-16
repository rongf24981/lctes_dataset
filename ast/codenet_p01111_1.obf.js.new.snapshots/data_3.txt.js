(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("705124pmeavs") / 1 + -parseInt("388VWyjsD") / 2 * (-parseInt("6141NQKuaY") / 3) + parseInt("3396JqSrYJ") / 4 * (parseInt("2570GpbFtn") / 5) + -parseInt("6WMcutx") / 6 * (-parseInt("128681jcHqph") / 7) + parseInt("364712HYQcGe") / 8 * (parseInt("81OdTxQE") / 9) + parseInt("742500PpKmcb") / 10 + -parseInt("17412362PTGqXW") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 458620);
function __DECODE_0__(gTMDnA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 208;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gTMDnA, key);
}
new Promise(function (resolve, reject) {
  let cin = "";
  process["stdin"].on("data", chunk => {
    cin += chunk;
  }).on("end", () => {
    resolve([cin, process["stdout"]]);
  });
})["then"](function ([cin, cout]) {
  for (const b of cin.split(/[ \n]/).map(elt => parseInt(elt))) {
    if (b === 0) {
      break;
    }
    let opt = "\n";
    for (let m = 1; m * (m - 1) < b * 2; ++m) {
      const det = b * 2 - m * (m - 1);
      if (det % (m * 2) === 0) {
        opt = det / (m * 2) + " " + m + "\n";
      }
    }
    cout["write"](opt);
  }
});
function __STRING_ARRAY__() {
  const _0x24639f = ["stdout", "6WMcutx", "end", "17412362PTGqXW", "3396JqSrYJ", "data", "705124pmeavs", "6141NQKuaY", "388VWyjsD", "128681jcHqph", "then", "stdin", "2570GpbFtn", "81OdTxQE", "write", "742500PpKmcb", "364712HYQcGe"];
  __STRING_ARRAY__ = function () {
    return _0x24639f;
  };
  return __STRING_ARRAY__();
}
