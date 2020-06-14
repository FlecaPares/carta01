function openNav() {
    document.getElementById("navMenu").style.transition = "all 0.7s";
    document.getElementById("navMenu").style.transitionTimingFunction = "easy-out";
    document.getElementById("navMenu").style.padding = "20px 50px 0 50px";
    document.getElementById("navMenu").style.width = "auto";
    let x = document.getElementsByClassName("liNavMenu");
    for (let i = 0; i < x.length; i++) {
        x[i].style.marginTop = "20px";
    }

}

function closeNav() {
    document.getElementById("subMenu").style.display = "none";
    document.getElementById("navMenu").style.transitionTimingFunction = "easy-out";
    document.getElementById("navMenu").style.transition = "all 0.7s";
    document.getElementById("navMenu").style.width = "0";
    document.getElementById("navMenu").style.padding = "0";
    let x = document.getElementsByClassName("liNavMenu");
    for (let i = 0; i < x.length; i++) {
        x[i].style.marginTop = "0px";
    }
}

function obrirSubmenu() {
    var x = document.getElementById("subMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function canviPagina(pagina) {
    document.getElementById("subMenu").style.display = "none";
    document.getElementById("navMenu").style.display = "none";
    location.assign(pagina);
    /* setTimeout(function() { document.location.href = pagina; }, 5); */
}

function openIdioma() {
    document.getElementById("idioma").style.padding = "20px 20px 20px 20px";
    document.getElementById("idioma").style.width = "auto";
    let x = document.getElementsByClassName("liNavIdioma");
    for (let i = 0; i < x.length; i++) {
        x[i].style.marginTop = "20px";
    }
}

function closeIdioma(fullNou) {
    location.assign(fullNou);
}