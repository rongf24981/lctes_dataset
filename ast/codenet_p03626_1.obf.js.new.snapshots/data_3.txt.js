(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("590195SXUNpv") / 1 + parseInt("8FuOnyu") / 2 * (parseInt("279417xUseZT") / 3) + -parseInt("2429432McmhIq") / 4 + -parseInt("445ZFdYnT") / 5 * (-parseInt("40554RSFJeU") / 6) + parseInt("1002190qoEfNe") / 7 + -parseInt("223192FlWtwB") / 8 * (parseInt("99PYYjvW") / 9) + parseInt("7355950nyQHTc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 348430);
function main(input) {
  var tmp = input["split"](/\r\n|\r|\n/);
  var N = Number(tmp[0]);
  var S = tmp[1]["split"]("");
  var res;
  var i = 0;
  var isYoko;
  if (S[i] == S[i + 1]) {
    res = 6;
    i = i + 2;
    isYoko = true;
  } else {
    res = 3;
    i++;
    isYoko = false;
  }
  for (; i < N - 1; i++) {
    if (S[i] == S[i + 1]) {
      if (isYoko) {
        res = res * 3;
      } else {
        res = res * 2;
      }
      i++;
      isYoko = true;
    } else {
      if (!isYoko) {
        res = res * 2;
      }
      isYoko = false;
    }
  }
  if (i < N) {
    if (!isYoko) {
      res = res * 2;
    }
  }
  console["log"](res % 1000000007);
}
function __DECODE_0__(WYqbwo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 220;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WYqbwo, key);
}
function __STRING_ARRAY__() {
  var _0x419529 = ["log", "279417xUseZT", "223192FlWtwB", "99PYYjvW", "2429432McmhIq", "8FuOnyu", "445ZFdYnT", "readFileSync", "590195SXUNpv", "/dev/stdin", "7355950nyQHTc", "1002190qoEfNe", "40554RSFJeU", "split"];
  __STRING_ARRAY__ = function () {
    return _0x419529;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
