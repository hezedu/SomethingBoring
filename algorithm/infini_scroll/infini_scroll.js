// TODO
// memonyLimit
// load abort
// load no repect
// startLoad not 1
(function(){
  const IS = window.InfiniScroll = function({el, 
        pageSize, 
        loadData, 
        render, 
        domPageLimit = 2,
      notMoreRender,
      errRender}){
    this.dom = el;
    this.edgeDist = 200;
    this._preScorllTop = el.scrollTop;
    this._currScrollTop = el.scrollTop;
    this._scrollVertical = 0;
    this._isScrollToTop = false;
    this._start = 2;
    this._end = 0;
    this.pageSize = pageSize;
    this._total = Infinity;

    this._notMoreTopEl = null;
    this._notMoreEndEl = null;
    this._notMoreRender = notMoreRender;
    
    this._loadingEl = null;

    this._scrollEventHandle = null;
    this._loadData = loadData;
    this._render = render;
    this._errRender = errRender;
    this.dataCache = [];
    this.domPageLimit = domPageLimit;
    
    this.init();
  }
  

  IS.prototype.init = function(){
    this._scrollEventHandle = (e) => {

      this.scrollEventHandle(e);
    }
    this.dom.addEventListener('scroll', this._scrollEventHandle);

    this.load(this._start);
  }

  IS.prototype.destroy = function(){
    if(this.dom){
      this.dom.removeEventListener('scroll', this._scrollEventHandle);
      this._scrollEventHandle = null;
      this.dom = null;
    }
  }



  IS.prototype._setDirection = function(){
    this._scrollHorizontal = this._currScrollTop - this._preScorllTop;
    this._preScorllTop = this._currScrollTop;
    this._isScrollToTop = this._scrollHorizontal < 0;

  }
  IS.prototype.scrollEventHandle = function(e){
    

    const el = e.srcElement;
    this._currScrollTop = el.scrollTop;
    this._setDirection();
    if(this._isScrollToTop){
      if(el.scrollTop <= this.edgeDist){
        this.load(this._start - 1);
      }
    } else {
      if(el.scrollTop + el.clientHeight + this.edgeDist >= el.scrollHeight){
        this.load(this._end + 1);
      }
    }
  }
  IS.prototype.__loadData = function(page, isStart){
    this.hideNotMore(isStart);
    this.showLoading(isStart);
    console.log('__loadData', page);
    
    this._loadData(page, (err, {data}) => {

      if(data.length < this.pageSize){
        this._total = page;
      }
      const needRemoveDom = this.dataCache.length === this.domPageLimit;
      console.log('needRemoveDom', needRemoveDom, 'dataCache.length', this.dataCache.length, 'domPageLimit', this.domPageLimit);

      if(isStart){
        // let loadingH = this._loadingEl.clientHeight;
        
        this._start = page;
        if(needRemoveDom){
          let i = 0; 
          const _max = this.dataCache.pop().length + 1;
          for(; i < _max; i++){
            this.dom.lastChild.remove();
          }
          this._end = this._end - 1;
          console.log('removed ', _max);
        } 
        const scrollTop = this.dom.scrollTop;
        const h = this.dom.scrollHeight;
        this.hideLoading(isStart);


        this.dataCache.unshift(data);
        data.reverse().forEach(item => {
          this.dom.prepend(this._render(item));
        });
        
        this.dom.scrollTop = scrollTop + (this.dom.scrollHeight - h);
      } else {
        this.hideLoading(isStart);
        this._end = page;
        this.hideLoading(isStart);
        if(needRemoveDom){
          let i = 0;
          const _max = this.dataCache.shift().length + 1;
          for(; i < _max; i++){
            this.dom.firstChild.remove();
          }
          this._start = this._start + 1;
          console.log('removed ', _max);
        }
        this.dataCache.push(data);
        data.forEach(item => {
          this.dom.append(this._render(item));
        });
        
      }
    });
  }
  IS.prototype.load = function(page){
    if(this._loadingEl){
      return;
    }
    if(this._isScrollToTop){
      if(page < 1){
        if(this._notMoreTopEl){
          return;
        }
        this.showNotMore(true);
      } else {
        this.__loadData(page, true);
      }
    } else {
      if(page > this._total){
        if(this._notMoreEndEl){
          return;
        }
        this.showNotMore(false);
      } else {
        this.__loadData(page, false);
      }
    }
  }

  IS.prototype.showLoading = function(isToTop){
    const el = document.createElement('div');
    el.textContent = 'Loading...';
    el.style.textAlign = 'center';
    this._loadingEl = el;
    if(isToTop){
      this.dom.prepend(el);
    } else {
      this.dom.append(el);
    }
  }

  IS.prototype.hideLoading = function(isToTop){
    if(this._loadingEl){
      this._loadingEl.remove();
      this._loadingEl = null;
    }
  }

  IS.prototype.showNotMore = function(isToTop){
    if(isToTop){
      this._notMoreTopEl = this._notMoreRender(isToTop);
      this.dom.prepend(this._notMoreTopEl);
    } else {
      this._notMoreEndEl = this._notMoreRender(isToTop);
      this.dom.append(this._notMoreEndEl);
    }
  }
  IS.prototype.hideNotMore = function(isToTop){
    if(isToTop){
      if(this._notMoreTopEl){
        this._notMoreTopEl.remove();
        this._notMoreTopEl = null;
      }
    } else {
      if(this._notMoreEndEl){
        this._notMoreEndEl.remove();
        this._notMoreEndEl = null;
      }
    }
  }

})();

  // let ticking = false;
    //   if (!ticking) {
  //     window.requestAnimationFrame(function() {
  //       console.log('ticking')
  //       ticking = false;
  //     });
      
  //     ticking = true;
  //   }
  // }