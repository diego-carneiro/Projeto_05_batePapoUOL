let inputName;
let validarNome;
let usertextbox = `<div class="usertextbox"></div>` 
const APIURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/uol/participants";

function nomeEntrada(){
    inputName = prompt("Com qual nome deseja se conectar?");
    let nameCheck = {name: inputName};
    entrar(nameCheck);
 }
nomeEntrada();

function entrar(nameCheck){
    let promise = axios.post(APIURL, nameCheck);
    promise.then(statusCheck);
} 

function statusCheck(resposta){
    console.log(resposta);
    if (resposta.status === 200){
        const promise = axios.get(APIURL);
        promise.then()
    }else{
        alert("Entre com outro nome ou tente novamente");
    }
}
// function exibirNome(){

// }

