/**
 * Created by 赵旭 on 2017/6/6.
 */

$(function(){
    var a=0;
    /*获取元素页数  length*/
    var s=$(".page").length-1;
    $("body").swipeUp(
        function(){
            if(a<s){
                $(".page").eq(a).addClass("pageup");
                $(".page").eq(a).children().addClass("hide");
                a++;
                $(".page").eq(a).removeClass("pagedown");
                $(".page").eq(a).children().removeClass("hide");
            }
        }
    );
    $("body").swipeDown(
        function(){
            if(a>0){
                $(".page").eq(a).addClass("pagedown");
                $(".page").eq(a).children().addClass("hide");
                a=a-1;
                $(".page").eq(a).removeClass("pageup");
                $(".page").eq(a).children().removeClass("hide");
            }
        }
    );
    $(".page_2,.page_3,.page_4").swipeLeft(
        function(){
            $(this).children("div").eq(0).addClass("pageleft");
            $(this).children("div").eq(0).children().addClass("hide");
            $(this).children("div").eq(1).removeClass("pageright");
            $(this).children("div").eq(1).children().removeClass("hide");
        }
    );
    $(".page_2,.page_3,.page_4").swipeRight(
        function(){
            $(this).children("div").eq(0).removeClass("pageleft");
            $(this).children("div").eq(0).children().removeClass("hide");
            $(this).children("div").eq(1).addClass("pageright");
            $(this).children("div").eq(1).children().addClass("hide");
        }
    )
});