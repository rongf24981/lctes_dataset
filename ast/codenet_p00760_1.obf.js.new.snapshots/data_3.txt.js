(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("173264YbKJpk") / 1 + -parseInt("511714jEFuVC") / 2 + -parseInt("318879JvcQyk") / 3 + -parseInt("4aNuCZU") / 4 * (parseInt("119585WfEUDy") / 5) + -parseInt("30EZmVdD") / 6 * (-parseInt("663103EhviUW") / 7) + parseInt("3485664PbvfeT") / 8 + parseInt("27oPWfkm") / 9 * (-parseInt("215820UgRYar") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 285276);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
const lines = input["trim"]()["split"]("\n");
const nextDay = (y, m, d) => {
  d = d + 1;
  if (y % 3 === 0) {
    if (d > 20) {
      d = 1;
      m += 1;
      if (m === 11) {
        m = 1;
        y++;
      }
    }
  } else if (d > 20) {
    d = 1;
    m += 1;
    if (m === 11) {
      m = 1;
      y++;
    }
  } else if (d > 19 && m % 2 === 0) {
    d = 1;
    m += 1;
    if (m === 11) {
      m = 1;
      y++;
    }
  }
  return [y, m, d];
};
function __STRING_ARRAY__() {
  const _0x707991 = ["30EZmVdD", "readFileSync", "map", "119585WfEUDy", "4aNuCZU", "663103EhviUW", "utf8", "split", "forEach", "511714jEFuVC", "173264YbKJpk", "3485664PbvfeT", "27oPWfkm", "/dev/stdin", "318879JvcQyk", "215820UgRYar", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x707991;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rkbOEK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 299;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rkbOEK, key);
}
lines.shift();
lines["forEach"](line => {
  let [y, m, d] = line["trim"]()["split"](" ")["map"](Number);
  let count = 1;
  while (y !== 1000 || m !== 1 || d !== 1) {
    [y, m, d] = nextDay(y, m, d);
    count++;
  }
  console.log(count - 1);
});
