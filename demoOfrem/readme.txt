�ƶ���rem���÷�

һ��rem�����÷�
rem��ͨ����Ԫ�ؽ�������ģ���ҳ�еĸ�Ԫ��ָ����html����ͨ������html�������С�Ϳ��Կ���rem�Ĵ�С��
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
Ϊʲô6rem����60px��������ʱ�����ǵ�.btn����ʽ���䣬�����ٸı�html��font-size��ֵ��������ť��������仯(font-size:40px; width:240px):

�����ƶ���js��������rem��׼
//js������Ļ��ȶ�̬���㣨����ʹ�ã�---��28���ͼ�����С  750���ͼ��
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
����
document.documentElement.style.fontSize= document.documentElement.clientWidth / 7.5 + 'px';
������sass��rem��ʹ��
$browser-default-font-size:16px;
Html{
����Font-size:$browser-default-font-size
}
@function pxTorem($px){
����@return $px/$browser-default-font-size*1rem;
}
.Header{
����Font-size:pxTorem(12px);
}