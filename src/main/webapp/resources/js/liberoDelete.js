$(document).ready(function () {
    $(".delete-data").click(function(event){
        event.preventDefault();

        var dataContainer = $(this).closest("tr");
        var url = $(this).parent().attr("href");

        $.ajax({
            url: url,
            success: function(){

                dataContainer.fadeOut();
            },
            error: function(){
                alert("Error in loading the data.");
            }
        });
    });
});
