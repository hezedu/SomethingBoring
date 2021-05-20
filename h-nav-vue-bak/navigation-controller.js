
import TransitionController from './transition-controller';
import { DEF_PAGE_TRANSITION_HANDLE } from '../constant';

function NavigatorController(opt){
  const _Vue = opt._Vue;
  this.pageMap = opt.pageMap;
  this.notFoundPage = opt.notFoundPage;

  

  this.stackMap = Object.create(null);
  this.tabStackMap = Object.create(null);
  this.$set = _Vue.set;
  this.$delete = _Vue.delete;
  this.$nextTick = _Vue.nextTick;
  this._Vue = _Vue;

  this.pageTC = new TransitionController({
    pageTransitionHandle: opt.pageTransitionHandle  || DEF_PAGE_TRANSITION_HANDLE,
    map: this.stackMap,
    _Vue: this._Vue
  });

  this.tabPageTC = new TransitionController({
    map: this.tabStackMap,
    _Vue: this._Vue
  });
  
  this._pageId = 0;
  this._tabCtrlerId = 1;
  
  this._whenPopInfo = null;
}

NavigatorController.prototype.genPageId = function(){
  this._pageId = this._pageId + 1;
  return this._pageId;
}

NavigatorController.prototype.loadPage = function(opt){
  const page = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  });
  this.pageTC.load(page);
  this.$set(this.stackMap, opt.stateKey, page);
}

NavigatorController.prototype.pushPage = function(currStateKey, opt){
  const currPage = this.stackMap[currStateKey];
  const newPage = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  });

  this.pageTC.push(currPage, newPage, () => {
    this.$set(this.stackMap, newPage.stateKey, newPage);
  });
}

NavigatorController.prototype.replacePage = function(opt){
  const currPage = this.stackMap[opt.stateKey];
  const newPage = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  });

  this.pageTC.replace(currPage, newPage);
}

NavigatorController.prototype.backPoped = function(leaveKey, enterKey, reGenOpt){
  const leavePage = this.stackMap[leaveKey];
  let enterPage = this.stackMap[enterKey];
  

  this.pageTC.backPoped(oldKey, currKey, () => {
    const opt = reGenOpt();
    const page = this._createPage({
      route: opt.route,
      stateKey: opt.stateKey
    });
    return page
  });
}

NavigatorController.prototype.relaunch = function(oldKey, opt){
  this._tabCtrlerId = this._tabCtrlerId + 1;
  const page = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  });
  this.pageTC.customPoped(oldKey, opt.stateKey, page, 'relaunch');
}


NavigatorController.prototype.switchTab = function(oldKey, opt){
  
  const page = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  });
  this._Vue.set(this.tabStackMap, page.tabIndex, page);
  this.pageTC.switchTab(oldKey, opt.stateKey, page);

}

NavigatorController.prototype.tabInnerSwitch = function(opt){
  const currTabIndex = this.stackMap[opt.stateKey].tabIndex;
  const page = this._createPage({
    route: opt.route,
    stateKey: opt.stateKey
  })
  this.tabPageTC.tabInnerSwitch(currTabIndex, page.tabIndex, page);
  this._Vue.set(this.stackMap, opt.stateKey, page);
}

NavigatorController.prototype._createPage = function({route, stateKey}){

  let pageConfig = this.pageMap[route.trimedPath] || this.notFoundPage;
  const isTab = pageConfig.isTab;
  const stackId = isTab ? 'tab_ctrler_' + this._tabCtrlerId : 'page_' + this.genPageId();
  const page = {
    stackId,
    isLoad: true,
    isActive: true,
    willCleared: false,

    transition: null,
    cmptKey: pageConfig.cmptKey,
    isTab,
    tabIndex: pageConfig.tabIndex,
    pageProps: {
      stateKey,
      path: pageConfig.path,
      title: pageConfig.title,
      name: pageConfig.name,
      className: pageConfig.className,
      route
    }
  }
  return page;
}









module.exports = NavigatorController;