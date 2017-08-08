/**
 * Created by JPMC-PC15 on 13/07/2017.
 */
$(document).ready(function () {

    //===== store to var the values of input elements before any change =====
    var postcode     = $("#editpc").val();
    var yesorno      = $("#edityon").val();
    var firstname    = $("#editfn").val();
    var lastname     = $("#editln").val();
    var email        = $("#editemail").val();
    var mobilenumber = $("#editmn").val();

    //======== save button =======
    $("#edit").submit(function(event){
        event.preventDefault();

        //======= store to var the values of input elements after the change =====
        var postcodeInput     = $("#editpc").val();
        var yesornoInput      = $("#edityon").val();
        var firstnameInput    = $("#editfn").val();
        var lastnameInput     = $("#editln").val();
        var emailInput        = $("#editemail").val();
        var mobilenumberInput = $("#editmn").val();

        //======= check if there are changes made
        if(postcode !== postcodeInput || yesorno !== yesornoInput || firstname !==firstnameInput || lastname !==lastnameInput || email !== emailInput || mobilenumber !== mobilenumberInput ){
        //======= Show edit modal =========
            $("#edit-modal").modal('show');
        }
        //======== front end validation ============================
        //======== prevents submitting form if errors exist ========
        if( !$("#theForm").valid() )  return false;
    });


    //=======  Update modal event =========
    $("#saveBtn2").click(function (event) {
        event.preventDefault();

        $.ajax({
            url: $("#edit").attr("action"),
            type: "post",
            data:$("#edit").serialize(),
            dataType: "json",
            success: function(data){

                $("#edit").hide();
                $("#thankyou").append("<h2>" + "Successfully edited." + "</h2>");
                $.each(data,function(field, value) {
                    $("#response").append("<br/>"  + field +": "+ "<span class='value'>" + value + "</span>" + "<br/>");
                });
                $("#showAllBtn").append("<br/>" + "<a href ='/showAll'><button class='secLeft-submit'>" +
                    "Click here to see all respondents" +
                    "</button></a>");
            },
            error: function(){
                alert("Error in loading the data.");
            }
        });
    });
});