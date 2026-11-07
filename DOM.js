// const body = document.body

// body.append("Hello World , BYe")

// const body = document.body

// const div = document.createElement("div")

// div.innerText = "Hello my dear"
// div.textContent = "Hello my dear 2"
// body.append(div)

// const body = document.body;

// const div = document.createElement("div");

// div.innerHTML = "<h1> Hello my dear <h1>";

// body.append(div);

const body = document.body;

const div = document.querySelector(".div");
const h1 = div.querySelector("h1");

h1.innerHTML = "hello my dear 2";

console.log(h1.getAttribute("title"));
h1.setAttribute("title", "hello big man");

const h1Title = h1;

console.log(h1Title.getAttribute("title"));