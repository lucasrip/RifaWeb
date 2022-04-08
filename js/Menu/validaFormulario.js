const campoResposta =document.querySelector('.validaForm');
let podeSalvar = true;

function validaValoresForm(valoresFormRifa)
{
  const {nome,tell,email,rifa1,rifa2,rifa3} = valoresFormRifa;

  let validaNome=false,validaTell,validaEmail,validaRifa,validaValorRifa;
  let salvar,rifasEscolidas,error;

  rifasEscolidas =[rifa1,rifa2,rifa3].filter(rifa => rifa !== 'nenhum');

  if(nome.length > 0 || nome.length <=47 )validaNome = true
  tell.length === 17?validaTell = true:validaTell=false;
  validaEmail = /^[aA-zZ0-9.]+@[a-z0-9]+(\.com.br|.com)?$/i.test(email)
  validaRifa = rifasEscolidas.some(rifa=>rifa !== '');
  
  if(rifa1 !== rifa2 && rifa1 !== rifa3 && rifa2 !== rifa3)validaValorRifa = true
  else validaValorRifa = false;

  let listaValidaCampos =[validaNome,validaTell,validaEmail,validaRifa,validaValorRifa];
  salvar = listaValidaCampos.every(item => item === true);

  error=
   [
       'o campo nome precisa ser preenchido',
       'esta faltando digitos no tell',
       'o email nao e valido',
       'voce precisa comprar ao menos uma rifa',
       'voce nao pode comprar 2x ou mais vezes a mesma rifa', 
   ];


   salvar?salvarCompra(valoresFormRifa,rifasEscolidas):mostraErro(listaValidaCampos,error);
}

function salvarCompra(valoresFormRifa,rifasEscolidas)
{  
  if(podeSalvar)
  { 
    storageRifa.salvarUsuarios({id:criaId(),...valoresFormRifa});  
    storageRifa.salvarRifas(rifasEscolidas);
    confirmaCompra()
    podeSalvar = false;
  }
}

function criaId()
{
  let id,valoresId=[],nmId =0;
  
   while(valoresId.length <=5)
   {
      nmId = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      if(nmId >= 65 && nmId <= 90 ) valoresId.push(nmId);
   }

   id = valoresId.map(valor => String.fromCharCode(valor)).reduce((item,id)=>item+=id);
 
  return id
}

function confirmaCompra()
{
  criaElemento('compra realizada com sucesso')
  campoResposta.children[0].style.backgroundColor = '#27df36';
  removeValidacao(3000);
  setTimeout(()=>window.location.href='index.html',3100)
}
  
function mostraErro(listaValidaCampos,error)
{
  let tempo = 2000;

  if(campoResposta.firstChild === null)
  {
   listaValidaCampos.forEach((campo,index) => {
      if(campo === false)
      { 
        criaElemento(error[index])
        removeValidacao(tempo);
        tempo+=500;
       
      } 
   });
  }
}

function removeValidacao(tempo)
{
 setTimeout(()=>
 {
  campoResposta.removeChild(campoResposta.firstChild);

 },tempo)
}

function criaElemento(texto)
{
  let li =document.createElement("LI");
  let p = document.createElement("P");
  let textoValidacao = document.createTextNode(texto);
  p.appendChild(textoValidacao); 
  li.appendChild(p);
  campoResposta.appendChild(li);
}
