/**
 * Created by dell on 2017/4/21.
 */
$ (document).ready(function() {
    $(".part1-box").mousedown(function() {
        $(".part1").css("display","none");
        $(".part1-hide").css("display","flex");
        $(".big").css("display","flex");
        $(".big").attr("src",$(this).children("img").attr("src"));
    });
    $(".part1-hide").mousedown(function() {
        $('.part1').css("display","flex");
        $(this).css("display","none");
    });
});
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
/**
 * Created by dell on 2017/4/15.
 */
$ (document).ready(function() {
    $(".third").mousedown(function() {
        // alert("hello");
        $(this).parent().remove();
        var len = $(".row").length;
        for(var i = 0; i<len; i++)
            $(".row:eq(" + i + ") :first").html(i + 1);


    });
    $(".btn").mousedown(function() {
        var len2 = $(".row").length + 1;
        // alert(len2);
        $(".total").append(
            "<div class = \"row\">"+
            "<div class = \"first\">" + len2 + "</div>"+
            "<div class = \"second\"></div>"+
            "<div class = \"third\">Delete</div>"+
            "</div>");

        $(".third").mousedown(function() {
            $(this).parent().remove();
            var len = $(".row").length;
            for(var i = 0; i<len; i++)
                $(".row:eq(" + i + ") :first").html(i + 1);
        });
    });


});

