function slide1() {
    document.getElementById('slide-img').src = "1bm.jpg";
    setTimeout("slide2()", 10000)
}

function slide2() {
    document.getElementById('slide-img').src = "2bm.jpg";
    setTimeout("slide3()", 10000)
}

function slide3() {
    document.getElementById('slide-img').src = "3bm.jpg";
    setTimeout("slide1()", 10000)
}