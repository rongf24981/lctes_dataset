function __STRING_ARRAY__() {
  const _0x462a9d = ["44tfUZMW", "959459VXIOLM", "/dev/stdin", "trim", "2BDwPPr", "54QPHlQO", "755010OSZhjg", "521856BXzEgU", "utf8", "6236OXPUEO", "split", "log", "map", "readFileSync", "8277576GRchjf", "6MbJYen", "3280PQFqgK", "39873KAjdIx", "6411391YkXqvL"];
  __STRING_ARRAY__ = function () {
    return _0x462a9d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("959459VXIOLM") / 1 + -parseInt("2BDwPPr") / 2 * (-parseInt("39873KAjdIx") / 3) + -parseInt("6236OXPUEO") / 4 * (-parseInt("3280PQFqgK") / 5) + -parseInt("6MbJYen") / 6 * (-parseInt("6411391YkXqvL") / 7) + -parseInt("521856BXzEgU") / 8 + parseInt("54QPHlQO") / 9 * (parseInt("755010OSZhjg") / 10) + parseInt("44tfUZMW") / 11 * (-parseInt("8277576GRchjf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 539949);
function __DECODE_0__(YpXFbE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 349;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YpXFbE, key);
}
console["log"]((args => {
  const [[N], a] = args["trim"]()["split"]`\n`["map"](r => r["split"]` `["map"](v => v | 0));
  let odd = 0;
  let p4 = 0;
  for (let i = 0; i < N; i++) {
    odd += a[i] & 1;
    p4 += !(a[i] % 4);
  }
  if (odd - (odd + p4 === N) <= p4) {
    return "Yes";
  } else {
    return "No";
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
