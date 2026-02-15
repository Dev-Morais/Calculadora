// seleção dos elementos principais
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let clear = document.getElementById('clear');
let historylist = document.getElementById('historylist');

let currentInput = '';
let calHistory = [];

console.log("Sistema iniciado. Aguardando entrada do usuário!");

// -------------------------------------------------------------
// Percorre todos os botões numéricos e operadores
// -------------------------------------------------------------

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {

        // "this" se refere ao botão clicado
        let value = this.textContent;
        console.log("Botão clicado:", value);

        if (value === '=') {
            try {

                console.log("Expressão antes do cálculo:", currentInput);

                if (currentInput === '') {
                    console.log("Nenhuma expressão digitada.");
                    return;
                }

                let result = eval(currentInput);
                console.log("Resultado calculado:", result);

                display.value = result;

                calHistory.push(currentInput + " = " + result);
                updateHistory();

                currentInput = result.toString();

            } catch (error) {
                console.error("Erro no cálculo:", error);
                display.value = "Erro";
                currentInput = '';
            }

        } else {
            currentInput += value;
            console.log("Input atualizado:", currentInput);
            display.value = currentInput;
        }

    });
}

// -------------------------------------------------------------
// Botão limpar
// -------------------------------------------------------------

clear.addEventListener('click', function () {
    console.log("Limpeza de tela e variáveis.");
    currentInput = '';
    display.value = '';
});

// -------------------------------------------------------------
// Atualizar histórico
// -------------------------------------------------------------

function updateHistory() {

    console.log("Atualizando o histórico de cálculos...");
    historylist.innerHTML = '';

    let reversed = calHistory.slice().reverse();

    for (let j = 0; j < reversed.length; j++) {

        let li = document.createElement('li');
        li.textContent = reversed[j];
        historylist.appendChild(li);

    }
}
