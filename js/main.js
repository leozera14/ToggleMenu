var dados;
var dadosPesquisa = [];


/* NAVIGATION */
function navMobile() {
    const el = document.querySelector('.navMobile');
    if (el.classList.contains('navMobileOpen')) {
        el.classList.remove('navMobileOpen');
    } else {
        el.classList.add('navMobileOpen');
    }
}


/* CAROUSEL */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("Slides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4500); //
}


/* JSON */
function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                dados = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "../json/dados.json", true);
    xhttp.send();
}

function insereDados(n) {
    document.querySelector('.nome').innerHTML = dados[n].nome;
    document.querySelector('.ano').innerHTML = dados[n].ano;
    document.querySelector('.genero').innerHTML = dados[n].genero;
    document.querySelector('.sinopse').innerHTML = dados[n].sinopse;
    document.querySelector('.desenvolvedora').innerHTML = dados[n].desenvolvedora;
}

var search = document.querySelector('#search');
search.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        searchJogos(e.target.value);
    }
});

function searchJogos(value) {
    window.location="pesquisa.html/?" + value;
}

function searchListaJogos() {
    var url = location.search.split('?')[1];
    url = url.replace(/%20/g, ' ');
    console.log(url);

    carregarDados();
    setTimeout(() => {
        for(var i = 0; i < dados.length; i++) {
            console.log(dados[i].nome);
        if ( url == dados[i].nome) {
            // dadosPesquisa.push(dados[i]);
            window.location="../jogos/" + dados[i].caminho;
        }
    }
}, 300);

    console.log(dadosPesquisa);
}
