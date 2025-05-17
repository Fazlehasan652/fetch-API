function doSomthing() {
    const url = "https://jsonplaceholder.typicode.com/posts/2";
  
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      const result = document.getElementById("result");
      result.innerHTML = `
      <h1 class="text-amber-600 text-2xl" >${data.title}</h1>
      <p>${data.body}</p>
      
      `;
    });
}
