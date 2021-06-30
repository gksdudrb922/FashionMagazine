function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var date = userDate.split('/');
  return date[2].concat(('0'+date[0]).slice(-2),('0'+date[1]).slice(-2));
}

console.log(formatDate("12/31/2014"));
