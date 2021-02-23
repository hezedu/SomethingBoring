
(function() {
  

  const testData = [
    {x: 0, y: 0, w: 400, h:400},
    {x: 700, y: 0, w: 300, h: 500},
    {x: 100, y: 600, w: 200, h: 300}
  ];
  var main = $('#content');
  
  const container = {
    w: main.width(),
    h: main.height(),
  }
  const unit = 100;
  const testWLen = Math.floor(container.w / unit);
  const testHLen = Math.floor(container.h / unit);
  const total = testWLen * testHLen;
  const testInput = {w: 300, h: 300};
  
  
  var map = forMat(testData, unit, testWLen);
  
  
  for(let i = 0; i < total; i++){
    var style = map[i] ? 'hit' : ''
    main.append('<div class="min-block '+ style +'">' + i + '</div>')
  }
  
  const xy = alwayLeftTop({
    data: testData, 
    unit,
    container, 
    input: testInput
  });
  if(xy) {
    main.append(`<div class="test-block test-block4" style="top: ${xy.y}px; left:${xy.x}px; width: ${testInput.w}px; height: ${testInput.h}px;"></div>`)
  }

  
  })();