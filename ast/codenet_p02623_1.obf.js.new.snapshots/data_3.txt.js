function __STRING_ARRAY__() {
  const _0x3774be = ["readFileSync", "186xPVUhd", "2fLazxw", "1427049YKztCR", "136598EPLwyP", "569239lFZlKm", "9575109tIrxfH", "utf8", "3748bkQutW", "23545550OWdpMR", "/dev/stdin", "log", "split", "155HyoDkp", "381992aThNFx"];
  __STRING_ARRAY__ = function () {
    return _0x3774be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("569239lFZlKm") / 1 * (parseInt("2fLazxw") / 2) + -parseInt("1427049YKztCR") / 3 + -parseInt("3748bkQutW") / 4 * (-parseInt("155HyoDkp") / 5) + -parseInt("186xPVUhd") / 6 * (parseInt("136598EPLwyP") / 7) + -parseInt("381992aThNFx") / 8 + -parseInt("9575109tIrxfH") / 9 + parseInt("23545550OWdpMR") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 760574);
function compareFunc(a, b) {
  return a - b;
}
function __DECODE_0__(flIGwf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 486;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(flIGwf, key);
}
function main(input) {
  let args = input["split"](/\n/);
  let books = [...args[1]["split"](/\s/), ...args[2].split(/\s/)];
  let time = args[0]["split"](/\s/)[2];
  let result = 0;
  books.sort(compareFunc);
  for (let i = 0; i < books.length; i++) {
    if (time >= books[i] * 1) {
      time -= books[i];
      result++;
    }
  }
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
