(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("109550WBPKJK") / 1 + -parseInt("3400462mbAKBQ") / 2 * (-parseInt("3veTgFt") / 3) + parseInt("404004fGmXPX") / 4 + parseInt("70060DquEYO") / 5 * (parseInt("312PLJfkE") / 6) + -parseInt("2625574lZRFhW") / 7 + parseInt("72NkuMeJ") / 8 * (parseInt("1775286KiCdTJ") / 9) + -parseInt("28598740BtMydf") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 960636);
function __DECODE_0__(eioQln, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 172;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eioQln, key);
}
const config = {
  input: "/dev/stdin",
  newline: "\n"
};
const line = require("fs")["readFileSync"](config["input"], "utf-8")["split"](config["newline"]);
const insert = (arr, x) => arr.unshift(x);
const del = (arr, x) => {
  for (var i = 0; i < arr["length"]; i++) {
    if (x === arr[i]) {
      break;
    }
  }
  if (i !== arr["length"]) {
    arr["splice"](i, 1);
  }
};
const delFirst = arr => arr["shift"]();
const delLast = arr => arr.pop();
const cmds = line["slice"](1);
function __STRING_ARRAY__() {
  const _0x1bc900 = ["1775286KiCdTJ", "shift", "3veTgFt", "split", "input", "splice", "/dev/stdin", "slice", "72NkuMeJ", "utf-8", "log", "map", "reduce", "2625574lZRFhW", "3400462mbAKBQ", "109550WBPKJK", "readFileSync", "404004fGmXPX", "28598740BtMydf", "312PLJfkE", "deleteLast", "length", "newline", "70060DquEYO"];
  __STRING_ARRAY__ = function () {
    return _0x1bc900;
  };
  return __STRING_ARRAY__();
}
const ans = cmds["reduce"]((acc, x) => {
  const cmd = x["split"](" ");
  switch (cmd[0]) {
    case "insert":
      insert(acc, parseInt(cmd[1]));
      break;
    case "delete":
      del(acc, parseInt(cmd[1]));
      break;
    case "deleteFirst":
      delFirst(acc);
      break;
    case "deleteLast":
      delLast(acc);
      break;
  }
  return acc;
}, [])["map"](x => x.toString()).join(" ");
console["log"](ans);
