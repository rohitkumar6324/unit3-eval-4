// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, addFunctionality } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
addFunctionality();

const fetchData = (query) => {
    fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`).then((res) => {
        return res.json()
    }).then(res => {
        appendData(res.articles);
    })
}

const appendData = (data) => {
    const container = document.querySelector("#results");
    container.innerHTML = null;
    data.forEach(el => {
        const div = document.createElement("div");
        div.className = "news"
        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(el));
            window.location.href = "../news.html"
        })
        const img = document.createElement("img");
        img.style.width = "270px"
        img.style.height = "150px"
        img.src = el.urlToImage;
        const text = document.createElement("div");
        const title = document.createElement("h3");
        title.innerText = el.title;
        const desc = document.createElement("p");
        desc.innerText = el.description;
        text.append(title, desc);
        div.append(img, text);
        container.append(div);
    })
}
const query = JSON.parse(localStorage.getItem("newsQuery"));
fetchData(query)