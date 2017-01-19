

$(document).ready(function(){

$.getScript("../javascripts/config.js");
$("#surcharge_form").hide();
  // show a surcharge form when an admin clicks surcharge button
  $(".btn_surcharge").click(function(e) {
      $("#surcharge_form").show();
        var borrowers_name = e.target.name;
        $("#surcharge_btn").click(function(em){
          var new_surcharge = $('#surcharge_amt').val();
          //console.log(borrowers_name+" Amount: "+new_surcharge);
          updateSurcharge(borrowers_name,new_surcharge);          
        });
        e.preventDefault();
  });
});


function updateSurcharge(name,charge){
    var borrower = firebase.database().ref('Borrowers/'+name);
    borrower.update({
      "surcharge":charge
    });
    //alert("You have added "+charge+" to "+ name);
    //location.reload();
}
