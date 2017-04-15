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
