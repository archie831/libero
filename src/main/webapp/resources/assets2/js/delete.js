/**
 * Created by JPMC-PC15 on 13/07/2017.
 */
$(document).ready(function () {

    var id;
    var dataContainer;

    //========= Delete modal event ============
    $(".delete-data-modal").click(function (event) {
        event.preventDefault();

        var deleteModal  = $("#delete-modal");
        var containerTD  = $(this).parent("td");
        var firstName    = containerTD.siblings(".data-firstname").text();
        var lastName     = containerTD.siblings(".data-lastname").text();
                    id   = $(this).attr("data");
        dataContainer    = $(this).closest("tr");

        //===== print first name and last name to modal ========
        deleteModal.find(".user-info").text(firstName + " " + lastName);

        deleteModal.modal('show');
    });

    //========== Delete modal ============
    $(".delete-data").click(function(event){
        event.preventDefault();

        $.ajax({
            url: "delete/"+ id,
            type: "get",
            datatype: "json",
            success: function(){

                dataContainer.fadeOut().empty();
            },
            error: function(){
                alert("Error in loading the data.");
            }
        });
    });

});
