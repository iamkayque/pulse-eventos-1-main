document.addEventListener(
    //Garante que carrega todo o Html ante de executar o js
    "DOMContentLoaded",
    function() {
        //Seleciona o elemento <menu> do Html pelo nome do elemento
        const menu = document.querySelector("menu");
        //Obtém a distância em PX ente o topo da página e o menu
        const topo = menu.offsetTop;
        window.addEventListener("scroll", function() {
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop;

                    //Criando uma condicional
                    //Se a posição di scroll for maior ou igual ao topo da página
                    if(posicaoScroll>=topo){
                        menu.classList.add("fixed");
                    }else{
                        //removo a propriedade de fixar o menu ao topo da página
                        menu.classList.remove("fixed");

                    }

        });
    }
);