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
