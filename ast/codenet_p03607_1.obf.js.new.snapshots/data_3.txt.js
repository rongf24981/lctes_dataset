'use strict';

function __STRING_ARRAY__() {
  const _0x5a7f21 = ["has", "6519887PIEJMJ", "3gCMhTE", "488976DupRff", "1281544DrHYmD", "log", "4232980vbNSJo", "delete", "/dev/stdin", "2003283AQWYMh", "296HdnKlO", "30lkOEbw", "52738DMuWdi", "readFileSync", "5GNHuhP", "add", "6829638IudaaM", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x5a7f21;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lkHKBs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 411;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lkHKBs, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("488976DupRff") / 1 + -parseInt("1281544DrHYmD") / 2 + parseInt("3gCMhTE") / 3 * (-parseInt("4232980vbNSJo") / 4) + parseInt("5GNHuhP") / 5 * (parseInt("6829638IudaaM") / 6) + parseInt("52738DMuWdi") / 7 * (-parseInt("296HdnKlO") / 8) + parseInt("2003283AQWYMh") / 9 + parseInt("30lkOEbw") / 10 * (parseInt("6519887PIEJMJ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 672260);
function main(input) {
  input = input.split(/\n/).map(v => ~~v);
  let set = new Set();
  for (let i = 1; i < input.length; i++) {
    if (set["has"](input[i])) {
      set["delete"](input[i]);
    } else {
      set["add"](input[i]);
    }
  }
  console["log"](set.size);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
