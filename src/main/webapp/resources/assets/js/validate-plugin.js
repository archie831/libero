/**
 * Created by JPMC-PC15 on 18/06/2017.
 */
$(document).ready(function(){


    $("#theForm").validate({

        rules: {
            postcode: {
                required: true,
                digits: true
            },
            yesorno: {
                required: true
            },
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 11,
                maxlength: 11
            }

        },


        messages:{
            postcode: {
                required: "Enter your post code",
                digits: "Should be numbers only "
            },
            yesorno:{
                required:"Please select yes or no"
            },
            firstName:{
                required:"Enter your first name"
            },
            lastName:{
                required:"Enter your last name"
            },
            email:{
                required:"Enter your email",
                email:"Invalid email"
            },
            mobile:{
                required: "Enter your mobile number",
                digits: "Should be numbers only",
                minlength: "Invalid mobile number",
                maxlength: "Invalid mobile number"
            }
        }



    });

});
