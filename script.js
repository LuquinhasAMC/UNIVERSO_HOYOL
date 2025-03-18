let menu = document.getElementById('menu');

function abrirM() {
    menu.style.display = "flex";
    menu.classList.add("AniAparece");
    setTimeout(() => {
        menu.classList.remove("AniAparece")
    }, 280)
}

function fecharM() {
    menu.classList.add("AniSome");
    setTimeout(() => {
        menu.classList.remove("AniSome");
        menu.style.display = "none";
    }, 280);
    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 780) {
            menu.style.display = "flex";
        }
        else {
            menu.style.display = "none"
        };
    });
}

function linkP(link) {
    window.location.href = link;
}

let inicioB = document.getElementById("inicio");
let projetoB = document.getElementById("projetos");
let novidadesB = document.getElementById("novidades");
let telaA = document.getElementById("telaA");

function navegar(tela) {
    if (tela === "inicio") {
        projetoB.style.display = "none";
        novidadesB.style.display = "none";
        inicioB.style.display = "block";
        inicioB.classList.add("AniAparece");
        telaA.textContent = "Início";
        setTimeout(() => {
            inicioB.classList.remove("AniAparece");
        }, 280);
    }
    else if (tela === "projetos") {
        projetoB.style.display = "block";
        novidadesB.style.display = "none";
        inicioB.style.display = "none";
        projetoB.classList.add("AniAparece");
        telaA.textContent = "Projetos";
        setTimeout(() => {
            projetoB.classList.remove("AniAparece");
        }, 280);
    }
    else if (tela === "novidades") {
        projetoB.style.display = "none";
        novidadesB.style.display = "block";
        inicioB.style.display = "none";
        novidadesB.classList.add("AniAparece");
        telaA.textContent = "Novidaes";
        setTimeout(() => {
            novidadesB.classList.remove("AniAparece");
        }, 280);
    };

    if(window.innerWidth > 780) {
            menu.style.display = "flex";
    }
    else {
        menu.classList.add("AniSome");
        setTimeout(() => {
            menu.classList.remove("AniSome");
            menu.style.display = "none";
        }, 280);
    };
    window.addEventListener("resize", () => {
        if(window.innerWidth > 780) {
            menu.style.display = "flex";
        }
        else {
            menu.style.display = "none"
        };
    });
}