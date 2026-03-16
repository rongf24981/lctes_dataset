(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x184)) / 0x1 + parseInt(__DECODE_0__(0x187)) / 0x2 * (-parseInt(__DECODE_0__(0x191)) / 0x3) + -parseInt(__DECODE_0__(0x18a)) / 0x4 * (parseInt(__DECODE_0__(0x183)) / 0x5) + parseInt(__DECODE_0__(0x190)) / 0x6 + -parseInt(__DECODE_0__(0x18c)) / 0x7 + parseInt(__DECODE_0__(0x18f)) / 0x8 * (-parseInt(__DECODE_0__(0x188)) / 0x9) + -parseInt(__DECODE_0__(0x185)) / 0xa * (-parseInt(__DECODE_0__(0x186)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea618);
var n;
var m;
var x = [];
function main() {
  n = scan();
  m = scan();
  rep(n, function (i) {
    x[i] = 0x0;
  });
  rep(m, function (i) {
    var c = scan();
    var d = scan();
    x[c] += 0x1;
    x[d] -= 0x1;
  });
  rep(0x1, n, function (i) {
    x[i] += x[i - 0x1];
  });
  var c = 0x0;
  rep(n, function (i) {
    if (x[i] > 0x0) {
      ++c;
    }
  });
  print(c * 0x2 + n + 0x1);
}
function __STRING_ARRAY__() {
  var _0x503127 = ['8805CokCmU', '362508NsNawQ', '59980190oingaQ', '11IAqlrr', '3463198zNPoBl', '351XKagJI', 'data', '4012oSqYJb', 'reverse', '11318363OTpsyx', 'stdin', 'pop', '119208QUenDm', '1772562EEehtc', '3VvlMAr', 'split', 'setEncoding', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x503127;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DPxXFr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x181;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DPxXFr, key);
}
function rep(a, b, c) {
  if (c === undefined) {
    c = b;
    b = a;
    a = 0x0;
  }
  for (var i = a; i < b; ++i) {
    if (c(i) === ![]) {
      break;
    }
  }
}
var input = '';
function scan() {
  return +input[__DECODE_0__(0x18e)]();
}
function scan_string() {
  return input[__DECODE_0__(0x18e)]();
}
function print(val) {
  console['log'](val);
}
process[__DECODE_0__(0x18d)]['resume']();
process[__DECODE_0__(0x18d)][__DECODE_0__(0x181)]('utf8');
process[__DECODE_0__(0x18d)]['on'](__DECODE_0__(0x189), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x18d)]['on']('end', function () {
  input = input[__DECODE_0__(0x182)]()[__DECODE_0__(0x192)](/\s+/)[__DECODE_0__(0x18b)]();
  main();
});
