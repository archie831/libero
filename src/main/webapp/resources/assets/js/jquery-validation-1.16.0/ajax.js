$(document).ready(function(){

    $("#submitBtn").click(function () {
        $.ajax({
            type:"post",
            url:"/post",
            dataType: "jason",
            success: function (data) {
                $.each(data,function (key,value) {
                    $("#greeting").html("Thank you. The form has been submitted.");
                    $("#divResponse").append(key + ": " + value + "<br>");

                })
            },
            error: function () {
                alert("Error on loading the data.");
            }

        });
    })

});