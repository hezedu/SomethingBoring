(function(){
  const MAIN = document.getElementById('main');
  const PAGE_SIZE = 10;
  let page = 0;
  const MAX_PAGE = 3;
  function genList(page){
    let i = 0;
    const list = [];
    let size = PAGE_SIZE;
    if(page === MAX_PAGE){
      size = 8;
    }
    for(; i < size; i++){
      list.push({
        text: i,
        page: page
      });
    }
    return list;
  }

  function genItem({text, page}){
    const d = document.createElement('div');
    d.className = 'item';
    d.textContent = page + '-' + text;
    return d;
  }

  const infiniSsroll = new window.InfiniScroll({
    el: MAIN,
    pageSize: PAGE_SIZE,
    domPageLimit: 2,
    loadData: (page, callback) => {
      setTimeout(() => {
        callback(null, {
          data: genList(page)
        });
      }, 500)
    },
    render: genItem,
    notMoreRender: genNotMoreEl,
    errRender: genErrRender
  });
  
  function genErrRender(err){
    const el = document.createElement('div');
    el.textContent = 'error: ' + err.code;
    el.style.textAlign = 'center';
    el.style.color = 'red';
    return el;
  }
  function genNotMoreEl(isToTop){

    const text = isToTop ? '到顶了' : '到底了';

    const el = document.createElement('div');
    el.textContent = text;
    el.style.textAlign = 'center';
    return el;
  }

  document.getElementById('unBind').addEventListener('click', () => {
    infiniSsroll.destroy();
  })
})();