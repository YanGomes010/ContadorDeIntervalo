var ini = document.querySelector("#inicio");
var fim = document.querySelector("#fim");
var passo = document.querySelector("#passo");
var botao = document.querySelector("#submit");
var numeros = document.querySelector(".numeros");
botao.addEventListener("click", () => {
    // Validando valor dos inputs
    if (ini.value == "" || fim.value == "" || passo.value == "") {
        alert("Por favor, adicione informações nos campos")

    }
    // Se nada estiver vazio, a função executa
    else {
        numeros.innerHTML = "";
        passo.style.borderColor = "black"
        var inicio = Number(ini.value);
        var final = Number(fim.value);
        var pula = Number(passo.value);

        // Validar form
        if (passo.value <= 0) {
            passo.style.borderColor = "red"
            setTimeout(() => {
                passo.value = "";
            }, 1000);
        } else {

            // Contagem crescente
            if (ini.value <= fim.value) {
                for (i = inicio; i <= final; i += pula) {
                    numeros.innerHTML += ` ${i} \u{2192}`;
                    console.log(i)
                }
            }
            // Contagem decrescente, mudanças em "i >= final" e "i -= pula"
            else {
                for (i = inicio; i >= final; i -= pula) {
                    numeros.innerHTML += ` ${i} \u{2192}`;
                    console.log(i)
                }
                document.querySelector(".contando").innerHTML = `Contando:`
            }
        }

        // Adiciona um placeholder com o valor do input para lembrar o valor sem que ele esteja com valor literal

        passo.setAttribute("placeholder", `${passo.value}`)
        ini.setAttribute("placeholder", `${ini.value}`)
        fim.setAttribute("placeholder", `${fim.value}`)

        // Zerando valores para evitar alguns bugs

        passo.value = "";
        ini.value = "";
        fim.value = "";
    }
})