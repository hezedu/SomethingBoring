
function notEmpty(str){
  if(/^\s*$/.test(str)){
    return '该项不可为空'
  }
  return '';
}
const verifyHash = {
  notEmpty
}

function getVerifyFn(v){
  if(typeof(v) === 'function'){
    return v;
  }
  return verifyHash[v];
}
//=====

function Form(data){
  this.verify = data.verify || {};
  this.verifyLen = 0;
}

Form.verifyMethods = verifyHash;

Form.prototype.add = function(k, v){
  const fn = this.getFn(k);
  const result = fn(v);
  if(fn(v)){
    this.verifyLen++;
  }
  return result;
}

Form.prototype.getFn = function(k){
  return getVerifyFn(this.verify[k]);
}

Form.prototype.after = function(num){
  let len = this.verifyLen + num;
  if(len < 0) return;
  this.verifyLen = len;
}

function Item(k, form){
  this.name = k;
  this.status = 0;
  this.msg = '';
  this.form = form;
}

Item.prototype.trigger = function(v){
  const {name, status, form} = this;
  const fn = getFn.getFn(name);
  const msg = fn(v);
  if(msg){
    if(status !== 2){
      this.status = 2;
      this.msg = msg;
      if(status !== 0){
        form.after(1);
      }
    }
  }else{
    if(status !== 1){
      this.status = 1;
      form.after(-1);
    }
  }
}
