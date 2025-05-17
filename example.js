// const url = "https://jsonplaceholder.typicode.com/posts/1";
// 1 Method
 const API_KEY = "f2b241392fe2191801eed6d1570594a5";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
fetch(url).then(function(r){
    return r.json()
}).then((value) => {
    console.log(value)
})

// 2 method
fetch(url)
  .then((data) => data.json())
  .then((data) => console.log(data));

// 3 method

fetch(url)
  .then((r) => r.json())
  .then((data) => {
    // console.log(data)
    const title = data.title;
    const body = data.body;
    const userId = data.userId;
    const id = data.id;
    console.log(title, body, userId, id);
  });

//  1 only await use
const response = await fetch(url);
const data = await response.json()
console.log(data)

//  2 only await use
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const res = await fetch(url1);
const val = await res.json()
console.log(val)

// Use function
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
}
fetchData()