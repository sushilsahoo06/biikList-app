//book class :Represent a book
class Book {
  constructor(title,author,isbn) {
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }

}
//UI class : Handle UI task
class UI {
  static displayBooks(){
    const storeBooks=[
      {
        title:'Book one',
        author:'john deo',
        isbn:'2874664'
      },
      {
        title:'Book one',
        author:'john deo',
        isbn:'2874664' 
      }
    ];
    const books= storeBooks;
    books.forEach((book)=>UI.addBookToList(book));
  }
  static addBookToList(book){
    const list=document.querySelector('#book-list')

    const row=document.createElement('tr');
    row.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td> <a href="#" class="btn btn-danger btn-sm delete">X<a/></td>
    `;
    list.appendChild(row);
  }
 
  static showAlerts(meassage,className){
    const div=document.createElement('div');
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(meassage));//meassge book removed and book add
    const container=document.querySelector('.div-Form');
    const form=document.querySelector('#form-group');
    container.insertBefore(div, form);
    //Vanish in 3 seconds
    setTimeout( ()=> document.querySelector('.alert').remove(),
    3000);

  }
}

//Store class : Handles Storage

// class store{
//   static getBooks(){
//     let books;
//     if(localStorage.getItem('books')==null){
//       books=[];
//     }else{
//       books=JSON.parse(localStorage.getItem('books'));
//     }
//     return books;
//   }

//   static addBook(book){
//     con
//   }
// }

//Events : To display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Event : to add Book
document.querySelector('#form-group').addEventListener('submit',(el)=>{
  el.preventDefault();
  //get the value
  const title=document.querySelector('#title').value
  const author=document.querySelector('#Auther').value;
  const isbn=document.querySelector('#opinion').value;

  //Validate
  if(title =='' || author=='' || isbn==''){
    UI.showAlerts("Please fill in all data !!","danger")
  }else{
  //instatiate book
  const book=new Book(title,author,isbn);
  console.log(book);
  //add book to list
  UI.addBookToList(book);
  //show success meassge
  UI.showAlerts('Book added','success');
  }
  // //instatiate book
  // const book=new Book(title,author,isbn);
  // console.log(book);
  // //add book to list
  // UI.addBookToList(book);

  //clear fields after submissions
  document.querySelector('#title').value='';
    document.querySelector('#Auther').value='';
    document.querySelector('#opinion').value='';

 
});

//Event: Remove book
document.querySelector('#book-list').addEventListener('click',(el)=>{
  console.log(el.target.classList.contains);
  if(el.target.classList.contains('delete')){
    el.target.parentElement.parentElement.remove()
  }
  //show alerts
  UI.showAlerts('Book removed','success')
});
