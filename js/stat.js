'use strict';

var CANVAS_DATA = {
  top: 10,
  left: 100,
  width: 420,
  height: 270,
  shadowOffset: 10,
  textOffset: 20,
  font: '16px PT Mono',
  you: 'Вы',
  win: 'Ура вы победили!',
  resultList: 'Список результатов:'
};

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CANVAS_DATA.left + CANVAS_DATA.shadowOffset, CANVAS_DATA.top + CANVAS_DATA.shadowOffset, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(CANVAS_DATA.left, CANVAS_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
};
