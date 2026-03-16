(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("46XTinzw") / 1 * (-parseInt("3014bKbdPe") / 2) + -parseInt("665397SpGfsF") / 3 + -parseInt("1060YNpXWj") / 4 * (-parseInt("6215pPfoMH") / 5) + parseInt("48wkdWke") / 6 * (-parseInt("86471scIDtS") / 7) + parseInt("912MuESSk") / 8 * (parseInt("8361QFoQdQ") / 9) + -parseInt("80lsvRjF") / 10 * (-parseInt("498124GIShma") / 11) + parseInt("4267812WpplIx") / 12 * (-parseInt("13NSlmLk") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 190621);
function Main(input) {
  input = input["split"]("\n");
  const input1 = input[0]["split"](" ");
  const N = parseInt(input1[0]);
  const K = parseInt(input1[1]);
  const As = input[1]["split"](" ")["map"](x => parseInt(x));
  var count = 0;
  for (i = 0; i < N; i++) {
    var u = As["slice"](i + 1).filter(x => x < As[i])["length"];
    var v = As.filter(x => x < As[i])["length"];
    count += u * K % 1000000007;
    count += v * (K - 1) * K / 2 % 1000000007;
    count = count % 1000000007;
  }
  console.log(count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(sILAPl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 229;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sILAPl, key);
}
function __STRING_ARRAY__() {
  const _0x43ad5f = ["13NSlmLk", "1060YNpXWj", "4267812WpplIx", "slice", "length", "48wkdWke", "/dev/stdin", "3014bKbdPe", "utf8", "6215pPfoMH", "split", "map", "498124GIShma", "readFileSync", "912MuESSk", "46XTinzw", "86471scIDtS", "80lsvRjF", "8361QFoQdQ", "665397SpGfsF"];
  __STRING_ARRAY__ = function () {
    return _0x43ad5f;
  };
  return __STRING_ARRAY__();
}
