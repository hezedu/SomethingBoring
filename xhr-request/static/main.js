// request({
//   url: '/api/success',
//   complete: (err, data) => {

//   }
// })
// setInterval(() => {
//   document.getElementById('app').innerText = (new Date().getMilliseconds())
// }, 50);
window.globalLoads([
 
  'static/libs/jquery.js',
  'https://cdn.jsdelivr.net/npm/@linux-remote/client@4.20.0/dist/lr-client.min.css',
  '/static/libs/pako.min.js', 
  ], function(err){
  // console.log('--------- err ---------', err);
});