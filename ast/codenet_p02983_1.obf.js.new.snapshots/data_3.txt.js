(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("382536TkCJgb") / 1 + -parseInt("4leAXFM") / 2 * (parseInt("315843RWncMs") / 3) + -parseInt("3284sfYEJD") / 4 * (-parseInt("2615GpBgmk") / 5) + -parseInt("486sobFlT") / 6 * (-parseInt("16688igWpJs") / 7) + parseInt("886344MKAuAJ") / 8 * (parseInt("54vYtzIy") / 9) + -parseInt("470oKlpvj") / 10 * (-parseInt("9537UitdrR") / 11) + -parseInt("4738032LBhHYC") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 340060);
function __STRING_ARRAY__() {
  const _0xc75651 = ["3284sfYEJD", "470oKlpvj", "utf8", "parseInt", "886344MKAuAJ", "315843RWncMs", "min", "9537UitdrR", "4738032LBhHYC", "4leAXFM", "16688igWpJs", "log", "382536TkCJgb", "split", "486sobFlT", "54vYtzIy", "2615GpBgmk", "/dev/stdin", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xc75651;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ICrNJr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 356;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ICrNJr, key);
}
function Main(input) {
  input = input["split"]("\n");
  inputStr = input[0]["split"](" ");
  const L = Number["parseInt"](inputStr[0]);
  const R = Number["parseInt"](inputStr[1]);
  var min = 2018;
  if (L * R > 2019) {
    if (R - L < 2019) {
      const L2 = L % 2019;
      const R2 = R % 2019;
      for (var i1 = L2; i1 < R2; i1++) {
        for (var i2 = i1 + 1; i2 < R2 + 1; i2++) {
          min = Math["min"](min, i1 * i2 % 2019);
          if (min === 0) {
            break;
          }
        }
      }
      console["log"](min);
    } else {
      console["log"](0);
    }
  } else {
    console["log"](L * (L + 1));
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
