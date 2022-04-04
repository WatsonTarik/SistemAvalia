function corrigir() {
    document.querySelector(".hide").style.display = "block";
    let tudo2 = 0;
    let tudo1 = 0;
    let nom = document.getElementById("texto").value;
	document.getElementById("nome").innerHTML = "nome: " + nom;

    let cur1 = document.getElementById("Q01").value;
    if (cur1 === "1") {
        tudo2 = tudo2 + 1;
        tudo1 = tudo1 + 20;
    }

    let curs = document.getElementById("Q02").value;
    let resulcur = 0;
    if (curs.match("Informática")) {
        resulcur = resulcur + 1;
    }
    if (curs.match("Administração")) {
        resulcur = resulcur + 1;
    }
    if (curs.match("Enfermagem")) {
        resulcur = resulcur + 1;
    }
    if (resulcur === 3) {
        tudo2 = tudo2 + 1;
        tudo1 = tudo1 + 20;
    }

    let q32 = document.getElementById("check2");
    let q34 = document.getElementById("check4");
    let opcoes = 0;
    if (q32.checked) {
        opcoes = opcoes + 1;
    }
    if (q34.checked) {
        opcoes = opcoes + 1;
    }
    if (opcoes === 2) {
        tudo2 = tudo2 + 1;
        tudo1 = tudo1 + 20;
    }

    if (document.getElementById("con").checked) {
        tudo2 = tudo2 + 1;
        tudo1 = tudo1 + 20;
    }

    if (document.getElementById("ver").checked) {
        tudo2 = tudo2 + 1;
        tudo1 = tudo1 + 20;
    }

    document.getElementById("corretas").innerHTML = "corretas: " + tudo2 + "/5";
    document.getElementById("percentual").innerHTML = "porcentagem: " + tudo1 + "%";
}
//Informática Administração Enfermagem