function trocaConteudo(valor){
    displayNone();
    removeBackgroundSecondary();
    addBackgroundDark();
    document.getElementById(valor).style.display = "block";
    document.getElementById(valor + "2").classList.remove("bg-dark");
    document.getElementById(valor + "2").classList.add("bg-secondary");
}


function displayNone() {
    document.getElementById('editarPerfil').style.display = "none";
    document.getElementById('estatisticas').style.display = "none";
    document.getElementById('chats').style.display = "none";
    document.getElementById('notificacoes').style.display = "none";
    document.getElementById('fretes').style.display = "none";
    document.getElementById('mapa').style.display = "none";
    document.getElementById('historico').style.display = "none";
    document.getElementById('funcionarios').style.display = "none";
    document.getElementById('filiais').style.display = "none";
    document.getElementById('caminhoes').style.display = "none";
    document.getElementById('carretas').style.display = "none";
}


function removeBackgroundSecondary() {
    document.getElementById('editarPerfil2').classList.remove("bg-secondary");
    document.getElementById('estatisticas2').classList.remove("bg-secondary");
    document.getElementById('chats2').classList.remove("bg-secondary");
    document.getElementById('notificacoes2').classList.remove("bg-secondary");
    document.getElementById('fretes2').classList.remove("bg-secondary");
    document.getElementById('mapa2').classList.remove("bg-secondary");
    document.getElementById('historico2').classList.remove("bg-secondary");
    document.getElementById('funcionarios2').classList.remove("bg-secondary");
    document.getElementById('filiais2').classList.remove("bg-secondary");
    document.getElementById('caminhoes2').classList.remove("bg-secondary");
    document.getElementById('carretas2').classList.remove("bg-secondary");
}


function addBackgroundDark() {
    document.getElementById('editarPerfil2').classList.add("bg-dark");
    document.getElementById('estatisticas2').classList.add("bg-dark");
    document.getElementById('chats2').classList.add("bg-dark");
    document.getElementById('notificacoes2').classList.add("bg-dark");
    document.getElementById('fretes2').classList.add("bg-dark");
    document.getElementById('mapa2').classList.add("bg-dark");
    document.getElementById('historico2').classList.add("bg-dark");
    document.getElementById('funcionarios2').classList.add("bg-dark");
    document.getElementById('filiais2').classList.add("bg-dark");
    document.getElementById('caminhoes2').classList.add("bg-dark");
    document.getElementById('carretas2').classList.add("bg-dark");
}

$('.popover-dismiss').popover({
    trigger: 'focus'
  })