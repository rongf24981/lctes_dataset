function __STRING_ARRAY__() {
  const _0x480739 = ["/dev/stdin", "8havHWg", "306268rojGBZ", "log", "1054932flYmYv", "1FluytB", "769602abFLvK", "693948fbagDL", "1412720CeehYC", "utf8", "7GdbmrA", "slice", "trim", "push", "map", "1561095deGqbL", "split", "1193301tmbmuB", "some"];
  __STRING_ARRAY__ = function () {
    return _0x480739;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1FluytB") / 1 * (-parseInt("306268rojGBZ") / 2) + parseInt("769602abFLvK") / 3 + parseInt("1054932flYmYv") / 4 + -parseInt("1561095deGqbL") / 5 + parseInt("693948fbagDL") / 6 * (parseInt("7GdbmrA") / 7) + parseInt("8havHWg") / 8 * (-parseInt("1193301tmbmuB") / 9) + parseInt("1412720CeehYC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 179255);
function __DECODE_0__(SNyShp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 208;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SNyShp, key);
}
(args => {
  const [[N, M], ...path] = args["trim"]().split("\n")["map"](a => a["split"](" ")["map"](a => a | 0));
  const dist = [];
  const sign = [0];
  const branch = [];
  for (let i = 1; i <= N; i++) {
    dist[i] = Infinity;
    sign[i] = Infinity;
    branch[i] = [];
  }
  for (let i = 0; i < M; i++) {
    const [A, B] = path[i];
    branch[A]["push"](B);
    branch[B]["push"](A);
  }
  let stack = [];
  function mark(step, i) {
    for (let next of branch[i]) {
      if (dist[next] > step) {
        dist[next] = step;
        sign[next] = i;
        stack["push"](() => mark(step + 1, next));
      }
    }
  }
  mark(0, 1);
  while (stack.length) {
    let s;
    while (s = stack.pop()) {
      s();
    }
  }
  if (sign.slice(2)["some"](v => v > N)) {
    return console.log("No");
  }
  console["log"]("Yes\n" + sign["slice"](2).join("\n"));
})(require("fs").readFileSync("/dev/stdin", "utf8"));
