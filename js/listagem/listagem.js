const fecharLista = document.querySelector('.fecharLista');
const apagarRifa = document.getElementById('apagar');
const atualizarRifa = document.getElementById('atualizar');

fecharLista.addEventListener('click',(e)=>fecharMenu(e));

window.addEventListener('load',()=>criaListagem());

function criaListagem()
{
for(let i=1 ; i <= 60 ;i++) listagemContainer.innerHTML+= buscaDetalhes(i,true)  
}