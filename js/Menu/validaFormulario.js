const campoResposta =document.querySelector('.validaCampo');

inputs[0].addEventListener('focusout',(input)=>verificaPreenchimento(input.target.value,'Nome'),false);
inputs[1].addEventListener('focusout',(input)=>verificaPreenchimento(input.target.value,'Cell'),false);
inputs[2].addEventListener('focusout',(input)=>verificaPreenchimento(input.target.value,'Email'),false);

function verificaPreenchimento(value,nomeCampo)
{
 const validaPreenchimentoVazio = value === ''; 
 const respostaErroPreenchimento =validaPreenchimentoVazio?`O ${nomeCampo} nao pode ficar vazio`:'';
 validaPreenchimentoVazio?addRespostaErro(respostaErroPreenchimento):'';
}

function addRespostaErro (value)
{ 
    const li =document.createElement('li');
    li.textContent = value;
    campoResposta.appendChild(li);
    campoResposta.style.display='flex';
    
    limpaRespostaErro(li)
}

async function limpaRespostaErro (li)
{
     await setTimeout(()=>{
      campoResposta.removeChild(li);
      campoResposta.style.display='none';
     },3000)
}