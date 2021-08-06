let inputName;
let validarNome;
let msgBox;
let usertextbox = `<div class="usertextbox"></div>` 
const guestsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants";
const statusURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/status";
const msgURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/messages";

function nomeEntrada(){
    inputName = prompt("Com qual nome deseja se conectar?");
    let nameCheck = {name: inputName};
    entrar(nameCheck);
    renderizarNomes(nameCheck);
 }
nomeEntrada();

function manterLogado(nameCheck){
    let promise = axios.post(statusURL, nameCheck);
    promise.then(statusCheck);
}

function entrar(nameCheck){
    let promise = axios.post(guestsURL, nameCheck);
    promise.then(statusCheck);
} 
function statusCheck(resposta){
    if (resposta.status === 200){
        const promise = axios.get(guestsURL);
        promise.then()
    }else{
        alert("Entre com outro nome ou tente novamente");
    }
}
function renderizarNomes(buscarMensagens){
    console.log(buscarMensagens);
    let addName = document.querySelector(".msgBox");
    addName.innerHTML = buscarMensagens.name;
    addName.classList.add('entrouNaSala')
}
function buscarMensagens(){
    const promise = axios.get(msgURL);
    promise.then(renderizarMensagens);
}

function renderizarMensagens(buscarMensagens){

    msgBox = document.querySelector(".msgBox"); 
    msgBox.innerHTML = "";

    for(let i = 0; i < buscarMensagens.data.length ; i++){ 
        
        let txtTime = buscarMensagens.data[i].time;
        let txtNome = buscarMensagens.data[i].from;
        let txtRcvr = buscarMensagens.data[i].to;
        let txtText = buscarMensagens.data[i].text;
        
        const msgBuild = `<li class="mensagens"><p><time>(${txtTime})</time><strong class="txtNome"> &nbsp ${txtNome}</strong> &nbsp <strong class="txrRcvr"> ${txtRcvr}: &nbsp</strong> ${txtText}</p></li>`

        msgBox.innerHTML += msgBuild;
    }    
}

let idInterval =  setInterval(buscarMensagens, 3000);

