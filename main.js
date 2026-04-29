const user = document.querySelector('#user');
const input = document.querySelector('#age');
const mens = document.querySelector('#mensagem');
const voto = document.querySelector('#voto');
const desculpa = document.querySelector('#desculpa');
const idadePovo = document.querySelector('#idadePovo');
let userName = localStorage.getItem('usuario');
    
    if (!userName) {
      userName = prompt('Qual seu primeiro nome?') || 'Visitante';
      localStorage.setItem('usuario', userName);
    } // Se não existir nome no localStorage, pede ao usuário (! significa "não existe")//
    
    user.innerText = userName.toUpperCase();
    
    const btnV = document.querySelector('#btnV');
    btnV.addEventListener('click', verificar) /*HTML mais limpo JavaScript cuida do evento e do nome da função, funciona a partir do ID*/
    
    function setStatus(texto, cor) {
      mens.innerText = texto;
      mens.style.color = cor;
      input.style.border = `2px solid ${cor}`
    } /*Função das cores, ajuda a diminuir a repetição*/
    
    function verificar() {
      
      const age = Number(input.value);
      const ageFixed = age >= 18; /*melhora a manutenção futuramente*/
      
      const respostas = [
          "Maior de idade!", "Menor de idade!", "Preencha o campo!", "Idade inválida 1 - 110 anos"
        ]; /*Array das respostas*/
      
      if (input.value.trim()) {
        if (age > 110 || age < 1) {
          setStatus(respostas[3], '#ff4d4d');
        } else {
          setStatus(ageFixed ? respostas[0] : respostas[1], ageFixed ? '#00ff00' : '#ff4d4d');
          
          idadePovo.style.display = 'none';
          voto.style.display = ageFixed ? 'flex' : 'none';
          desculpa.style.display = ageFixed ? 'none' : 'flex';
        }
      } else {
        setStatus(respostas[2], '#ff4d4d') /*Melhora, menos repetição*/
      }
    }
    
        /*Importante: Tudo oque o usuário digitar se quiser usar em uma função tem que permanecer dentro da função*/
    
const btnVoto = document.querySelector('#btnVoto');
const voteAqui = document.querySelector('#voteAqui'); /*Verificador se tem algo digitado*/
const resVoto = document.querySelector('#resVoto');
const imgPresi = document.querySelector('#imgPresi');

btnVoto.addEventListener('click', computadorVoto);

function computadorVoto() {
  const votoDoPovo = Number(voteAqui.value);
  
  const respostaV = [
    "Preencher o campo!"
  ];
  const imagem = [
    "https://i.postimg.cc/vZtm6zYy/images.jpg", "https://i.postimg.cc/dQZt9vsQ/images-(1).jpg"
  ];
  
  const nomes = [
    "Luiz Inácio Lula da Silva", "Jair Messias Bolsonaro"
  ]
  
  if (voteAqui.value.trim()) {
    if (votoDoPovo == 13) {
      resVoto.innerHTML = `Votou: <span>${nomes[0]}</span>`;
      imgPresi.src = imagem[0];
      imgPresi.style.display = 'block';
    } else if (votoDoPovo == 22) {
      resVoto.innerHTML = `Votou: <span>${nomes[1]}</span>`;
      imgPresi.src = imagem[1];
      imgPresi.style.display = 'block';
    } else {
      resVoto.innerText = 'Voto inválido!'
      imgPresi.style.display = 'none';
    }
  } else {
    resVoto.innerText = respostaV[0];
  }
}
