const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está procurando algo para assistir na noite de sexta-feira e descobre um novo filme de romance no catálogo. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Acho fofo e adoro um bom romance!",
                afirmacao: "Você sempre se deixa levar pelo encanto das histórias de amor."
            },
            {
                texto: "Acho clichê, prefiro algo com mais drama ou suspense.",
                afirmacao: "Você prefere enredos mais complexos e com reviravoltas realistas."
            }
        ]
    },
    {
        enunciado: "Qual estilo de romance mais prende a sua atenção?",
        alternativas: [
            {
                texto: "Amor à primeira vista e encontros inusitados.",
                afirmacao: "Acredita na magia dos momentos espontâneos e nas conexões instantâneas."
            },
            {
                texto: "De inimigos a amantes (Enemies to Lovers) ou melhores amigos que se apaixonam.",
                afirmacao: "Valoriza histórias onde o sentimento é construído com o tempo e convivência."
            }
        ]
    },
    {
        enunciado: "O casal do filme passa por um grande mal-entendido e se separa no meio da história. Como você reage?",
        alternativas: [
            {
                texto: "Fico na torcida e sei que eles vão se acertar no final.",
                afirmacao: "É uma pessoa otimista que torce sempre pelo final feliz."
            },
            {
                texto: "Acho que a comunicação é tudo; se não conversam, talvez seja melhor terminarem.",
                afirmacao: "MANTÉM os pés no chão e prefere maturidade nos relacionamentos."
            }
        ]
    },
    {
        enunciado: "Chega a cena mais marcante do filme. Qual cenário ideal você escolheria para essa declaração de amor?",
        alternativas: [
            {
                texto: "Uma grande declaração sob a chuva ou no topo de uma cidade iluminada.",
                afirmacao: "Gosta de grandes gestos e momentos inesquecíveis cheios de emoção."
            },
            {
                texto: "Uma conversa íntima e sincera em um lugar calmo e acolhedor.",
                afirmacao: "Acredita que a verdadeira cumplicidade está nos detalhes simples do dia a dia."
            }
        ]
    },
    {
        enunciado: "Os créditos sobem e o filme termina. O que torna um filme de romance inesquecível para você?",
        alternativas: [
            {
                texto: "A trilha sonora marcante e a química inegável entre os atores.",
                afirmacao: "Sabe que a atmosfera e as sensações certas transformam uma boa cena em um clássico."
            },
            {
                texto: "Uma lição de vida sobre amor-próprio e crescimento pessoal além do casal.",
                afirmacao: "Entende que o verdadeiro amor começa quando aprendemos a amar a nós mesmos."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil em filmes de romance:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
   
         
        

  
