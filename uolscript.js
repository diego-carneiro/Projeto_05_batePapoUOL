let inputName;
let validarNome;
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
/*setInterval(manterLogado,5000);
*/
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

function buscarMensagens(){
    const promise = axios.get(msgURL);
    promise.then(renderizarMensagens);
}
buscarMensagens();

 function renderizarNomes(buscarMensagens){
    let addName = document.querySelector(".mensagens");
     addName.innerHTML = buscarMensagens.name;
     addName.classList.add('entrouNaSala')
 }
function renderizarMensagens(buscarMensagens){
    console.log(renderizarMensagens);
    console.log(buscarMensagens);

    for(let i = 0; i < buscarMensagens.data.length ; i++){ 
        let txtTime = document.querySelector(".mensagens");
        txtTime.innerHTML += buscarMensagens.data[i].time;
        let nometxt = document.querySelector(".mensagens");
        nometxt.innerHTML += buscarMensagens.data[i].from;
        let destinatário = document.querySelector(".mensagens");
        destinatário.innerHTML += buscarMensagens.data[i].to;
    }    
    //     let addMsg = document.querySelector(".mensagens");
    //     addMsg.innerHTML = buscarMensagens.data.from;
    //     addMsg.classList.add('entrouNaSala');
    // }
}
// let addMsg = document.querySelector(".mensagens");
// addMsg.innerHTML = mensagens.msgURL;
// tiju*/
