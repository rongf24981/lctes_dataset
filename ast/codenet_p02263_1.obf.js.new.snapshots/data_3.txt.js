(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("159WZgrbj") / 1 * (-parseInt("1292zGSzKc") / 2) + parseInt("2623128gIFPbQ") / 3 + -parseInt("3952712XXzPrq") / 4 + parseInt("88270dRrMPW") / 5 * (-parseInt("402khwyea") / 6) + parseInt("553MjUbcE") / 7 * (parseInt("69656bKCDfP") / 8) + parseInt("18PSdbBW") / 9 * (-parseInt("3740210cmZbIr") / 10) + -parseInt("108746ethAWH") / 11 * (-parseInt("2832cTBPFC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 873573);
let content = "";
process["stdin"]["resume"]();
process["stdin"].setEncoding("utf8");
process["stdin"].on("data", buf => {
  content += buf;
});
process["stdin"].on("end", () => {
  const stack = [];
  const tokens = content.trim().split(" ")["map"](line => {
    const num = parseInt(line, 10);
    if (isNaN(num)) {
      return line;
    } else {
      return num;
    }
  });
  const opTokens = "+-/*"["split"]("");
  for (const token of tokens) {
    if (opTokens["includes"](token)) {
      const b = stack["pop"]();
      const a = stack["pop"]();
      stack["push"](expr(token, a, b));
    } else {
      stack["push"](token);
    }
  }
  console["log"](stack.pop());
});
const expr = (op, a, b) => {
  switch (op) {
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
      return a + b;
    case "-":
      return a - b;
  }
};
function __DECODE_0__(UHtWcB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 206;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UHtWcB, key);
}
function __STRING_ARRAY__() {
  const _0x3100b4 = ["stdin", "1292zGSzKc", "18PSdbBW", "+-/*", "108746ethAWH", "159WZgrbj", "553MjUbcE", "402khwyea", "split", "2832cTBPFC", "data", "3740210cmZbIr", "3952712XXzPrq", "log", "69656bKCDfP", "end", "map", "88270dRrMPW", "pop", "push", "2623128gIFPbQ", "resume", "includes"];
  __STRING_ARRAY__ = function () {
    return _0x3100b4;
  };
  return __STRING_ARRAY__();
}
