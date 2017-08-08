
$(document).ready(function () {

    $("#theForm").submit(function(event){
        event.preventDefault();
        $.ajax({
            url:"/save",
            type: "post",
            data:$("#theForm").serialize(),
            dataType: "json",
            success: function(data){
                console.log(data);

                $("#theForm").hide();

                $("#thankyou").append("<h2>" + "Thank you. You are now registered." + "</h2>");

                $("#response").append("ID number: " + data.id + "<br/>");
                $("#response").append("Name: " + data.name + "<br/>");
                $("#response").append("Username: " + data.username + "<br/>");
                $("#response").append("Password: " + data.password + "<br/>"+ "<br/>");
                $("#response").append("<a href ='/showAll'>" + "Click here to show all user" + "</a>");
            },
            error: function(){
                alert("Error in loading the data.");
            }
        });
    });
});