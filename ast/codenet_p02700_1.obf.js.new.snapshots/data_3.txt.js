function __STRING_ARRAY__() {
  const _0xfe1307 = ["11xqGYSo", "1031300BnaOvu", "3280QzreYX", "454180UVqTap", "Yes", "7zfNwEs", "5412wfgPsO", "26zqQOYr", "utf8", "9vlZMsy", "log", "3970482oKGBBF", "7758BADLIA", "1200145pcUnyu", "36985UaMVYR", "readFileSync", "28379osxkiO"];
  __STRING_ARRAY__ = function () {
    return _0xfe1307;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("36985UaMVYR") / 1 * (parseInt("26zqQOYr") / 2) + -parseInt("9vlZMsy") / 3 * (parseInt("1031300BnaOvu") / 4) + -parseInt("1200145pcUnyu") / 5 + -parseInt("3970482oKGBBF") / 6 * (-parseInt("7zfNwEs") / 7) + parseInt("3280QzreYX") / 8 * (parseInt("7758BADLIA") / 9) + -parseInt("454180UVqTap") / 10 * (parseInt("11xqGYSo") / 11) + parseInt("5412wfgPsO") / 12 * (parseInt("28379osxkiO") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 459973);
function __DECODE_0__(EzryOW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 403;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EzryOW, key);
}
function Main(input) {
  const array = input.split(" ");
  let takahashi = Number(array[0]);
  let aoki = Number(array[2]);
  let count = 0;
  let bool = true;
  while (bool) {
    if (count % 2 === 0) {
      aoki = aoki - Number(array[1]);
      if (aoki <= 0) {
        console["log"]("Yes");
        bool = false;
      }
    } else {
      takahashi = takahashi - Number(array[3]);
      if (takahashi <= 0) {
        console["log"]("No");
        bool = false;
      }
    }
    count++;
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
