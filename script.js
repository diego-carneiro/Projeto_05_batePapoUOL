let inputName;
let validarNome;
let msgBox;
let nameCheck;
let usertextbox = `<div class="usertextbox"></div>` 
const guestsURL = "https://mock-api.driven.com.br/api/v4/uol/participants ";
const statusURL = "https://mock-api.bootcamp.respondeai.com.br/api/v4/uol/status";
const msgURL = "https://mock-api.bootcamp.respondeai.com.br/api/v4/uol/messages";

function nomeEntrada(){
    inputName = prompt("Com qual nome deseja se conectar?");
    nameCheck = {name: inputName};
    entrar(nameCheck);
    renderizarNomes(nameCheck); 
}
nomeEntrada();

function entrar(nameCheck){
    let promise = axios.post(guestsURL, nameCheck);
    promise.then(statusCheck);
    setInterval(manterLogado, 5000, nameCheck)
} 

function statusCheck(resposta){
    if (resposta.status === 200){
        const promise = axios.get(guestsURL);
        promise.then()
    }else{
        alert("Entre com outro nome ou tente novamente");
    }
}

function manterLogado(nameCheck){
    let promise = axios.post(statusURL, nameCheck);
    promise.then(statusCheck);
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
        let txtType = buscarMensagens.data[i].type;
        let txtText = buscarMensagens.data[i].text;
        
        let msgBuild;
    
        if(txtType === "status"){
            msgBuild = `<li class="mensagens entrouNaSala"><p><time>(${txtTime})</time><strong class="txtNome"> &nbsp ${txtNome}</strong> &nbsp <strong class="txrRcvr"> ${txtRcvr}: &nbsp</strong> ${txtText}</p></li>`
        }else if(txtType === "message"){
            msgBuild = `<li class="mensagens mensagemPadrao"><p><time>(${txtTime})</time><strong class="txtNome"> &nbsp ${txtNome}</strong> &nbsp <strong class="txrRcvr"> ${txtRcvr}: &nbsp</strong> ${txtText}</p></li>`

        }else if(txtType === "private_message mensagemPrivada"){
            msgBuild = `<li class="mensagens"><p><time>(${txtTime})</time><strong class="txtNome"> &nbsp ${txtNome}</strong> &nbsp <strong class="txrRcvr"> ${txtRcvr}: &nbsp</strong> ${txtText}</p></li>`
        }
        
        msgBox.innerHTML += msgBuild;
        const scrollAuto = document.querySelector('.msgBox');
        scrollAuto.scrollIntoView();
        scrollAuto.scrollIntoView({block: "end"});
    }    
}

let idInterval =  setInterval(buscarMensagens, 3000);

function enviarMensagem() {
    const msgContent = document.querySelector("input").value;

    const objetoMensagem = {
      from: nameCheck.name,
      to: "Todos",
      text: msgContent,
      type: "message"
    }

    let msgBuild = document.querySelector("input");
    msgBuild.value = "";
    
    const promise = axios.post(msgURL, objetoMensagem);
    promise.then();
  }
