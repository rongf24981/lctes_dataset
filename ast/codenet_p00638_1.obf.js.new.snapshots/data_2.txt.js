(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x13e)) / 0x1 + -parseInt(__DECODE_0__(0x13c)) / 0x2 + parseInt(__DECODE_0__(0x148)) / 0x3 * (parseInt(__DECODE_0__(0x139)) / 0x4) + parseInt(__DECODE_0__(0x142)) / 0x5 + -parseInt(__DECODE_0__(0x140)) / 0x6 * (parseInt(__DECODE_0__(0x144)) / 0x7) + -parseInt(__DECODE_0__(0x143)) / 0x8 * (-parseInt(__DECODE_0__(0x13d)) / 0x9) + -parseInt(__DECODE_0__(0x146)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ac0a);
var n;
var x = [];
function main() {
  while (n = scan()) {
    rep(n, function (i) {
      x[i] = [scan(), scan()];
    });
    x[__DECODE_0__(0x138)](function (a, b) {
      return a[0x1] - b[0x1];
    });
    var ans = !![];
    var w = 0x0;
    rep(n, function (i) {
      w += x[i][0x0];
      ans = w <= x[i][0x1] && ans;
    });
    print(ans ? __DECODE_0__(0x137) : 'No');
  }
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
process['stdin'][__DECODE_0__(0x145)]();
process[__DECODE_0__(0x141)][__DECODE_0__(0x149)](__DECODE_0__(0x13b));
var input = '';
var input_index = 0x0;
function __STRING_ARRAY__() {
  var _0x3f887f = ['setEncoding', 'trim', 'Yes', 'sort', '31476VDOCgQ', 'split', 'utf8', '18004STgXyf', '1368414jBlEVn', '256101DhsxZR', 'string', '641052zQyIyP', 'stdin', '5211920VyqqyT', '56yMCyLm', '49Gzdhlc', 'resume', '13201480tmFLZt', 'data', '303JEuNgp'];
  __STRING_ARRAY__ = function () {
    return _0x3f887f;
  };
  return __STRING_ARRAY__();
}
function scan(type) {
  if (type === __DECODE_0__(0x13f)) {
    return input[input_index++];
  } else {
    return +input[input_index++];
  }
}
function print(val) {
  console['log'](val);
}
function __DECODE_0__(FNRcEL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x137;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FNRcEL, key);
}
process[__DECODE_0__(0x141)]['on'](__DECODE_0__(0x147), function (chunk) {
  input += chunk;
});
process['stdin']['on']('end', function () {
  input = input[__DECODE_0__(0x14a)]()[__DECODE_0__(0x13a)](/\s+/);
  main();
});
