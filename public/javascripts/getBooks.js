function getRequestedBooks(name){
  var path = name.toString()+'/';
  var getBookJSON = firebase.database().ref(path);
  var data_returned = [];
  var arr = [];
  //console.log(starCountRef);
  getBookJSON.on('value', function(snapshot) {
    //console.log(snapshot.val());
    data_returned = snapshot.val();
    if(!data_returned){
        $("#books").append( "No Book was found under this categpry" );
    } else{
      setDataInTable(data_returned);
    }

  });
  //console.log(arr);
}

function setDataInTable(data){
  for(var item in data){
      var book_name = item;
      var book_items = data[item];

      for (var subitem in book_items){
          var author = book_items["Author"];
          var publisher = book_items["Publisher"];
          var qty = book_items["qty"];
          var imge = book_items["img"];
      }
      var bk_name = book_name.toString();
      var div1 = document.createElement('div');
      div1.setAttribute('class', 'row well');
      var div2 = document.createElement('div')
      div2.setAttribute('class', 'col-md-2');
      var img = document.createElement('img');
      img.src = imge;
      img.alt= book_name;
      img.setAttribute('class', 'img-responsive');

      div2.appendChild(img);
      var div3 = document.createElement('div');
      div3.setAttribute('class', 'col-md-10');
        div3.innerHTML = '<p><b>Name: </b>'+book_name+'</p>'+
                         '<p><b>Author: </b>'+author+'</p>'+
                         '<p><b>Publisher: </b>'+publisher+'</p>'+
                         '<p><span ><button name="'+book_name+'" id="'+qty+'" onclick="borrow()" class="btn btn-success">Borrow</button></span></p>';
      //div2.innerHTML = '<img class="img-responsive"src="+imge+" alt="Maths">';
      div1.appendChild(div2);
      div1.appendChild(div3);

      document.getElementById('books').appendChild(div1);


}

  }
function borrow(){
  var cf = confirm("Do you want to borrow  "+event.srcElement.name+"?");
  if(cf){
    var bookname = event.srcElement.name;
    var qty = event.srcElement.id;
    if(qty <= 0){
      alert("Sorry You cannot borrow this book because we are out of stock!");
    } else{
      var username = "Obilolo"; // This is to be replaced with the name of the user
      var d = new Date();
      d.setDate(d.getDate()+7)
      var dataa = {};
      dataa[username] = {
        "Due":d,
        "surcharge": 0
      };

      var borrower = firebase.database().ref('Borrowers/')
      //.child('Borrowers/').push().key;
      var updates = {};
      updates['Borrowers/' + borrower] = dataa;
      borrower.update(dataa);

      //var updateBook = firebase.database().ref("Medicine/"+bookname);
      //updateBook.update({
      //  "qty": qty - 1
      //});

      alert("You have Borrowed "+bookname+"\nYou're to return the book in 7 days time");
    }
  }
}
