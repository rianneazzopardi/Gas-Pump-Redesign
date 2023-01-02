function load() {
    var elem = document.getElementById("loading");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("num").innerHTML = width * 1 + '%';
        }
    }
}
