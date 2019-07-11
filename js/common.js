// < !--公共导航栏、鼠标划入的效果-- >
// 初始化位置
$('#header_Wrap .nav_line').animate({
    width: $('#header_Wrap nav a.cur').outerWidth(),
    left: $('#header_Wrap nav a.cur').position().left,
})
// 鼠标移入位置
$('#header_Wrap nav a').on('mouseenter', function () {
    PoLeft = $(this).position().left; //  "li"距父元素"ul"的偏移位置
    WidthLine = $(this).outerWidth(); //  width + padding + border

    $('#header_Wrap .nav_line').stop().animate({
        width: WidthLine,
        left: PoLeft + 0
    });
})
// 鼠标移出位置
$('#header_Wrap nav').on('mouseleave', function () {
    $('#header_Wrap .nav_line').stop().animate({
        width: $('#header_Wrap nav a.cur').outerWidth(),
        left: $('#header_Wrap nav a.cur').position().left,
    });
})

// ============================================
// ============================================
// < !-- card、选项卡鼠标划入的效果-- >
// 初始化位置
$('.tab_Title .tab_line').animate({
    width: $('.tab_Title li.cur').outerWidth(),
    left: $('.tab_Title li.cur').position().left,
})
// 鼠标移入位置
$('.tab_Title li').on('mouseenter', function () {
    PoLeft = $(this).position().left; //  "li"距父元素"ul"的偏移位置
    WidthLine = $(this).outerWidth(); //  width + padding + border

    $('.tab_Title .tab_line').stop().animate({
        width: WidthLine,
        left: PoLeft + 0
    });
})
// 鼠标移出位置
$('.tab_Title').on('mouseleave', function () {
    $('.tab_Title .tab_line').stop().animate({
        width: $('.tab_Title li.cur').outerWidth(),
        left: $('.tab_Title li.cur').position().left,
    });
})


// ============================================
// ============================================
// <!-- 左侧边栏列表 -->
$('.siderBar_Item').on('click', function () {
    $(this).addClass('cur').siblings().removeClass('cur');
})


// ============================================
// ============================================
// <!-- 个人中心 - 账号管理手机号  验证码 60秒 倒计时 -->
m_ToolBar_QrCode_Wrap($("button[name='CodeBtn_A']"))
m_ToolBar_QrCode_Wrap($("button[name='CodeBtn_B']"))
m_ToolBar_QrCode_Wrap($("button[name='CodeBtn_C']"))
m_ToolBar_QrCode_Wrap($("button[name='CodeBtn_D']"))


function m_ToolBar_QrCode_Wrap(CodeBtn) {
    CodeBtn.click(function (event) {
        //这里写发送验证码的代码
        var time = 60;
        settime($(this));

        function settime(obj) {
            if (time == 0) {
                $(obj).attr('disabled', false);
                $(obj).html("点击获取验证码");
                time = 60;
                return;
            } else {
                $(obj).attr('disabled', true);
                $(obj).html(time + "秒后重新发送");
                time--;
            }
            setTimeout(function () {
                settime(obj)
            }, 1000)
        }
    });
}