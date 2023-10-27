document.getElementById("y").addEventListener("input", function () {
    let response = "";
    let y = $("#y").val();

    if (isNaN(y)) {
        response = "Y must be a number";
    } else {
        let bigY = new Big(y);
        if (!(bigY.plus(new Big(-5)) < 0 && bigY.plus(new Big(5)) > 0)) {
            response = "Y must be in (-5; 5)";
        }
    }

    if (response != "") {
        document.getElementById("error").innerHTML = response;
        $("#submit").prop("disabled", true);
    } else {
        $("#submit").prop("disabled", false);
        document.getElementById("error").innerHTML = "";
    }
});

document.getElementById("r").addEventListener("input", function () {
    let response = "";
    let r = $("#r").val();

    if (isNaN(r)) {
        response = "R must be a number";
    } else {
        let bigR = new Big(r);
        if (!(bigR.plus(new Big(-1)) > 0 && bigR.plus(new Big(-4)) < 0)) {
            response = "R must be in (1; 4)";
        }
    }

    if (response != "") {
        document.getElementById("error").innerHTML = response;
        $("#submit").prop("disabled", true);
    } else {
        $("#submit").prop("disabled", false);
        document.getElementById("error").innerHTML = "";
    }
});

$('input[name="x"]').click(function () {
    let xElements = document.getElementsByName("x");
    for (let i = 0; i < xElements.length; i++) {
        xElements[i].style.backgroundColor = "#3399ff";
    }
    this.style.backgroundColor = "red";
    localStorage.setItem("x", this.value);
});

document.getElementById("y").addEventListener("input", function () {
    localStorage.setItem("y", this.value);
});
document.getElementById("r").addEventListener("input", function () {
    localStorage.setItem("r", this.value);
});

window.addEventListener("load", function () {
    let xElements = document.getElementsByName("x");
    for (let i = 0; i < xElements.length; i++) {
        if (i - 4 == localStorage.getItem("x")) {
            xElements[i].classList.add('pressed-but');
        } else {
            xElements[i].classList.add('default-but');
        }
    }
    let y = localStorage.getItem("y");
    if (y !== null) {
        this.document.getElementById("y").value = y;
    }
    let r = localStorage.getItem("r");
    if (r !== null) {
        this.document.getElementById("r").value = r;
    }

    // drawGraph();
    let jsonString = localStorage.getItem("dots");
    console.log(jsonString);
    if(jsonString!=""){
    let dots = JSON.parse(jsonString);
        for (let i = 0; i < dots.length; i++) {
            drawDot(dots[i][0], dots[i][1]);
        }
    }
    document.getElementById("tbody").innerHTML = localStorage.getItem("tbody");
});