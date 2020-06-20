window.onscroll = function() {
    menuScroll()
};

function menuScroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("titolHeader").style.fontSize = "2.25rem";
        document.getElementById("fletxaScroll").style.display = "block";
    } else {
        document.getElementById("titolHeader").style.fontSize = "3.5rem";
        document.getElementById("fletxaScroll").style.display = "none";
    }
}