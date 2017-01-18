
var starCountRef = firebase.database().ref('Categories/');
var data_returned = [];
//console.log(starCountRef);
starCountRef.on('value', function(snapshot) {
  //console.log(snapshot.val());
  data_returned = snapshot.val();
  console.log(data_returned);
  for(var data in data_returned){
    //console.log(data);
    $(".linkList").append( "<li id='" + data + "'>" +"<a href='/user_dashboard/books?cat="+data+"'>"+ data +"</a>"+ "</li>" );
  }
});

function relod(){
  //location.reload();
}
