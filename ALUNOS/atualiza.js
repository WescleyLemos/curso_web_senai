$(document).ready(function() {
    $.get("http://localhost:3003/", function(data) {

        for (let i = 0; i < data.length; i++) {
            document.getElementById("lista").innerHTML += `Nome:
   ${data[i].nome} `
            document.getElementById("lista").innerHTML += `Matrícula:
   ${data[i].matricula} `
            document.getElementById("lista").innerHTML += `Curso:
   ${data[i].curso.nome} `
            document.getElementById("lista").innerHTML += `Situação:
   ${data[i].situacao} <br>`
        }
    });
});