/**
 * Created by JPMC-PC15 on 14/06/2017.
 */
/* ========================== On click Button ==========================*/
$('#radioButton-Yes').click( function(){
    $('#radioButton-Yes').css({'color':'white'});
    $('#radioButton-Yes').css({'background-color':'#4b73ff'});
    $('#radio-cont2-Yes').css({'background-color':'white'});
    $('#radio-cont1-Yes').css({'border':'1.5px solid white'});
    $('#radioButton-No').css({'color':'#4b73ff'});
    $('#radioButton-No').css({'background-color':'white'});
    $('#radio-cont2-No').css({'background-color':'#4b73ff'});
    $('#radio-cont1-No').css({'border':'1.5px solid #4b73ff'});
});

$('#radioButton-No').click( function(){
    $('#radioButton-No').css({'color':'aliceblue'});
    $('#radioButton-No').css({'background-color':'#4b73ff'});
    $('#radio-cont2-No').css({'background-color':'white'});
    $('#radio-cont1-No').css({'border':'1.5px solid white'});
    $('#radioButton-Yes').css({'color':'#4b73ff'});
    $('#radioButton-Yes').css({'background-color':'white'});
    $('#radio-cont2-Yes').css({'background-color':'#4b73ff'});
    $('#radio-cont1-Yes').css({'border':'1.5px solid #4b73ff'});
});
/* =================================================================*/

/* ========================= Local Storage ==============================*/
var radioYes = $('#radioYes').val();
var radioNo = $('#radioNo').val();

$('#radioYes').click( function (event) {
    localStorage.setItem('radioYes',radioYes);
    localStorage.removeItem('radioNo');
});
$('#radioNo').click( function (event) {
    localStorage.setItem('radioNo',radioNo);
    localStorage.removeItem('radioYes');
});



$("#secLeft-submit").click( function (event) {

    var postCode = $('#postcode-input').val();
    var firstName = $('#firstName-input').val();
    var lastName = $('#lastName-input').val();
    var eMail = $('#email-input').val();
    var mobileNumber = $('#mobile-input').val();

    localStorage.setItem('postCode', postCode);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('eMail', eMail);
    localStorage.setItem('mobileNumber', mobileNumber);

    if(localStorage.getItem('postCode') == "") {
        localStorage.removeItem('postCode');
    }
    if(localStorage.getItem('firstName') == "") {
        localStorage.removeItem('firstName');
    }
    if(localStorage.getItem('lastName') == "") {
        localStorage.removeItem('lastName');
    }
    if(localStorage.getItem('eMail') == "") {
        localStorage.removeItem('eMail');
    }
    if(localStorage.getItem('mobileNumber') == "") {
        localStorage.removeItem('mobileNumber');
    }else{
        alert("Thanks");
    }

});
/* =================================================================*/

var searchBar = $("#searchBar");
var searchInput = $("#searchInput");
var form = $("#form-searchBar");

searchInput.hide();

searchBar.click(function(){

    searchInput.show();
    searchInput.focus();

});


searchInput.focusout(function(){
  searchInput.hide();
});



/*
var menuBar = $("#menuBar");
var dropDown = $("#menuBar-dropDown");

dropDown.hide();

menuBar.click(function(){
    dropDown.show();
});


dropDown.mouseenter(function(){
    dropDown.show();

    dropDown.mouseleave(function(){
        dropDown.hide();
    });

});
*/
