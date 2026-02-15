// seleção dos elemento principais
var display = document.getElementById('display');
var buttons = document.querySelectorAll('btn');
var clear = document.getElementById('clear');
var historylist = document.getElementById('historylist');

var currentInput = '';

var calHistory = [];

console.log("sistema iniciado. Aguardando entrada do usuário!");

//-------------------------------------------------------------
// Percorre todos os botões numericcos e opreradores
//--------------------------------------------------------------

for (var i = 0; i < buttons.length; i++);{
    buttons[i]. addEventListener('click', function(){
        //"this" se refere ao botão clicado
        var value = this.textContent;
        console.log("Botão clicado:", value);
    })

}


