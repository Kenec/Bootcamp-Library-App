//return all the categories as an array
function getCategories(){
  var starCountRef = firebase.database().ref('Categories/');
  var data_returned = [];
  //console.log(starCountRef);
  starCountRef.on('value', function(snapshot) {
    //console.log(snapshot.val());
    data_returned = snapshot.val();
    //console.log(data_returned);
    fomartData(data_returned)
  });
}

function fomartData(data){
  for(var datam in data){
    var item = datam;

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'row well');
    var div2 = document.createElement('div')
    div2.setAttribute('class', 'col-md-10');
    var div3 = document.createElement('div')
    div3.setAttribute('class', 'col-md-2');

    div2.innerHTML = item.toUpperCase();
    div3.innerHTML = '<button id="'+item+'" class="btn btn-flat btn-danger btn-dropbox" onclick="deletCat()" type="button">Remove</button>';

    div1.appendChild(div2);
    div1.appendChild(div3);
    document.getElementById('cat').appendChild(div1);
}
}

function deletCat(){
  var cf = confirm("Do you want to delete  "+event.srcElement.id+"?");
  if(cf){
    var item = event.srcElement.id;
    var borrower = firebase.database().ref('Categories/'+item)
    //.child('Borrowers/').push().key;
    //var updates = {};
    //updates['Borrowers/' + borrower] = dataa;
    borrower.remove();
    location.reload();
  }
}

function addBook(){
  var text = document.getElementById("add_cat").value;
  if(text){
    var dataa = {};
    dataa[text] = text;
    var borrower = firebase.database().ref('Categories/');
    borrower.update(dataa);
    location.reload();

  }
}
