/**
 * Created by dell on 2017/4/15.
 */
$ (document).ready(function() {
    $(".btn1").mousedown(function() {
        $(".box").html("1");
        $(this).css("background","#C0C0C0");
        $(".btn2").css("background","#fff");
        $(".btn3").css("background","#fff");
    });
    $(".btn2").mousedown(function() {
        $(".box").html("2");
        $(this).css("background","#C0C0C0");
        $(".btn1").css("background","#fff");
        $(".btn3").css("background","#fff");
    });
    $(".btn3").mousedown(function() {
        $(".box").html("3");
        $(this).css("background","#C0C0C0");
        $(".btn2").css("background","#fff");
        $(".btn1").css("background","#fff");
    });
});
