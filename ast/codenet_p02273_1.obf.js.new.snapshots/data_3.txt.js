function __STRING_ARRAY__() {
  const _0x3eb3e7 = ["2204510LnEnSN", "8FXXuZu", "utf8", "readFileSync", "1098757FMzsQc", "1736815TVvHdv", "714426VNelzQ", "12yxLGMK", "cos", "6delLJa", "/dev/stdin", "20awAsCA", "2239752tbaRfU", "trim", "toFixed", "9391311WURqSe", "1453084KqznsD", "print"];
  __STRING_ARRAY__ = function () {
    return _0x3eb3e7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1453084KqznsD") / 1 + parseInt("12yxLGMK") / 2 * (-parseInt("714426VNelzQ") / 3) + -parseInt("2239752tbaRfU") / 4 + -parseInt("1736815TVvHdv") / 5 * (-parseInt("6delLJa") / 6) + -parseInt("2204510LnEnSN") / 7 + -parseInt("8FXXuZu") / 8 * (-parseInt("9391311WURqSe") / 9) + parseInt("20awAsCA") / 10 * (parseInt("1098757FMzsQc") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 739980);
function __DECODE_0__(nTQmcp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 409;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nTQmcp, key);
}
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  ["print"]() {
    console.log(this.x["toFixed"](8) + " " + this.y["toFixed"](8));
  }
}
(function main() {
  const n = Number(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
  let p1 = new Point(0, 0);
  let p2 = new Point(100, 0);
  p1.print();
  kock(n, p1, p2);
  p2.print();
})();
function kock(n, p1, p2) {
  const sin60 = Math.sin(Math.PI * 60 / 180);
  const cos60 = Math["cos"](Math.PI * 60 / 180);
  function innerFunc(n, p1, p2) {
    if (!n) {
      return;
    }
    xDiff = p2.x - p1.x;
    yDiff = p2.y - p1.y;
    let s = new Point(p1.x + xDiff / 3, p1.y + yDiff / 3);
    let t = new Point(s.x + xDiff / 3, s.y + yDiff / 3);
    let u = new Point((t.x - s.x) * cos60 - (t.y - s.y) * sin60 + s.x, (t.x - s.x) * sin60 + (t.y - s.y) * cos60 + s.y);
    kock(n - 1, p1, s);
    s["print"]();
    kock(n - 1, s, u);
    u["print"]();
    kock(n - 1, u, t);
    t["print"]();
    kock(n - 1, t, p2);
  }
  kock = innerFunc;
  innerFunc(n, p1, p2);
}
