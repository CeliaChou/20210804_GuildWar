//tabs
$(document).ready(function() {
    $(".myTabs").each(function() {
        var $myTabs = $(this);
        $myTabs.find(".tab_content").hide().eq(0).show();
        $myTabs.find(".p0_tab_content").hide().eq(0).show();
        $('html, body').animate({
            scrollTop: $(".part0").offset().top
        }, 600);
        $myTabs.find("ul.tabs li:first").addClass("active").show();
        $myTabs.find("ul.p1_tabs li:first .p1_tabsBTN").addClass("tabsBTN_active");
        $myTabs.find("ul.p3_tabs li:first .p3_tabsBTN").addClass("tabsBTN_active");
        $myTabs.find("ul.poptabs li:first .p4_popbtn").addClass("popbtn_active");
    
        $myTabs.find("ul.p0_tabs li").click(function() {
            var $this = $(this);
            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".p0_tab_content").hide();
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();
            $('html, body').animate({
                scrollTop: activeTab.offset().top
            }, 600);
            return false;
        });
        $myTabs.find("ul.p1_tabs li").click(function() {
            var $this = $(this);
            $(".p1_tabsBTN").removeClass("tabsBTN_active");
            $this.find(".p1_tabsBTN").addClass("tabsBTN_active");
            $myTabs.find(".p1_tab_content").hide();
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn(0);
            $('html, body').animate({
                scrollTop: $("#tab1 .part .big_title").offset().top
            }, 600);
            return false;
        });
        $myTabs.find("ul.p3_tabs li").click(function() {
            var $this = $(this);
            $(".p3_tabsBTN").removeClass("tabsBTN_active");
            $this.find(".p3_tabsBTN").addClass("tabsBTN_active");
            $myTabs.find(".p3_tab_content").hide();
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn(0);
            $('html, body').animate({
                scrollTop: $("#tab3 .part .big_title").offset().top
            }, 600);
            return false;
        });
        $myTabs.find("ul.poptabs li").click(function() {
            var $this = $(this);
            $(".p4_popbtn").removeClass("popbtn_active");
            $this.find(".p4_popbtn").addClass("popbtn_active");
            $myTabs.find(".p4_tab_con").hide();
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn(0);
            return false;
        });
    });
});
//pop//
$(".close").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".pop_BTN").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
  //按鈕禁用
$("#submit").click(function check(){
    var checkbox = document.getElementById("check");//选中checkbox的id；
    if(checkbox.checked==false){//按钮已选中
        alert("請閱讀並同意遵守上述條款及細則")
    }
    else{
    }
});
$(".vote").click(function(){
    $(".vote").addClass("already_vote");
    $(".vote").attr("disabled","disabled");
});
//numbers plus
$('.add').click(function() {
    if ($(this).prev().val() < 1000) {
        $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function() {
    if ($(this).next().val() > 0) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});