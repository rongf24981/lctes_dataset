(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("52723JPxXKC") / 1 + -parseInt("6iklTNH") / 2 * (parseInt("147669LVKppL") / 3) + -parseInt("4LcrwtM") / 4 * (parseInt("147775rMfpOL") / 5) + parseInt("1052796LUZcEt") / 6 + -parseInt("210oJbQVP") / 7 * (-parseInt("49672xgSlRr") / 8) + -parseInt("619254ADlRuf") / 9 + -parseInt("90gCxiUq") / 10 * (-parseInt("47509MEjZXZ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 101854);
function __DECODE_0__(QLlyyO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QLlyyO, key);
}
function main(input) {
  const S = input["split"]("\n")[0]["split"]("");
  const K = parseInt(input.split("\n")[0]["split"](" ")[1]);
  for (var i = 0; i < S.length; i++) {
    if (S[i] != "1") {
      console["log"](S[i]);
      return;
    }
  }
  console["log"](1);
}
function __STRING_ARRAY__() {
  const _0x1a5de3 = ["52723JPxXKC", "147775rMfpOL", "49672xgSlRr", "210oJbQVP", "4LcrwtM", "1052796LUZcEt", "log", "619254ADlRuf", "readFileSync", "split", "90gCxiUq", "6iklTNH", "147669LVKppL", "utf8", "/dev/stdin", "47509MEjZXZ"];
  __STRING_ARRAY__ = function () {
    return _0x1a5de3;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
