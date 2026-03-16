function __STRING_ARRAY__() {
  const _0x822111 = ["utf8", "map", "8979SlTaEh", "readFileSync", "407nILXBi", "6848550UIIDXB", "9275497DsvDfC", "log", "indexOf", "/dev/stdin", "1120ABdsAJ", "500VgOOLL", "177630devkdZ", "1119920NWpEBE", "36AIoOPV", "142IFnXmG", "6276432tYrjkU", "split"];
  __STRING_ARRAY__ = function () {
    return _0x822111;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("500VgOOLL") / 1 * (parseInt("142IFnXmG") / 2) + parseInt("8979SlTaEh") / 3 * (-parseInt("1120ABdsAJ") / 4) + -parseInt("177630devkdZ") / 5 * (-parseInt("36AIoOPV") / 6) + -parseInt("9275497DsvDfC") / 7 + -parseInt("6276432tYrjkU") / 8 + -parseInt("6848550UIIDXB") / 9 + parseInt("1119920NWpEBE") / 10 * (parseInt("407nILXBi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 683745);
function main(lines) {
  const [N] = parseNumberLine(lines[0]);
  const numbers = parseNumberLine(lines[1]);
  const [Q] = parseNumberLine(lines[2]);
  const operationLines = lines.slice(3);
  let result = numbers.reduce((t, v) => t + v, 0);
  for (let i = 0; i < Q; ++i) {
    const [B, C] = parseNumberLine(operationLines[i]);
    while (true) {
      const index = numbers["indexOf"](B);
      if (index < 0) {
        break;
      }
      numbers[index] = C;
      result += C - B;
    }
    console["log"](result);
  }
}
function parseNumberLine(line, radix = 10) {
  return line["split"](/\s+/)["map"](_ => parseInt(_, radix));
}
function __DECODE_0__(vgUALF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 218;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vgUALF, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
