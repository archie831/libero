/**
 * Created by JPMC-PC15 on 14/06/2017.
 */

//============ Event attribute for radio button ================
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

//======= Show/Hide events for search button =============
var searchBar = $("#searchBar");
var searchInput = $("#searchInput");
var form = $("#form-searchBar");

searchBar.click(function(event){
    event.preventDefault();

    searchInput.css({"display" : "inline-block"});
    searchInput.focus();
});

searchInput.focusout(function(event){
    event.preventDefault();
    searchInput.css({"display" : "none"});
});


/*
searchInput.hide();

searchBar.click(function(event){
    event.preventDefault();

    searchInput.show();
    searchInput.focus();
});


searchInput.focusout(function(event){
    event.preventDefault();
  searchInput.hide();
});
*/


