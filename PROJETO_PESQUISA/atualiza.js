$(document).ready(function() {
    $.get("http://localhost:3003/", function(data) {

        for (let i = 0; i < data.length; i++) {
            document.getElementById("lista").innerHTML += `Nome:
   ${data[i].nome} `
            document.getElementById("lista").innerHTML += `Início da execução:
   ${data[i].inicio_execucao} `
            document.getElementById("lista").innerHTML += `Fim da execução:
   ${data[i].fim_execucao} `
            document.getElementById("lista").innerHTML += `Area de conhecimento:
   ${data[i].area_conhecimento} <br>`
        }
    });
});