// Data GET Method
async function fetchBooks() {
  const url = "http://localhost:3000/books";

  const res = await fetch(url);
  const data = await res.json();
  const bookList = data.map((book) => {
    const hrmlelement = `
       <li class="p-2 border rounded"> <strong>ID ${book.id}:</strong> 
       <strong>${book.title}</strong> by ${book.author}
       </li>
       `;
    return hrmlelement;
  });
  document.getElementById("book-list").innerHTML = bookList.join(" ");
}

// Data POST Method
async function addBook() {
  const url = "http://localhost:3000/books";
  const title = prompt("Enter Book title");
  const author = prompt("Enter Book Author");
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
    }),
  });
}
// addBook()
// Data PUT Method
async function updateBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");
  const title = prompt("Enter Book title");
  const author = prompt("Enter Book Author");
  await fetch(`${url}/${urlNo}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      author: author,
    }),
  });
}
// Data PATCH Method
async function patchBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");
  const title = prompt("Enter Book title");
  await fetch(`${url}/${urlNo}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: title,
    }),
  });
}
// Data DELETE Method
async function deleteBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");
  await fetch(`${url}/${urlNo}`, {
    method: "DELETE",
  });
}
