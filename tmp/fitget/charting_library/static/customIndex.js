let str =''
switch(this.language){
    case 'zh':
      str = '涨跌幅 ( % )';
      break;
    case 'ko':
      str = '상승 및 하강 ( % )';
      break;
    case 'ja':
      str = '上下幅 ( % )';
      break;
    case 'zh_TC':
      str = '漲跌幅 ( % )'
      break;  
    default:
      str = 'Change ( % )';
}
__customIndicators = [
  {
      name: 'Change',
      metainfo: {
          '_metainfoVersion': 40,
          'id': 'ShuBenRSI@tv-basicstudies-1',
          'scriptIdPart': '',
          'name': 'Change',
          'description': 'Change',
          'shortDescription': str,
          'is_hidden_study': true,
          'is_price_study': true,
          'isCustomIndicator': true,
          'plots': [{'id': 'plot_0', 'type': 'line'}],
          'defaults': {
              'styles': {
                  'plot_0': {
                      'visible': false,
                  }
              },
              'precision': 2,
              'inputs': {}
          },
          'styles': {
              'plot_0': {
                  'title': 'Change',
                  'histogrambase': 0,
              }
          },
          'inputs': [],
      },
      constructor: function () {
          this.init = function (context, inputCallback) {
              this._context = context;
              this._input = inputCallback;
              var symbol = PineJS.Std.ticker(this._context); 
              this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
          };
          this.main = function (context, inputCallback) {
              this._context = context;
              this._input = inputCallback;
              this._context.select_sym(1);
              if(this._context['symbol']['time'] != NaN){
                  var C = PineJS.Std.close(this._context);
                  var O = PineJS.Std.open(this._context);
                    let number='';
                    try{
                        number = ( C - O ) / O * 100
                    }catch(e){
                        //TEED 可能开盘毕盘价为NaN
                    }
                  return [number];
              }

          }
      }
  }
];