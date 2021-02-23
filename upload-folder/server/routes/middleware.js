var ONE_YEAR_SECOND  = 60 * 60 * 24 * 365;

exports.CORS = function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.set('Access-Control-Allow-Credentials', 'true');

  if (req.method == "OPTIONS") {
    res.set('Access-Control-Max-Age', ONE_YEAR_SECOND);
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'content-type');
    res.send('ok');
  } else {
    next();
  }
}
