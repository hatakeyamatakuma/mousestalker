//使用PC MAC

// マウスストーカーになる要素を指定
const stalker = "#stalker";
// マウスストーカーが機能する要素を指定
const area = window;

//位置情報の取得のための変数
const size = parseInt($(stalker).css("width").replace(/px/, ""));
const posX = parseInt($(stalker).css("left").replace(/px/, ""));
const cssPosAjust = posX + (size / 2);
let scale = 1;

// カーソルを追いかける処理
$(area).hover(function(){
  $(area).mousemove(function(e){
    let x = e.clientX - cssPosAjust;
    let y = e.clientY - cssPosAjust;
    $(stalker).css({
      "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
    });
  });
});