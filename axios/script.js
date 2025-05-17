// Data GET Method Use Axios
async function fetchBooks() {
  const url = "http://localhost:3000/books";

  const res = await axios.get(url);
  const data = res.data;
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
fetchBooks() 
// Data POST Method Use Axios
async function addBook() {
  const url = "http://localhost:3000/books";
  const title = prompt("Enter Book title");
  const author = prompt("Enter Book Author");
  await axios({
    method: "post",
    url: url,
    data: {
      title: title,
      author: author,
    },
  });
}
// addBook()
// Data PUT Method Use Axios
async function updateBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");
  const title = prompt("Enter Book title");
  const author = prompt("Enter Book Author");

  await axios({
    method: "put",
    url: `${url}/${urlNo}`,
    data: {
      title: title,
      author: author,
    },
  });
}
// Data PATCH Method Use Axios
async function patchBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");
  const title = prompt("Enter Book title");

  await axios({
    method: "patch",
    url: `${url}/${urlNo}`,
    data: {
      title: title,
    },
  });
}
// Data DELETE Method Use Axios
async function deleteBook() {
  const url = "http://localhost:3000/books";
  const urlNo = prompt("Enter url No");

  await axios({
    method: "delete",
    url: `${url}/${urlNo}`,
  });
}
