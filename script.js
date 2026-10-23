const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sexta à noite, chuva lá fora e você coloca um filme de romance. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Amo! Nada melhor do que se emocionar com uma boa história de amor.",
                afirmacao: "Você é uma pessoa romântica assumida que adora sentir fortes emoções."
            },
            {
                texto: "Gosto, mas prefiro quando o filme foca mais na comédia ou no drama do que só no mormaço.",
                afirmacao: "Você busca histórias dinâmicas e com bom humor acima de tudo."
            }
        ]
    },
    {
        enunciado: "Qual a melhor dinâmica entre o casal do filme para prender sua atenção?",
        alternativas: [
            {
                texto: "Inimigos que se odeiam no início e terminam apaixonados (Enemies to Lovers).",
                afirmacao: "Adora ver a evolução do sentimento e a tensão entre os personagens."
            },
            {
                texto: "Melhores amigos de infância que percebem que nasceram um para o outro.",
                afirmacao: "Acredita que o carinho e a amizade verdadeira são a base de qualquer amor."
            }
        ]
    },
    {
        enunciado: "O casal passa por aquele clássico mal-entendido e se separa. Qual a sua reação?",
        alternativas: [
            {
                texto: "Fico com o coração na mão, mas sei que vão se reconciliar até os créditos.",
                afirmacao: "Torce sempre por finais felizes e reencontros emocionantes."
            },
            {
                texto: "Passo raiva! Se conversassem por 5 minutos resolviam tudo.",
                afirmacao: "Valoriza a maturidade, a razão e a comunicação franca."
            }
        ]
    },
    {
        enunciado: "Na hora da grande declaração de amor, qual cenário é perfeito?",
        alternativas: [
            {
                texto: "Correndo no aeroporto ou se declarando debaixo de tempestade.",
                afirmacao: "Ama gestos grandiosos, cinematográficos e intensos."
            },
            {
                texto: "Um olhar sincero em um café calmo no final da tarde.",
                afirmacao: "Prefere momentos íntimos, sutis e cheios de significado verdadeiro."
            }
        ]
    },
    {
        enunciado: "O filme acaba. O que faz essa produção ser inesquecível para você?",
        alternativas: [
            {
                texto: "Uma trilha sonora marcante que me faz lembrar do filme sempre que ouço.",
                afirmacao: "Acredita que a música certa transforma qualquer momento em mágica purinha."
            },
            {
                texto: "Personagens bem construídos que aprendem a se amar antes de amar alguém.",
                afirmacao: "Entende que o crescimento pessoal e o amor-próprio são a verdadeira chave."
            }
        ]
    }
];

let posicao = 0;
let historiaConstruida = "";

function carregarPergunta() {
    if (posicao >= perguntas.length) {
        exibirResultado();
        return;
    }
    
    const perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    
    perguntaAtual.alternativas.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.addEventListener("click", () => processarEscolha(opcao.afirmacao));
        caixaAlternativas.appendChild(botao);
    });
}

function processarEscolha(afirmacao) {
    historiaConstruida += afirmacao + " ";
    posicao++;
    carregarPergunta();
}

function exibirResultado() {
    caixaPerguntas.textContent = "Seu Perfil Romântico:";
    textoResultado.textContent = historiaConstruida;
    caixaAlternativas.innerHTML = "";
}

carregarPergunta();
