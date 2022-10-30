startAgainBtn = document.getElementById("start-again-btn");

startAgainBtn.addEventListener("click", function () {
    window.location.href = "index.html";
}); 

function getResult() {
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById("got-number").innerHTML = getResult();

