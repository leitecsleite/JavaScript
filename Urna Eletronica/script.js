let seuVotoPara = document.querySelector('.d-1-1 span'); 
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral =document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');



let etapaAtual = 0;
let votoBranco = true;
let numero = '';
let votos = [];


const comecarEtapa = () =>{
    let etapa = etapas[etapaAtual];
    let numeroHtml = ' ';
    votoBranco =false;
    numeros = document.querySelector('.d-1-3');
   
    for(let i = 0; i< etapa.numeros; i++){
      
       if( i == 0) {
        numeroHtml += '<div class="numero pisca"></div>'

       }else {
           numeroHtml += '<div class="numero"></div>'
       }
       
    }

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML ='';
    numeros.innerHTML = numeroHtml;

}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) =>{
        if(item.numero == numeros.substr(23, 5)){
            return true;
        }else{
            return false;
        }
    });
    
    if(candidato.length > 0){
        candidato =candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display='block';
        descricao.innerHTML = `Nome: ${candidato.name} </br> Partido: ${candidato.partido}` ;

        //

        let fotosHtml = '';

        for(let i in candidato.fotos){
            if (candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-image small"><img src="imagem/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}</div>`;
            }else {
               fotosHtml += `<div class="d-1-image"><img src="imagem/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}</div>`;
            }
       }
        lateral.innerHTML = fotosHtml;
    }else {
        seuVotoPara.style.display ="block";
        aviso.style.display= 'black';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`
    }
}
 
const clicou = (n)=>{
     let elNumero = document.querySelector('.numero.pisca');
     if(elNumero !== null){
        elNumero.innerHTML = n;
        numeros = `${numeros}${n}`;
        
        //retira a classe 'pisca' da div ;
        elNumero.classList.remove('pisca');

        elNumero.nextElementSibling;
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
     }
 } 

const branco =() =>{
    if (numero == ''){
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display ='block';
        numeros.innerHTML = '<div class="aviso--grande">VOTO EM BRANCO</div>';
    }else{
        alert("Para votar em Branco, não pode ter digitado nenhum número!");
    }
    
}

const corrige =() =>{
    comecarEtapa();
}

const confirma =() =>{
    let etapa = etapas[etapaAtual];
    let votoConfirmado = true;
    numero = numeros.substr(23,5);
    if(votoBranco === true) {
        console.log("Confirmando como branco...");
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    }else if (numeros.substr(23, 5).length === etapa.numeros) {
        votoConfirmado = true;
        console.log("confirmando como " + numeros.substr(23, 5));
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero 
        });
    }

    if(votoConfirmado){
        etapaAtual++;

       if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
       } else {
         document.querySelector('.tela').innerHTML = '<div class="aviso--gigante">FIM</div>'
         console.log(votos);
      }

    }
}

comecarEtapa();





