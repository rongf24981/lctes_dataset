function __STRING_ARRAY__() {
  const _0x30031a = ["6cPgtFo", "140967vfReHG", "7144123wtRwuY", "26ohVefK", "4878260aQpGFF", "24mSArHH", "utf8", "33769wUahPC", "2292381xGTMdf", "5045359wEtnCS", "log", "4410UKFTId", "372sQRJRW", "slice"];
  __STRING_ARRAY__ = function () {
    return _0x30031a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("33769wUahPC") / 1 * (parseInt("26ohVefK") / 2) + -parseInt("2292381xGTMdf") / 3 + -parseInt("372sQRJRW") / 4 * (parseInt("4410UKFTId") / 5) + parseInt("6cPgtFo") / 6 * (parseInt("7144123wtRwuY") / 7) + -parseInt("24mSArHH") / 8 * (parseInt("140967vfReHG") / 9) + -parseInt("4878260aQpGFF") / 10 + parseInt("5045359wEtnCS") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 537287);
function main(input) {
  const input_array = input.split("\n");
  const coins_count = input_array["slice"](0, 3);
  const desired_sum = parseInt(input_array["slice"](-1), 10);
  var answer = 0;
  for (i = 0; i <= parseInt(coins_count[0], 10); i++) {
    for (j = 0; j <= parseInt(coins_count[1], 10); j++) {
      for (k = 0; k <= parseInt(coins_count[2], 10); k++) {
        if (i * 500 + j * 100 + k * 50 == desired_sum) {
          answer++;
        }
      }
    }
  }
  console["log"](answer);
}
function __DECODE_0__(KwzPDM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KwzPDM, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
