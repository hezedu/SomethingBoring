// /mnt/common/git/linux-remote/session-store/node_modules/node-pty
const pty = require('node-pty');
const os = require('os');
if(os.userInfo().uid === 0){
  throw new Error('please run under non-root user.');
}

const term = pty.spawn('./slogin', [], {});

term.on('exit', function(){
  console.log('term exit', arguments);
})

setTimeout(() => {
  term.kill();
  // term.write('\u0003');
  console.log('term kill');
}, 3000);