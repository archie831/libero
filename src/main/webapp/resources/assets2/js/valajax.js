$(document).ready(function () {

    //===============================//
    //========= FORM EVENTS =========//
    //===============================//

    //=====check if email is available in local storage=====
    if(localStorage.getItem("eMail")) {

        $("#formContainer").hide().after("<h2 id='localStor'>You have already taken the survey.</h2>");

        $("h2").after("<a href ='/showAll'><button class='secLeft-submit'>" +
            "Click here to see all respondents" +
            "</button></a>");
    }



    //========= Submit Form Event =============
    $("#theForm").submit(function(event){
        event.preventDefault();

        //=========== LocalStorage event ==============
        var eMail = $('#email-input').val();
        localStorage.setItem('eMail', eMail);

        //======== front end validation ============================
        //======== prevents submitting form if errors exist ========
        if( !$("#theForm").valid() )  return false;


        $.ajax({
            url : "/save",
            type: "post",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data) { data.success ? registered(data.success) : formErrors(data.errors) },
            error: function(a,b,c){ alert("Error in loading the data."); }
        });

    });

    //=========== Registration SUCCESS ================
    //==== display thank you message and hide form ====
    function registered(data){

        var container = $("#formContainer");

        //=== Hide the form ===
        $("#section-left-header").hide();
        $("#article-secLeft").hide();

        //=== Show "Thank you for taking the survey." message ===
        container.append("<h2 id='thankyou'>" +
            "Thank you for taking the survey." +
            "</h2>");

        $.each(data,function(field, value) {
            container.append("<br/>"  + field +": "+ "<span class='value'>" + value + "</span>" + "<br/>");
        });

        //=== Show "Click here to see all respondents" button ===
        container.append("<br/>" + "<a href ='/showAll'><button class='secLeft-submit'>" +
            "Click here to see all respondents" +
            "</button></a>");
    }

    //========== Registration FAILED ==========
    //======== display error messages =========
    function formErrors(errors){

        //=== put server error class on a var ===
        var errorDisplay = $(".serverErrors");


        //=== hide and empty all error element ===
        errorDisplay.remove();

        $.each(errors,function(field, error) {
            //=== get input field ===
            var input =  $("input[name='"+field+"']");

            //==== select the element to attach the errors ====
            var inputContainer = field == 'yesorno' ?
                input.closest("#div-radioButton") :
                input.closest("label");
            //===== add error =====
            inputContainer.after("<div class='serverErrors'>" + error + "</div>");
        });
        //==== print server error class ====
        errorDisplay.text();
    }
});