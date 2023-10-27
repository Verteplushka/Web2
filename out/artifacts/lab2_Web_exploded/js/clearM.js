$("#clearM").on("click", clearM);

function clearM() {
    document.getElementById("tbody").innerHTML = "";
    localStorage.setItem("tbody", "");
}