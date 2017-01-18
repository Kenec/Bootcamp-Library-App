var starCountRef = firebase.database().ref('Categories/');
var data_returned = [];
//console.log(starCountRef);
starCountRef.on('value', function(snapshot) {
  //console.log(snapshot.val());
  data_returned = snapshot.val();
  data_returned.forEach(function(data){
    $(".linkList").append( "<li id='" + data + "'>" +"<a href='/index?cat="+data+"'>"+ data +"</a>"+ "</li>" );
  });

});
