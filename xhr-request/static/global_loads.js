(function(){

  const map = Object.create(null);
  let _id = 0;
  function genId(){
    _id = _id + 1;
    return 'global_load_' + _id;
  }
  function getSuffix(url){
    const i = url.lastIndexOf('.');
    if(i !== -1){
      return url.substr(i + 1);
    }
    return '';
  }


  function globalLoad(url, callback){
    let item = map[url];
    if(!item){
      const suffix = getSuffix(url);
      if(!suffix){
        throw new Error(url + 'not suffix');
      }
      const isJS = suffix === 'js';
      if(!isJS && suffix !== 'css'){
        throw new Error('Not support suffix: '+ suffix);
      }
      const id = genId();
      item = map[url] = {
        id,
        isJS,
        isStart: false,
        isComplete: false,
        isSuccess: false,
        cbList: []
      }
    }
    if(item.isSuccess){
      callback(null);
    } else if(!item.isStart){
      let dom;
      if(item.isJS){
        dom = document.createElement('script');
        dom.id = item.id;
        dom.src = url; 
      } else {
        dom = document.createElement('link');
        dom.id = item.id;
        dom.rel = 'stylesheet';
        dom.href = url;
      }
      dom.addEventListener('load', function(){
        item.isSuccess = true;
        item.isStart = false;
        item.cbList.forEach(cb => {
          cb(null);
        });
        item.cbList = [];
      });
      dom.addEventListener('error', function(e){
        item.isStart = false;
        item.cbList.forEach(cb => {
          cb(e);
        })
        item.cbList = [];
        dom.remove();
        delete map[url];
      })
      item.isStart = true;
      item.cbList.push(callback);
      if(item.isJS){
        document.body.appendChild(dom);
      } else {
        document.head.appendChild(dom);
      }
    } else {
      item.cbList.push(callback);
    }
  }

  function globalLoads(arr, oneCallback){
    let i = 0;
    const len = arr.length;
    let isDone;
    arr.forEach(url => {
      globalLoad(url, function(error){
        if(isDone){
          return;
        }
        console.log('globalLoad', url)
        isDone = error !== null;
        if(isDone){
          oneCallback({
            url,
            error
          });
          return;
        }
        i = i + 1;
        isDone = i === len;
        if(isDone){
          oneCallback(null);
        }
      })
    })
  }
  window.globalLoads = globalLoads;
})();