function myFunction() {
   var title = document.getElementById('title').value;
   var auther = document.getElementById('auther').value;
   var isbn = document.getElementById('isbn').value;

   if(title == "" || auther == "" || isbn == ""){
     alert("Sorry you have to fill all the inputs")
   }else{
      var th = document.getElementById('interRow');

      var para = document.createElement('tr');
      para.id = "reom";
      para.class = "table-secondary";


        para.innerHTML = `
            <td>${title}</td>
            <td>${auther}</td>
            <td>${isbn}</td>
            <td><a onclick = "removeElem()" id="re" class="btn btn-danger btn-sm delete" href="#">X</a></td>
        `;
      th.appendChild(para);
    }
  
  //  var th = document.getElementById('interRow');

  //  var para = document.createElement('tr');
  //  para.id = "reom";
  //  para.class = "table-secondary";


  //    para.innerHTML = `
  //        <td>${title}</td>
  //        <td>${auther}</td>
  //        <td>${isbn}</td>
  //        <td><a onclick = "removeElem()" id="re" class="btn btn-danger btn-sm delete" href="#">X</a></td>
  //    `;
  //  th.appendChild(para);


  }

  function removeElem() {
    document.getElementById("reom").remove();
}






// // Check browser support
// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("lastname", "Smith");
//   // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//}


























// // Book Class : Represents a Book 
// class Book{
//     constructor(title,auther,isbn){
//         this.title = title;
//         this.auther = auther ; 
//         this.isbn = isbn ; 
//     }
// }


// // UI class : Handel UI  Tasks
// class UI {
//     static displayBooks(){
//         const StoredBooks =[
//             {
//                 title : "Life Cycle",
//                 auther : "Ahmed Azab",
//                 isbn : "12345"
//             },
//             {
//                 title : "Good Futuer",
//                 auther : "mohmmed Azab",
//                 isbn : "12345"
//             }
//         ]

//         const Books = StoredBooks;

//         Books.forEach((Book) => UI.addBookToList(Book));
//     }
//     static addBookToList(Book){
//         const list = document.querySelector('#book-list');

//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${Book.title}</td>
//             <td>${Book.auther}</td>
//             <td>${Book.isbn}</td>
//             <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
//         `;

//         list.appendChild(row);
//     }
// }



// // Store Class : Handel Storage 


// //Event : Display Book
// document.addEventListener('DOMContentLoaded', UI.displayBooks);



// // Event : Add a Book 
// document.querySelector('#book-form').addEventListener('submit', (e) =>{

//     //Prevent actual submit
//         e.preventDefault();


//     const Title = document.getElementById('title').value;
//     const Auther = document.getElementById('auther').value;
//     const Isbn = document.getElementById('isbn').value;


//     //instatiate book
//     const book = new Book(Title,Auther,Isbn);
//     console.log(book);
// });



// // Event : remove a Book