(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("8199tRddhJ") / 1 * (-parseInt("66fFgzWh") / 2) + parseInt("15YjJAXX") / 3 * (parseInt("249608ULqDWs") / 4) + parseInt("1630195YoioOy") / 5 * (parseInt("6bvWMYl") / 6) + -parseInt("1105384HYkcjc") / 7 + -parseInt("3294136AsEPvr") / 8 + parseInt("511938qHiDYc") / 9 + -parseInt("1669960VtpDUc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 228823);
function main(input) {
  const lines = input["split"]("\n");
  const K = lines[0].split(" ")[1] | 0;
  let arr = new Int32Array(lines[1]["split"](" "));
  let isOk = (t = 0, k = 0) => {
    arr["forEach"](v => {
      let d = v / t | 0;
      if (v === d * t) {
        d--;
      }
      k -= d;
    });
    return k >= 0;
  };
  let l = 0;
  let r = Math.max(...arr);
  let mid = (r + l) * 0.5 | 0;
  let res = r;
  while (l < r) {
    if (isOk(mid, K)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    mid = (r + l) * 0.5 | 0;
  }
  return res;
}
function __DECODE_0__(Ctxyqk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 127;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ctxyqk, key);
}
exports["main"] = main;
function Main(input) {
  console["log"](main(input["trim"]()));
}
if (process.argv[2] !== "test") {
  Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
function __STRING_ARRAY__() {
  const _0x3be7de = ["trim", "log", "1105384HYkcjc", "forEach", "3294136AsEPvr", "/dev/stdin", "249608ULqDWs", "511938qHiDYc", "split", "66fFgzWh", "1630195YoioOy", "1669960VtpDUc", "8199tRddhJ", "main", "6bvWMYl", "readFileSync", "test", "15YjJAXX"];
  __STRING_ARRAY__ = function () {
    return _0x3be7de;
  };
  return __STRING_ARRAY__();
}
