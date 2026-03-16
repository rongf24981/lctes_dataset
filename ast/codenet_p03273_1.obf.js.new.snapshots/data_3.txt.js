function __DECODE_0__(mOycpi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 355;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mOycpi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("467293myJCyE") / 1 + -parseInt("690UPStDZ") / 2 + parseInt("896142sXZVnF") / 3 + parseInt("1988392YJDLnx") / 4 + parseInt("9695LYPvOK") / 5 * (-parseInt("1410qUkXMu") / 6) + -parseInt("2505993CmBHxv") / 7 + parseInt("6568xAivNs") / 8 * (parseInt("13059VsSIaB") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 705781);
function __STRING_ARRAY__() {
  const _0x3f5d59 = ["readFileSync", "/dev/stdin", "467293myJCyE", "1988392YJDLnx", "13059VsSIaB", "2505993CmBHxv", "1410qUkXMu", "log", "896142sXZVnF", "6568xAivNs", "split", "9695LYPvOK", "690UPStDZ", "push"];
  __STRING_ARRAY__ = function () {
    return _0x3f5d59;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input["split"](/\s/);
  let h = parseInt(input[0]);
  let w = parseInt(input[1]);
  let mp = [];
  for (let i = 2; i < 2 + h; i++) {
    mp["push"](input[i]);
  }
  function check(x, y) {
    let res = 0;
    for (let i = 0; i < h; i++) {
      if (mp[i][x] == "#") {
        res++;
        break;
      }
    }
    for (let j = 0; j < w; j++) {
      if (mp[y][j] == "#") {
        res++;
        break;
      }
    }
    return res == 2;
  }
  for (let i = 0; i < h; i++) {
    ans = "";
    for (let j = 0; j < w; j++) {
      if (check(j, i)) {
        ans = ans + mp[i][j];
      }
    }
    if (ans != "") {
      console["log"](ans);
    }
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
