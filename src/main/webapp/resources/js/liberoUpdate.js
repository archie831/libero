/**
 * Created by JPMC-PC15 on 05/07/2017.
 */
$(document).ready(function () {

    $("#edit").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: $("#edit").attr("action"),
            type: "post",
            data:$("#edit").serialize(),
            dataType: "json",
            success: function(data){
                console.log(data);

                $("#edit").hide();

                $("#thankyouUpdate").append("<h2>" + "Successfully edited." + "</h2>");

                $("#responseUpdate").append("Name: " + data.name + "<br/>");
                $("#responseUpdate").append("Username: " + data.username + "<br/>");
                $("#responseUpdate").append("Password: " + data.password + "<br/>"+ "<br/>");
                $("#responseUpdate").append("<a href ='/showAll'>" + "Click here to show all user" + "</a>");
            },
            error: function(){
                alert("Error in loading the data.");
            }
        });
    });
});