/**
 * Created by JPMC-PC15 on 13/07/2017.
 */
$(document).ready(function () {

    //===== store to var the values of input elements before any change =====
    var postcode = document.theForm.postcode.value;
    var yesorno = document.theForm.yesorno.value;
    var firstname = document.theForm.firstname.value;
    var lastname = document.theForm.lastname.value;
    var email = document.theForm.email.value;
    var mobilenumber = document.theForm.mobilenumber.value;

    //======== save button =======
    $("#edit").submit(function(event){
        event.preventDefault();

        //======= store to var the values of input elements after the change =====
        var postcodeInput = document.theForm.postcode.value;
        var yesornoInput = document.theForm.yesorno.value;
        var firstnameInput = document.theForm.firstname.value;
        var lastnameInput = document.theForm.lastname.value;
        var emailInput = document.theForm.email.value;
        var mobilenumberInput = document.theForm.mobilenumber.value;

        //======= check if there are changes made
        if(postcode !== postcodeInput || yesorno !== yesornoInput || firstname !==firstnameInput || lastname !==lastnameInput || email !== emailInput || mobilenumber !== mobilenumberInput ){
        //======= Show edit modal =========
            $("#edit-modal").modal('show');
        }
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