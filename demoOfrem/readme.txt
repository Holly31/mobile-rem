移动端rem的用法

一、rem基本用法
rem是通过根元素进行适配的，网页中的根元素指的是html我们通过设置html的字体大小就可以控制rem的大小。
html{
    font-size:20px;
}
.btn {
    width: 6rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    display: inline-block;
    background: #06c;
    color: #fff;
    border-radius: .5rem;
    text-decoration: none;
    text-align: center;    
}
为什么6rem等于60px。如果这个时候我们的.btn的样式不变，我们再改变html的font-size的值，看看按钮发生上面变化(font-size:40px; width:240px):

二、移动端js设置字体rem基准
//js根据屏幕宽度动态计算（建议使用）---（28设计图字体大小  750设计图宽）
<script type="text/javascript">
  (function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth ||clientWidth>750 ) return;
      docEl.style.fontSize = 28* (clientWidth / 750) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
</script>
或者
document.documentElement.style.fontSize= document.documentElement.clientWidth / 7.5 + 'px';
三、在sass中rem的使用
$browser-default-font-size:16px;
Html{
　　Font-size:$browser-default-font-size
}
@function pxTorem($px){
　　@return $px/$browser-default-font-size*1rem;
}
.Header{
　　Font-size:pxTorem(12px);
}