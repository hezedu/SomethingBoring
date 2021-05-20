import {noop, genPageTransiton, genTrueMap} from './util';
function TransitionController(opt){
  this.map = opt.map;
  this.$set = opt._Vue.set;
  this.$delete = opt._Vue.delete;
  this.$nextTick = opt._Vue.nextTick;
  this.transitionHandle = opt.transitionHandle || noop;
}

TransitionController.prototype.initPageTransiton = function(v, opt){
  const raw = this.transitionHandle({
    behavior: opt.behavior,
    direction: opt.direction,
    distance: opt.distance,
    stateKey: v.pageProps.stateKey,
    pageName: v.pageProps.name
  });
  v.transiton = genPageTransiton(raw);
}

TransitionController.prototype.setItem = function(key, v){
  this.$set(this.map, key, v);
}

TransitionController.prototype.load = function(key, newPage){
  this.initPageTransiton(newPage, {
    direction: 'enter',
    behavior: 'loaded',
    distance: 0
  });
}

TransitionController.prototype.push = function(currPage, newPage, callback){
  const behavior = 'push';
  const distance = 1;
  this.initPageTransiton(currPage, {
    direction: 'leave',
    behavior,
    distance
  });
  this.initPageTransiton(newPage, {
    direction: 'enter',
    behavior,
    distance
  });
  this.$nextTick(() => {
    currPage.isActive = false;
    callback();
  });
}

TransitionController.prototype.replace = function(currPage, newPage){
  const behavior = 'replace';
  const distance = 0;
  this.initPageTransiton(currPage, {
    direction: 'leave',
    behavior,
    distance
  });
  this.initPageTransiton(newPage, {
    direction: 'enter',
    behavior,
    distance
  });
  this.$nextTick(() => {
    currPage.isActive = false;
    this.$nextTick(() => {
      currPage.isLoad = false;
      Object.assign(currPage, newPage);
    })
  })
}

TransitionController.prototype.clearOtherAndNextTick = function(callback, omitKeys = []){
  const map = this.map;
  let i, v;
  const omitMap = genTrueMap(omitKeys);
  const shouldClearMap = Object.create(null);
  
  for(i in map){
    v = map[i];
    if(!omitMap[i]){
      v.willCleared = true;
      shouldClearMap[i] = true;
    }
  }
  this.$nextTick(() => {
    for(i in shouldClearMap){
      map[i].isLoad = false;
      this.$delete(map, i);
    }
    callback();
  })
}


TransitionController.prototype.backPoped = function(oldKey, currKey, reNewPageFallback){

  const distance = currKey - oldKey;
  
  const behavior = distance <  0 ? 'back' : 'forward';

  let oldPage = this.map[oldKey];

  this.initPageTransiton(oldPage, {
    direction: 'leave',
    behavior,
    distance
  });

  let currPage = this.map[currKey];
  let isReNew = currPage === undefined;
  if(isReNew){
    currPage = reNewPageFallback();
  }
  this.initPageTransiton(currPage, {
    direction: 'enter',
    behavior,
    distance,
    isReNew
  });

  this.$nextTick(() => {
    oldPage.isActive = false;
    if(!isReNew){
      currPage.isActive = true;
    } else {
      this.setItem(currKey, currPage);
    }
    this.$nextTick(() => {
      oldPage.isLoad = false;
      this.$delete(this.map, oldKey);
      this._clearAfter(currKey);
    });
  })
}


TransitionController.prototype.relaunch = function(oldKey, currKey, newPage){

  const distance = currKey - oldKey;
  const behavior = 'relaunch';

  const oldPage = this.map[oldKey];
  this.initPageTransiton(oldPage, {
    direction: 'leave',
    distance,
    behavior
  });
  this.initPageTransiton(newPage, {
    direction: 'enter',
    distance,
    behavior
  });
  this.clearOtherAndNextTick(() => {
    oldPage.isActive = false;
    this.setItem(currKey, newPage);

    this.$nextTick(() => {
      oldPage.isLoad = false;
      this.$delete(this.map, oldKey);
    })

  }, [oldKey])
}

TransitionController.prototype.switchTab = function(oldKey, currKey, newPage){

  const distance = currKey - oldKey;
  const behavior = 'switchTab';
  
  const oldPage = this.map[oldKey];
  this.initPageTransiton(oldPage, {
    direction: 'leave',
    distance,
    behavior
  });

  this.initPageTransiton(newPage, {
    direction: 'enter',
    distance,
    behavior
  });

  this.clearOtherAndNextTick(() => {
    oldPage.isActive = false;
    this.setItem(currKey, newPage);
    this.$nextTick(() => {
      oldPage.isLoad = false;
      this.$delete(this.map, oldKey);
    })

  }, [currKey, oldKey])
}

TransitionController.prototype.tabInnerSwitch  = function(oldTabIndex, currTabIndex, newPage){
  const distance = currTabIndex - oldTabIndex;
  const behavior = 'switch';
  const oldPage = this.map[oldTabIndex];
  this.initPageTransiton(oldPage, {
    direction: 'leave',
    distance,
    behavior
  })
  this.initPageTransiton(newPage, {
    direction: 'enter',
    distance,
    behavior
  });
  this.$nextTick(() => {
    oldPage.isActive = false;
    this.$set(this.map, currTabIndex, newPage);
  })
}

TransitionController.prototype._clearAfter = function(currKey){
  const map = this.map;
  const arr = [];
  let i;
  for(i in map){
    if(Number(i) > currKey){
      map[i].willCleared = true; // v-if leaved page won't work.
      arr.push(i);
    }
  }
  if(!arr.length){
    return;
  }
  this.$nextTick(() => {
    i = 0;
    let len = arr.length, k;
    for(; i < len; i++){
      k = arr[i];
      map[k].isLoad = false;
      this.$delete(map, k);
    }
  })
}







export default TransitionController;