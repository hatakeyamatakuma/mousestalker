//使用PC MAC

// マウスストーカーになる要素を指定
const stalker = "#stalker";
// マウスストーカーが機能する要素を指定
const area = window;

//位置情報の取得のための変数
const stalkerSize = parseInt($(stalker).css("width").replace(/px/, ""));
const stalkerX = parseInt($(stalker).css("left").replace(/px/, ""));
const stalkerPosition = stalkerX + (stalkerSize / 2);
const scale = 1;

// カーソルを追いかける処理
$(area).hover(function(){
  $(area).mousemove(function(e){
    const trackingX = e.clientX - stalkerPosition;
    const trackingY = e.clientY - stalkerPosition;
    $(stalker).css({
      "transform": "translate(" + trackingX + "px," + trackingY + "px) scale(" + scale + ")",
    });
  });
});