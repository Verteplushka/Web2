$("#clearM").on("click", clearM);

function clearM() {
    document.getElementById("tbody").innerHTML = "";
    localStorage.setItem("tbody", "");
    localStorage.setItem("dots", "");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGraph();
}