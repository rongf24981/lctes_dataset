function __STRING_ARRAY__() {
  const _0x10f370 = ["183pkrvaG", "readFileSync", "3235526ZGLDkM", "log", "1400940NeFXid", "534990xprYAS", "floor", "split", "1017HsupWz", "2608mOKaZX", "/dev/stdin", "395942JPgQqh", "28072RJgesJ", "288604TLARdu"];
  __STRING_ARRAY__ = function () {
    return _0x10f370;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(aNlYDG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aNlYDG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("395942JPgQqh") / 1 + parseInt("2608mOKaZX") / 2 * (-parseInt("183pkrvaG") / 3) + parseInt("288604TLARdu") / 4 + -parseInt("1400940NeFXid") / 5 + parseInt("534990xprYAS") / 6 + parseInt("3235526ZGLDkM") / 7 + parseInt("28072RJgesJ") / 8 * (parseInt("1017HsupWz") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 264377);
function Main(input) {
  input = input["split"]("\n");
  const row1 = input[0]["split"](" ");
  const N = parseInt(row1[0]);
  const M = parseInt(row1[1]);
  const K = parseInt(row1[2]);
  var S = parseInt(input[1], 2);
  var T = parseInt(input[2], 2);
  for (var i = 0; i < K; i++) {
    var sANDt = S & T;
    S = S + sANDt;
    T = T + sANDt;
  }
  const sBinary = toBinary(S);
  const tBinary = toBinary(T);
  console["log"](sBinary);
  console["log"](tBinary);
}
function toBinary(a) {
  var num = a;
  var binary = "";
  while (num > 0) {
    binary = num % 2 + binary;
    num = Math["floor"](num / 2);
  }
  return binary;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
