var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

if (ImgBox && originalImg) {
    originalImg.style.width = ImgBox.offsetWidth + "px";
}

var leftSpace = ImgBox ? ImgBox.offsetLeft : 0;

if (ImgBox) {
    ImgBox.onmousemove = function(e) {
        var boxWidth = (e.pageX - leftSpace) + "px";
        if (ImgWrap) ImgWrap.style.width = boxWidth;
        if (line) line.style.left = boxWidth;
    }
}