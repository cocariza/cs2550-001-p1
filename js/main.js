const modal = document.getElementById("modal");
const img = document.getElementById("portrait-thumbnail");
const modalImg = document.getElementById("modal-img");
const span = document.querySelector(".close");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
