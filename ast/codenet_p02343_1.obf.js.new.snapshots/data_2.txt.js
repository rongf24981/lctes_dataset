(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x9c)) / 0x1 + -parseInt(__DECODE_0__(0x90)) / 0x2 + -parseInt(__DECODE_0__(0x9d)) / 0x3 * (parseInt(__DECODE_0__(0x98)) / 0x4) + parseInt(__DECODE_0__(0x92)) / 0x5 + -parseInt(__DECODE_0__(0x97)) / 0x6 + parseInt(__DECODE_0__(0x9e)) / 0x7 + parseInt(__DECODE_0__(0x95)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4bb7c);
const findSet = p => {
  return x => {
    if (x != p[x]) {
      p[x] = findSet(p)(p[x]);
    }
    return p[x];
  };
};
const link = (p, r) => {
  return (x, y) => {
    if (r[x] > r[y]) {
      p[y] = x;
    } else {
      p[x] = y;
      if (r[x] === r[y]) {
        r[y]++;
      }
    }
  };
};
const dsFactory = n => {
  this['p'] = [];
  this['r'] = [];
  for (let i = 0x0; i < n; i++) {
    this['p'][i] = i;
    this['r'][i] = 0x0;
  }
  this[__DECODE_0__(0x8f)] = findSet(this['p']);
  this[__DECODE_0__(0x96)] = link(this['p'], this['r']);
  return {
    'same': (x, y) => this[__DECODE_0__(0x8f)](x) === this[__DECODE_0__(0x8f)](y),
    'unite': (x, y) => this[__DECODE_0__(0x96)](this[__DECODE_0__(0x8f)](x), this[__DECODE_0__(0x8f)](y))
  };
};
function __STRING_ARRAY__() {
  const _0x56b76f = ['readFileSync', '12876864MTshUy', 'link', '3520350peKhJF', '547772kYgOTk', 'split', 'map', 'unite', '415916hugIxO', '6EBQUmr', '1122072IeKUzK', 'same', 'findSet', '599702xsXICv', 'utf8', '583070AcxNXD', 'forEach'];
  __STRING_ARRAY__ = function () {
    return _0x56b76f;
  };
  return __STRING_ARRAY__();
}
const input = require('fs')[__DECODE_0__(0x94)]('/dev/stdin', __DECODE_0__(0x91));
const lines = input['split']('\x0a');
const [n, q] = lines['shift']()[__DECODE_0__(0x99)]('\x20')[__DECODE_0__(0x9a)](Number);
function __DECODE_0__(LWsVwg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LWsVwg, key);
}
const ds = dsFactory(n);
lines[__DECODE_0__(0x93)](x => {
  const [t, a, b] = x[__DECODE_0__(0x99)]('\x20')[__DECODE_0__(0x9a)](Number);
  switch (t) {
    case 0x0:
      ds[__DECODE_0__(0x9b)](a, b);
      break;
    case 0x1:
      const ret = ds[__DECODE_0__(0x8e)](a, b) ? 0x1 : 0x0;
      console['log'](ret);
      break;
  }
});
