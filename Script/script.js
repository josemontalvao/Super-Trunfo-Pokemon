var carta1 = {
  nome: "Bulbasauro",
  imagem:
    "https://3.bp.blogspot.com/-L-qm9ojavh0/UGTq9iTM-CI/AAAAAAAAc-E/DVhbSMA-PAQ/s1600/Bulbsaur_Razor_Leaf.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
var carta2 = {
  nome: "Charmander",
  imagem:
    "https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};
var carta3 = {
  nome: "Pikachu",
  imagem:
    "https://4.bp.blogspot.com/-cebXJ9RB6r8/UPCCOoQHf0I/AAAAAAAAAyQ/fnM9_IbeW3U/s1600/pikachu_by_caridea-d3i4jd5.png",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};
var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var elementoResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Você venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Você perdeu!</p>";
  } else {
    htmlResultado = "<p class = 'resultado-final'>Você empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class ='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class ='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
}