(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("470097pGJtNC") / 1 + parseInt("572678oTJzOo") / 2 + -parseInt("1312365sZFwBa") / 3 + parseInt("201408CtTqtR") / 4 + -parseInt("10lRTeSt") / 5 * (parseInt("1062690AuYheR") / 6) + parseInt("762328gECapF") / 7 + parseInt("1419632GbmCjh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 301461);
let lines = [];
let reader = require("readline").createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
function __DECODE_0__(BLIkFI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 200;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BLIkFI, key);
}
function __STRING_ARRAY__() {
  const _0x345df5 = ["split", "close", "1419632GbmCjh", "201408CtTqtR", "1062690AuYheR", "includes", "572678oTJzOo", "10lRTeSt", "762328gECapF", "readline", "470097pGJtNC", "push", "stdin", "line", "1312365sZFwBa", "stdout"];
  __STRING_ARRAY__ = function () {
    return _0x345df5;
  };
  return __STRING_ARRAY__();
}
reader.on("line", function (line) {
  lines.push(line);
});
reader.on("close", function () {
  const [n, m] = lines[0]["split"](" ");
  const a = [];
  const b = [];
  for (let i = 0; i < m; i++) {
    [a[i], b[i]] = lines[i + 1]["split"](" ");
  }
  const connected = [];
  connected["push"](a[0]);
  connected["push"](b[0]);
  ans = n - 2;
  for (let i = 1; i < m; i++) {
    if (!connected["includes"](a[i]) && !connected["includes"](b[i])) {
      ans--;
    } else if (!connected.includes(a[i])) {
      ans--;
      connected.push(a[i]);
    } else if (!connected["includes"](b[i])) {
      ans--;
      connected.push(b[i]);
    }
  }
  console.log(ans);
});
