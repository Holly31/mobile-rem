<!DOCTYPE html >
<html>
    <head>
    <link rel="shortcut icon" href="/Images/logo.ico">
    <link rel="Bookmark" href="/Image/logo.ico">
    <meta charset="UTF-8">
    <title></title>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="telephone=no" name="format-detection">
    <meta content="email=no" name="format-detection" />
    <link rel="stylesheet" type="text/css" href="../Css/memberService.css">
    </head>

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
    <body>
	<input type="hidden" id="wechatCode" value="${code}">
	<input type="hidden" id="phoneNum" value="${phoneNum}"/>
    	<section class="hy-banner">
    		<img src="../Images/lyban.png?v=3dad50a941" alt="">
    	</section>
    	<section class="memberServBox">
    		<h2>五大真实数据 保护您的权益</h2>
    		<ul>
    			<li>
    				<h3>权威转让费评估报告</h3>
    				<p>平台依托商铺大数据，结合专业分析师，及其他合作平台数据，准确获得商铺实际市场价格</p>
    			</li>
    			<li>
    				<h3>租金 / 转让费</h3>
    				<p>平台所发布的商铺租金/转让费为真实业主报价，不存在虚报价格</p>
    			</li>
    			<li>
    				<h3>业主联系方式</h3>
    				<p>平台所有联系方式，均为顾问一对一核查后的真实业主号码</p>
    			</li>
    			<li>
    				<h3>实景拍摄图片</h3>
    				<p>平台商铺展示的所有图片，均为顾问实地拍摄所得，真实可靠</p>
    			</li>
    			<li style="margin-bottom: 0;">
    				<h3>商铺信息描述</h3>
    				<p>平台所有商铺息，均为业主反馈真实信息</p>
    			</li>
    		</ul>
    	</section>
    	<section class="memberServBox">
    		<h2>会员服务内容</h2>
    		<ul class="service-lis">
    			<li >
    				8个真实有效的铺源详情查看权限
    			</li>
    			<li >
    				8个直接与业主联系的特权
    			</li>
    			<li>
    				8个铺位转让费评估报告<span>（内含周边人流、转让费、租金分析）</span>
    			</li>
    			<li >
    				8个铺位顾问电话免费咨询服务
    			</li>
    		</ul>
    	</section>
    	<section class="fixBottom clearfix">
    		<div class="left"><span>¥ 188</span>服务有效期为 1 个月</div>
    		<div class="right buynow" data="mpro1" onclick="setType(this)">提交订单，立即购买</div>
    	</section>
    	<div class="loginshade">
		    <div class="loginsection">
		        <div class="login-title">
		            	验证手机并提交订单
		        </div>
		        <div class="login-body">
		            <div class="enterphone">
		                <span class="must-text">手机号码为空</span>
		                <input type="tel" name="phone" placeholder="请输入手机号" value="${phoneNum}" autocomplete="off" id="phoneNumInput"  maxlength="11">
		            </div>
		            <div class="code">
		                <div class="entercode">
		                    <span class="must-text">验证码为空</span>
		                    <input type="number" name="code" placeholder="输入验证码" autocomplete="off"  id="codeInput">
		                </div>
		                <div class="getcoded btn" id="getCodeBtn">
		                    获取验证码
		                </div>
		            </div>
		            <div class="loginbtn">
		                支付
		            </div>
		            <div class="loginclose">
						
		            </div>
		        </div>
		    </div>
		</div>
 	</body>
</html>
<script type="text/javascript"  src='../Js/zepto.js'></script>
<script type="text/javascript"  src='../Js/memberService.js?v=7d2a608395'></script>