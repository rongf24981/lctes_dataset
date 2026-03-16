(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x17f)) / 0x1 * (-parseInt(__DECODE_0__(0x173)) / 0x2) + parseInt(__DECODE_0__(0x17b)) / 0x3 + -parseInt(__DECODE_0__(0x17a)) / 0x4 * (parseInt(__DECODE_0__(0x17c)) / 0x5) + parseInt(__DECODE_0__(0x17d)) / 0x6 + -parseInt(__DECODE_0__(0x177)) / 0x7 + parseInt(__DECODE_0__(0x180)) / 0x8 + parseInt(__DECODE_0__(0x16f)) / 0x9 * (parseInt(__DECODE_0__(0x16e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc9b15);
function main() {
  while (0x1) {
    var n = scan();
    if (n == 0x0) {
      break;
    }
    var x = Array(n);
    rep(n, function (i) {
      x[i] = scan();
    });
    x[-0x1] = 0x0;
    rep(n, function (i) {
      x[i] += x[i - 0x1];
    });
    var a = -Infinity;
    rep(n, function (i) {
      for (var j = i; j < n; ++j) {
        a = Math[__DECODE_0__(0x174)](x[j] - x[i - 0x1], a);
      }
    });
    print(a);
  }
}
function rep(n, func) {
  for (var i = 0x0; i < n; ++i) {
    func(i);
  }
}
process[__DECODE_0__(0x179)][__DECODE_0__(0x171)]();
process[__DECODE_0__(0x179)][__DECODE_0__(0x172)](__DECODE_0__(0x16d));
var input = '';
function __DECODE_0__(PfPgHu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PfPgHu, key);
}
var input_index = 0x0;
function scan(type) {
  if (type === __DECODE_0__(0x178)) {
    return input[input_index++];
  } else {
    return +input[input_index++];
  }
}
function print(val) {
  console[__DECODE_0__(0x176)](val);
}
function __STRING_ARRAY__() {
  var _0x54a4bf = ['13836EXlYyN', 'split', '233qaHXmH', '12430128lNiWkP', 'utf8', '10pStgZc', '2300382tSiAzG', 'end', 'resume', 'setEncoding', '1160juMOeu', 'max', 'data', 'log', '10834824IuLocr', 'string', 'stdin', '45196jBbQXH', '3075318DPOVux', '145KpDrXV'];
  __STRING_ARRAY__ = function () {
    return _0x54a4bf;
  };
  return __STRING_ARRAY__();
}
process['stdin']['on'](__DECODE_0__(0x175), function (chunk) {
  input += chunk;
});
process['stdin']['on'](__DECODE_0__(0x170), function () {
  input = input[__DECODE_0__(0x17e)](/\s+/);
  main();
});
