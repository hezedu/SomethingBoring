function formatMoney(num) {
  num = num.toString();
  num = num.split('.');
  let _int = num[0];
  let sign = '';
  if (_int[0] === '-') {
    sign = _int[0];
    _int = _int.substr(1);
  }
  let len = _int.length;
  if(len > 3){
    let result = [];

    let i = 0;
    for (; len >= 0; len = len - 1) {
      result.unshift(_int[len]);
      if (i === 3) {
        result.unshift(',');
        i = 0;
      }
      i++;
    }
    _int = sign + result.join('');
  }

  if (num[1]) {
    return _int + '.' + num[1];
  } else {
    return _int;
  }
}
