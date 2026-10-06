if(!localStorage.getItem('usuarios')){

const bancoIncial = [

{ usuario: 'sophia K melao', senha: '4002'},

{ usuario: 'ana', senha: '123'}
    ];

    localStorage.setItem('usuarios', JSON.stringify(bancoIncial));

    }

const formLogin= document.getElementById('form');

if(formLogin){

formLogin.addEventListener('submit', function(e){

e.proventDefault();

const usuarioDigitado = document.getElementById('usuario').value;

const usuarioDigitada = document.getElementById('senha').value;

const usuarios = JSON.parse(localStorage.getItem('usuarios'));

const usuarioEncontrado = usuario.find(function(user) {

return user.usuario === usuarioDigitado && user.senha === senhaDigitada;

});

if(usuarioEncontrado){

    localStorage.setItem('usuariologado', usuarioDigitado);

window.location.href= 'home.html';

} else {
alert('Usuario ou Senha Incorretos!');

}

});

}

const carHome = document.querySelector('card-home');

if(cardHome){

const usuarioLogado = localStorage.getItem('usuarioLogado');

if (!usuarioLogado) {

window.location.href='index.html';

}else{

document.getElementById('mensagemBoasVindas').textContent='Bem Vindo' +usuarioLogado + '!';

}

}                             
