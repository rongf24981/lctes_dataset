(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("26823FDwlwU") / 1 * (parseInt("8WGKFBU") / 2) + parseInt("669006yRsjvB") / 3 + parseInt("887776zIwvfD") / 4 * (-parseInt("5qVHKwP") / 5) + -parseInt("4830810ANyHLg") / 6 + -parseInt("7UdTEMi") / 7 * (parseInt("6617392TPoYqv") / 8) + parseInt("8136297VgKkvs") / 9 + -parseInt("13490TgsbQg") / 10 * (-parseInt("12529UBuDip") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 702001);
function __DECODE_0__(fOCKhw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 407;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fOCKhw, key);
}
function Main(input) {
  'use strict';

  const temp = input["split"]("\n");
  const s = temp["shift"]().split();
  const q = parseInt(temp.shift());
  const queries = temp.map(query => query.split(" "));
  let reverse_flag = 0;
  for (let i = 0; i < q; i++) {
    const query = queries[i];
    if (query.length == 1) {
      reverse_flag = (reverse_flag + 1) % 2;
    } else if (query["length"] == 3) {
      if (reverse_flag + parseInt(query[1]) % 2 == 0) {
        s["push"](query[2]);
      } else {
        s["unshift"](query[2]);
      }
    }
  }
  if (reverse_flag) {
    console["log"](s["reverse"]().join("") + "\n");
  } else {
    console.log(s["join"]("") + "\n");
  }
}
function __STRING_ARRAY__() {
  const _0x5ea24d = ["8136297VgKkvs", "887776zIwvfD", "13490TgsbQg", "readFileSync", "length", "reverse", "669006yRsjvB", "utf8", "6617392TPoYqv", "unshift", "shift", "12529UBuDip", "26823FDwlwU", "split", "7UdTEMi", "8WGKFBU", "4830810ANyHLg", "join", "5qVHKwP", "/dev/stdin", "push", "log"];
  __STRING_ARRAY__ = function () {
    return _0x5ea24d;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
