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
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mobilenumber: {
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
            firstname:{
                required:"Enter your first name",
                minlength: "Should be atleast 2 characters."
            },
            lastname:{
                required:"Enter your last name",
                minlength: "Should be atleast 2 characters."
            },
            email:{
                required:"Enter your email",
                email:"Invalid email"
            },
            mobilenumber:{
                required: "Enter your mobile number",
                digits: "Should be numbers only",
                minlength: "Invalid mobile number",
                maxlength: "Invalid mobile number"
            }
        }
    });
});
