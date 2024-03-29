/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML;

    - passo 2 - dar um jeito de identificar o clique no elemento da aba;

    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada;

    - passo 4 - marcar a aba clicada como selecionado;

    - passo 5 - esconder o conteúdo anterior;

    - passo 6 - mostrar o conteúdo da aba selecionada.
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

// passo 2 - dar um jeito de identificar o clique no elemento da aba.
abas.forEach(aba => {
    aba.addEventListener("click" , function(){

        if(aba.classList.contains("select")){
            return;
        };

        selecionarAba(aba)
        mostrarInfoAbas(aba)
    })
})

function selecionarAba(aba){
    
        // passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
        const abaSelect = document.querySelector(".aba.select");
        abaSelect.classList.remove("select");

        // passo 4 - marcar a aba clicada como selecionado.
        aba.classList.add("select");

}

function mostrarInfoAbas(aba){
        // passo 5 - esconder o conteúdo anterior.

        const infoSelect = document.querySelector(".info.select")

        infoSelect.classList.remove("select");
        
        // passo 6 - mostrar o conteúdo da aba selecionada.
        const idDoElementoDeInformacoesDaAba = `info-${aba.id}`
                
        const infoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        infoASerMostrada.classList.add("select")


}


/*
    foreach - para cada. ele executa uma ação para cada item da lista.
    querySelectorAll() = vários elementos.
    querySelector() = apenas um.
*/