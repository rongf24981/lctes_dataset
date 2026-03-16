function __DECODE_0__(zuCsLh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 411;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zuCsLh, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("450477BHoFWy") / 1 + -parseInt("10jEZnTP") / 2 * (-parseInt("175173fOtoGA") / 3) + -parseInt("52616oCVqIY") / 4 * (parseInt("30KypxEe") / 5) + -parseInt("3612372SyAOox") / 6 + -parseInt("2795737voIXMT") / 7 * (-parseInt("8MHipcg") / 8) + -parseInt("16561305FWyMjw") / 9 + parseInt("32423730jxCZoT") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 962111);
function Main(input) {
  const N = Number(input);
  let fn = new Array(N).fill(0);
  for (let x = 1; x ** 2 <= N; x++) {
    for (let y = 1; y ** 2 <= N; y++) {
      if (x + y > N) {
        break;
      }
      for (let z = 1; z ** 2 <= N; z++) {
        const i = x ** 2 + y ** 2 + z ** 2 + x * y + y * z + z * x;
        if (i > N) {
          break;
        }
        fn[i - 1]++;
      }
    }
  }
  console.log(fn["join"]("\n"));
}
function __STRING_ARRAY__() {
  const _0x200d4b = ["utf8", "30KypxEe", "join", "/dev/stdin", "3612372SyAOox", "175173fOtoGA", "16561305FWyMjw", "10jEZnTP", "32423730jxCZoT", "450477BHoFWy", "2795737voIXMT", "8MHipcg", "52616oCVqIY"];
  __STRING_ARRAY__ = function () {
    return _0x200d4b;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
