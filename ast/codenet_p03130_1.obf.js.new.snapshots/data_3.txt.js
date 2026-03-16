'use strict';

function __DECODE_0__(BpDdbS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 349;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BpDdbS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1667823mmOoVe") / 1 + parseInt("264810Lfuvlt") / 2 * (parseInt("39jjWlxA") / 3) + -parseInt("118076LPvnFV") / 4 * (parseInt("110OqwpIs") / 5) + parseInt("3748254DyfKHu") / 6 + -parseInt("1546188VXtiLX") / 7 + parseInt("678416PJjXOc") / 8 + -parseInt("23778UyILVk") / 9 * (parseInt("8750obEzCz") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 916547);
function I(s, f) {
  this._s = s;
  this._c = 0;
  this._l = 0;
  this._f = f || Number;
}
I["prototype"].a = function () {
  var l = this._s["split"]("\n")[this._l];
  if (!l) {
    return;
  }
  var t = l.trim().split(" ");
  var a = t[this._c];
  this._c++;
  if (t["length"] === this._c) {
    this._c = 0;
    this._l++;
  }
  return this._f(a);
};
function __STRING_ARRAY__() {
  var _0x11e8b3 = ["39jjWlxA", "8750obEzCz", "/dev/stdin", "length", "split", "readFileSync", "log", "3748254DyfKHu", "fill", "23778UyILVk", "118076LPvnFV", "YES", "1546188VXtiLX", "join", "110OqwpIs", "264810Lfuvlt", "1667823mmOoVe", "678416PJjXOc", "sort", "prototype"];
  __STRING_ARRAY__ = function () {
    return _0x11e8b3;
  };
  return __STRING_ARRAY__();
}
I["prototype"].l = function () {
  var l = this._s["split"]("\n")[this._l];
  this._c = 0;
  this._l++;
  return l["split"](" ").map(this._f);
};
function main(input) {
  const o = new I(input);
  const arr = Array(4)["fill"](0);
  for (let i = 0; i < 3; i++) {
    let a = o.a();
    let b = o.a();
    arr[a - 1]++;
    arr[b - 1]++;
  }
  if (arr["sort"]((a, b) => a - b)["join"](" ") === "1 1 2 2") {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
