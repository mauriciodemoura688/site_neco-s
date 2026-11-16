
// ===================================
// MENU DE NAVEGAÇÃO
// ===================================

const botaoMenu = document.getElementById("menu-toggle");

const menu = document.getElementById("menu");


botaoMenu.addEventListener("click", function() {

    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);

    botaoMenu.innerHTML = aberto ? "✕" : "☰";

});


// FECHAR MENU DEPOIS DE CLICAR

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("aberto");

        botaoMenu.innerHTML = "☰";

        botaoMenu.setAttribute("aria-expanded", "false");

    });

});


// ===================================
// CARDÁPIO DO NECO'S
// ===================================

const cardapio = {

    "Entradas": [

        {
            nome: "Caldo de costela",
            preco: "R$ 15"
        },

        {
            nome: "Caldo de feijão",
            preco: "R$ 12"
        }

    ],


    "Acompanhamentos": [

        {
            nome: "Arroz branco",
            preco: "R$ 8"
        },

        {
            nome: "Arroz vermelho",
            preco: "R$ 12"
        },

        {
            nome: "Rubacão",
            preco: "R$ 15"
        },

        {
            nome: "Feijão carioca",
            preco: "R$ 10"
        },

        {
            nome: "Farofa de feijão",
            preco: "R$ 12"
        },

        {
            nome: "Macarrão",
            preco: "R$ 8"
        },

        {
            nome: "Farinha",
            preco: "R$ 5"
        },

        {
            nome: "Vinagrete",
            preco: "R$ 5"
        },

        {
            nome: "Batata doce",
            preco: "R$ 5"
        },

        {
            nome: "Macaxeira cozida",
            preco: "R$ 10"
        }

    ],


    "Pratos na chapa": [

        {
            nome: "Carne de sol com queijo coalho",

            descricao: "Arroz branco, feijão carioca, farofa, vinagrete e macaxeira.",

            preco: "Meio R$ 94 | Inteiro R$ 150"
        },

        {
            nome: "Charque",

            descricao: "Rubacão, farofa de cuscuz, macarrão, vinagrete e macaxeira.",

            preco: "Meio R$ 88 | Inteiro R$ 140"
        },

        {
            nome: "Porco",

            descricao: "Arroz branco, farofa de feijão, macarrão, vinagrete e macaxeira.",

            preco: "Meio R$ 75 | Inteiro R$ 120"
        },

        {
            nome: "Frango",

            descricao: "Arroz branco, feijão carioca, farofa, vinagrete e batata doce.",

            preco: "Meio R$ 63 | Inteiro R$ 100"
        }

    ],


    "Outros pratos": [

        {
            nome: "Tilápia frita",

            descricao: "Rubacão, batata frita e salada.",

            preco: "Inteiro R$ 100"
        },

        {
            nome: "Galinha caipira",

            descricao: "Arroz vermelho, feijão carioca, pirão, batata doce e cuscuz.",

            preco: "Inteiro R$ 170"
        },

        {
            nome: "Carne de sol na nata",

            descricao: "Arroz branco, feijão carioca, cuscuz, vinagrete e macaxeira.",

            preco: "Meio R$ 100 | Inteiro R$ 160"
        }

    ],


    "Frituras": [

        {
            nome: "Batata frita grande",
            preco: "R$ 30"
        },

        {
            nome: "Batata frita pequena",
            preco: "R$ 19"
        },

        {
            nome: "Macaxeira frita",
            preco: "R$ 17"
        },

        {
            nome: "Torresmo",
            preco: "R$ 20"
        },

        {
            nome: "Isca de frango",
            preco: "R$ 25"
        },

        {
            nome: "Isca de peixe",
            preco: "R$ 30"
        },

        {
            nome: "Bola de frango",
            preco: "R$ 15"
        },

        {
            nome: "Bola de queijo",
            preco: "R$ 15"
        },

        {
            nome: "Bola de carne de sol",
            preco: "R$ 17"
        },

        {
            nome: "Calabresa acebolada",
            preco: "R$ 15"
        },

        {
            nome: "Bola de calabresa com bacon",
            preco: "R$ 17"
        },

        {
            nome: "Tirinhas de macaxeira",
            preco: "R$ 10"
        },

        {
            nome: "Trio Neco's",

            descricao: "Carne de sol, anéis de cebola e queijo coalho.",

            preco: "R$ 60"
        },

        {
            nome: "Queijo coalho com mel de engenho",
            preco: "R$ 25"
        }

    ],


    "Sobremesas": [

        {
            nome: "Leite liso",
            preco: "R$ 5"
        },

        {
            nome: "Leite cortado",
            preco: "R$ 5"
        },

        {
            nome: "Mamão com coco",
            preco: "R$ 5"
        },

        {
            nome: "Pudim de leite",

            descricao: "Fatia.",

            preco: "R$ 7"
        }

    ],


    "Bebidas": [

        {
            nome: "Água sem gás",
            preco: "R$ 3"
        },

        {
            nome: "Água com gás",
            preco: "R$ 5"
        },

        {
            nome: "Red Bull",
            preco: "R$ 12"
        },

        {
            nome: "H2OH Limoneto",
            preco: "R$ 8"
        },

        {
            nome: "Refrigerante 1 litro",

            descricao: "Guaraná, Coca-Cola e Fanta Laranja.",

            preco: "R$ 10"
        },

        {
            nome: "Refrigerante 600 ml",

            descricao: "Cajuína.",

            preco: "R$ 8"
        },

        {
            nome: "Refrigerante lata",

            descricao: "Consulte os sabores disponíveis.",

            preco: "R$ 6"
        },

        {
            nome: "Água tônica",
            preco: "R$ 6"
        },

        {
            nome: "Suco - copo 250 ml",

            descricao: "Maracujá, cajá, graviola, abacaxi com hortelã e acerola.",

            preco: "R$ 8"
        },

        {
            nome: "Suco - jarra 500 ml",
            preco: "R$ 12"
        },

        {
            nome: "Suco - jarra 1 litro",
            preco: "R$ 20"
        }

    ]

};


// ===================================
// ELEMENTOS DO HTML
// ===================================

const areaCategorias = document.getElementById("categorias");

const areaCardapio = document.getElementById("lista-cardapio");


// ===================================
// CRIAR BOTÕES DAS CATEGORIAS
// ===================================

function criarCategorias() {

    areaCategorias.innerHTML = "";

    Object.keys(cardapio).forEach(function(categoria, indice) {

        const botao = document.createElement("button");

        botao.classList.add("categoria-btn");

        botao.textContent = categoria;

        if (indice === 0) {

            botao.classList.add("ativa");

        }

        botao.addEventListener("click", function() {

            mostrarCardapio(categoria);

            const botoes = document.querySelectorAll(".categoria-btn");

            botoes.forEach(function(item) {

                item.classList.remove("ativa");

            });

            botao.classList.add("ativa");

        });

        areaCategorias.appendChild(botao);

    });

}


// ===================================
// MOSTRAR OS PRATOS
// ===================================

function mostrarCardapio(categoria) {

    areaCardapio.innerHTML = "";

    cardapio[categoria].forEach(function(prato) {

        const item = document.createElement("div");

        item.classList.add("item-cardapio");


        // INFORMAÇÕES DO PRATO

        const informacoes = document.createElement("div");

        const nome = document.createElement("h3");

        nome.textContent = prato.nome;

        informacoes.appendChild(nome);


        // DESCRIÇÃO DO PRATO

        if (prato.descricao) {

            const descricao = document.createElement("p");

            descricao.textContent = prato.descricao;

            informacoes.appendChild(descricao);

        }


        // PREÇO

        const preco = document.createElement("span");

        preco.classList.add("preco");

        preco.textContent = prato.preco;


        // ADICIONAR AO CARDÁPIO

        item.appendChild(informacoes);

        item.appendChild(preco);

        areaCardapio.appendChild(item);

    });

}


// ===================================
// INICIAR O SITE
// ===================================

criarCategorias();

mostrarCardapio("Entradas");
