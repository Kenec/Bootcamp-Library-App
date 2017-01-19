

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
    $(".btn_mark_as_returned").click(function(e) {
          var borrowers_name = e.target.name;
          markAsReturned(borrowers_name);
          e.preventDefault();
    });


function updateSurcharge(name,charge){
    var borrower = firebase.database().ref('Borrowers/'+name);
    borrower.update({
      "surcharge":charge
    });

    //alert("You have added "+charge+" to "+ name);
    //location.reload();
}

function markAsReturned(name){
  var conf = confirm("Do you want to mark the book borrowed by "+name+ " as returned");
  if(conf){
      console.log(name+" has returned his book");
      var borrower = firebase.database().ref('Borrowers/'+name);
      borrower.remove();
      //location.reload();
  }
}

});
