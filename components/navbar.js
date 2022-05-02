const navbar = () => {
    return `<a href="./index.html"><h1>News</h1></a>
      <input type="text" id="search_input" placeholder="Search" />`
}
const addFunctionality = () => {
    document.querySelector("#search_input").addEventListener("keydown", search);
}
const search = (e) => {
    if (e.code == "Enter") {
        const query = document.querySelector("#search_input").value;
        localStorage.setItem("newsQuery", JSON.stringify(query))
        window.location.href = "../search.html";
    }
}

export { navbar, addFunctionality }