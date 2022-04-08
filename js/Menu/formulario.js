const containerMoldal = document.querySelector('.containerOpcoesMenu');
const btnFormComprar = document.querySelector('.comprarRifa');

const camposComprador = document.querySelectorAll('input');
const nmRifa = document.querySelectorAll('select');

btnFormComprar.addEventListener('click',()=>validaValoresForm(getValues(camposComprador,nmRifa)),false)
containerMoldal.addEventListener('click',event => fecharMenu(event));

function getValues(camposComprador,nmRifa)
{
     const [nome,tell,email,rifa1,rifa2,rifa3] = [...camposComprador,...nmRifa] ;
     
     return {
        nome:nome.value,
        tell:tell.value,
        email:email.value,
        rifa1:rifa1.value,
        rifa2:rifa2.value,
        rifa3:rifa3.value,
     }
}

window.addEventListener('load',()=>{
 let numeroRifa;
 const rifasCompradas =storageRifa.carregaRifas();

   for(let i=0 ; i<=60;i++)
   {
     let validaRifas = rifasCompradas?rifasCompradas:[];
     let haRifa = validaRifas.some(rifa => rifa === `${i}`);
    
     if(!haRifa)
     {
       numeroRifa =`<option value="${ i=== 0?'nenhum':i }">${ i=== 0?'nenhum':i}</option>`;
       nmRifa[0].innerHTML+=numeroRifa;
       nmRifa[1].innerHTML+=numeroRifa;
       nmRifa[2].innerHTML+=numeroRifa;
     }
   }
  
});

