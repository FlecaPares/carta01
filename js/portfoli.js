filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");

    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        /* w3RemoveClass(x[i], "show"); */
        x[i].classList.remove("show");
        x[i].classList.add("hidden");

        /* if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); */
        if (x[i].className.indexOf(c) > -1) {
            x[i].classList.add("show");
            x[i].classList.remove("hidden");
        }
    }
}



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}