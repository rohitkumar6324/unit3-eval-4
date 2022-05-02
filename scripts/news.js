// Ude Import export (MANDATORY)
import { navbar, addFunctionality } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
addFunctionality();

const data = JSON.parse(localStorage.getItem("news"))


const img = document.createElement("img");
img.src = data.urlToImage;
img.style.height = "400px"

const title = document.createElement("h3");
title.innerText = data.title;

const p = document.createElement("p");
p.innerText = data.content;

document.querySelector("#detailed_news").append(img, title, p);