$('.a1').click(function() {
    // $(".a1").css({"backgroundColor":"#2352a3","color":"#fff"});
    $("#d1").show();
    $("#d2,#d3,#d4,#d5").hide();
});
$('.a2').click(function() {
    $("#d1,#d3,#d4,#d5").hide();
    $("#d2").show();
});
$('.a3').click(function() {
    $("#d1,#d2,#d4,#d5").hide();
    $("#d3").show();
});
$('.a4').click(function() {
    $("#d1,#d2,#d3,#d5").hide();
    $("#d4").show();
});
$('.a5').click(function() {
    $("#d1,#d2,#d3,#d4").hide();
    $("#d5").show();
});

//父分类
$(".bg-color").click(function(){
	$(this).addClass('bg-a').parent('li').siblings().children('a').removeClass('bg-a');
});
//子分类
$(function(){

    $(".small-class a").click(function() {

       $(this).siblings('a').removeClass("bg-a");

       $(this).addClass('bg-a');

    });

});

