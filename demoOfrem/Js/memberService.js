;(function($){
//alert close
	 $('.loginclose').tap(function(e){
        $('.loginshade').css('display','none');
         e.stopPropagation();
         $('.BuyService').css('pointer-events', 'none');
		 setTimeout(function(){
		    $('.BuyService').css('pointer-events', 'auto');
		 }, 400);
    })
	
	 //立即购买

	//验证登陆
        var $phone=$('#phoneNumInput');//手机号
        var $code=$('#codeInput');     //验证码
        var $codebtn=$('#getCodeBtn')  //获取验证码
        var $savebtn=$('.loginbtn');
        $phone.blur(function(){
            $(this).attr("tip", "1");
            validPhoneNum();
        });
        $phone.keyup(validPhoneNum);
        $code.blur(validCode);
        $codebtn.click(function(){
            getCode();
        })


        function validTip(val,type){
            if(type){
                val.prev().show();
            }else{

                val.prev().hide();
            }

        }

        function validPhoneNum(){
            var phoneNumInput = $phone;
            var phoneNum = phoneNumInput.val();
            validTip(phoneNumInput);
            var $getCodeBtn = $codebtn;
            var phoneRegex = /^[0-9]{11}$/;
            if(!phoneRegex.test(phoneNum)){
                if(phoneNumInput.attr("tip")){
                    validTip(phoneNumInput,1);
                    phoneNumInput.prev().html('请输入正确的手机号');
                }
                if(!phoneNumInput.attr("readonly")){
                    $getCodeBtn.attr("disabled", "disabled");
                    $getCodeBtn.removeClass("enabled");
                }
                return "";
            }
            if(!phoneNumInput.attr("readonly")){
                $getCodeBtn.removeAttr("disabled");
                $getCodeBtn.addClass("enabled");
            }
            return phoneNum;
        }

        function validCode(){
            var codeInput = $("#codeInput");
            var code = codeInput.val();
            validTip(codeInput);
            if(!code || $.trim(code) == ""){
                validTip(codeInput,1);
                return "";
            }
            return code;
        }

        function getCode(){  //获取验证码
            var phoneNum = validPhoneNum();
            if(phoneNum == "") return;
            $.post(
                '/setValidCode',
                {"phoneNum": phoneNum},
                function(data){
                     console.log(data.code)
                    if(data.code == '1'){
                        new RestartGetCodeSchedule(60).start();
                    }else{
                        alert(data.message);
                    }
                },
                'json'
            )
        }
        //验证时间
        function RestartGetCodeSchedule(i){
            var time = i;
            var run = "on";
            this.start = function(){
                forbidSend();
                setTimeout(refreshSendBtn, 0);

            };
            this.stop = function(){
                run = "off";
                cancelForbidSend();
            };
            var forbidSend = function(){
                $("#phoneNumInput").attr("readonly", "readonly");
                var $getCodeBtn = $("#getCodeBtn");
                $getCodeBtn.attr("disabled", "disabled");
                $getCodeBtn.removeClass("enabled");
            };
            var cancelForbidSend = function(){
                $("#phoneNumInput").removeAttr("readonly");
                var getCodeBtn = $("#getCodeBtn");
                getCodeBtn.removeAttr("disabled");
                getCodeBtn.addClass("enabled");
                getCodeBtn.text("获取验证码");
            };
            var refreshSendBtn = function(){
                if(time == 0){
                    cancelForbidSend();
                    return;
                }
                $("#getCodeBtn").text(time+"S后重新获取");
                time--;
                if(run == "on") setTimeout(refreshSendBtn, 1000);
            };
        }
//submit
     
   $('.loginbtn').click(function(){
	        login();
	    })

    function login(){
        $("#phoneNumInput").attr("tip", "1");
        var phoneNum = validPhoneNum();
        if(phoneNum == "") return;
        var code = validCode();
        if(code == "") return;
        var url=window.location.pathname;
        //登录
        Load.start();
        $.post(
            "/login",
            {"url":'/login',"phoneNum":phoneNum,"validCode":code},
            function(data){
                if(data.code==1){
                    $('.loginshade').css('display','none')
                    createOrder(phoneNum);
                }else{
                    Load.end();
                    alert(data.message);
                }
            },
            "json"
        )
    }
})(Zepto)



function onBridgeReady(){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        param,
        function(res){
            // 使用当前方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
            if(res.err_msg == "get_brand_wcpay_request:ok") {
                findOrderStatus();
                setInterval(findOrderStatus, 2000);
            }
        }
    );
}

var param, type, orderId;

function setType(memType){
    type=$(memType).attr("data");
    $.post(
        "/checkLogin",
        function(data) {
            if (data.code == 1) {
                if($("#phoneNum").val()!=""){
                    Load.start();
                    createOrder($("#phoneNum").val());
                }else{
                    $('.loginshade').css('display','block');
                }
            }else{
                $('.loginshade').css('display','block');
            }
        },
        "json"
    )

}

function createOrder(phoneNum){
    var wechatCode = $("#wechatCode").val();
    $.ajax({
        "url":"/wxpay/order/create"
        ,"type":"POST"
        ,"dataType":"json"
        ,"data":{"code" : wechatCode, "phoneNum" : phoneNum, "productType" : type}
        ,"success":function(data){
            Load.end();
            if(data.code == "success"){
                param = data.data;
                orderId = data.orderId;
                pay();
                //alert(data.message);
            }else{
                alert(data.message);
            }
        }
        ,"error":function(){
            alert("出错了");
        }
    })
}

function pay(){
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }else{
            alert("该微信版本太旧了，不支持该种方式支付，请更新最新版本的微信吧！");
        }
    }else{
        onBridgeReady();
    }
}

//查询订单是否支付成功
function findOrderStatus(){
    $.ajax({
        url: "/wxpay/toPayResultWebPage",
        type: "post",
        dataType:"json",
        data: {"orderId": orderId, "type": "3"},
        success: function (data) {
            if (data.code == 1) {
                window.location.href = "/wxpay/toPaySuccess?o=" + orderId;
            }
        }
    });
}