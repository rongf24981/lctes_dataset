function __STRING_ARRAY__() {
  var _0x4ad2ff = ["2659566CRvfXs", "28BOFFvJ", "indexOf", "log", "285003UZDffr", "3shvsLA", "921625aIauNe", "1040672zeJxvT", "slice", "20PwjJOh", "readFileSync", "8qixxxf", "18260077AoIQSg", "split", "/dev/stdin", "1855566hiAQDl", "263252kYnEnM"];
  __STRING_ARRAY__ = function () {
    return _0x4ad2ff;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jsxIEE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 181;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jsxIEE, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("285003UZDffr") / 1 + -parseInt("263252kYnEnM") / 2 * (-parseInt("3shvsLA") / 3) + -parseInt("8qixxxf") / 4 * (parseInt("921625aIauNe") / 5) + -parseInt("2659566CRvfXs") / 6 + -parseInt("28BOFFvJ") / 7 * (parseInt("1040672zeJxvT") / 8) + parseInt("1855566hiAQDl") / 9 * (-parseInt("20PwjJOh") / 10) + parseInt("18260077AoIQSg") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 332041);
ptrn = [[0, 1, 2], [0, 2, 4], [0, 4, 3], [0, 3, 1], [1, 5, 2], [1, 2, 0], [1, 0, 3], [1, 3, 5], [2, 1, 5], [2, 5, 4], [2, 4, 0], [2, 0, 1]];
function dice(num) {
  this.n = num;
  this.check = function (top, front) {
    top = this.n["indexOf"](top);
    front = this.n["indexOf"](front);
    var flag = true;
    if (top > 2) {
      top = 5 - top;
      flag = false;
    }
    for (let i = top * 4; i < 12; i++) {
      if (flag && ptrn[i][1] === front) {
        console["log"](this.n[ptrn[i][2]]);
        break;
      } else if (!flag && ptrn[i][2] === front) {
        console.log(this.n[ptrn[i][1]]);
        break;
      }
    }
  };
}
function Main(input) {
  input = input["split"]("\n");
  var dice_a = new dice(input[0].split(" "));
  input["slice"](2, 2 + Number(input[1])).forEach(function (d) {
    t = d["split"](" ");
    dice_a.check(t[0], t[1]);
  });
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
