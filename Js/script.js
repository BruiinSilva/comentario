function enviar() {

    // Variáveis
    var corFundo = document.getElementById("cor-fundo").value;
    var corTexto = document.getElementById("cor-texto").value;
    var comentario = document.getElementById("comentario").value;
    var nome = document.getElementById("nome").value;
    
  
    // Mandando pro HTML
    document.getElementById("ana2").innerHTML += '<div class="usuario" style="color: ' + corTexto + ';background-color: ' + corFundo + ';" <h4>' + nome + '</h4><hr style="border-color: ' + corTexto + ';"><p>' + comentario + '</p></div>';
  }

