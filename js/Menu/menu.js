const btnComprar = document.querySelector('.comprar');
const btnSortear = document.querySelector('.sortear');
const btnListar = document.querySelector('.listar');


const modalSortear = document.querySelector('.modalSortear')
const formComprar = document.querySelector('.formComprar');
const  listagemContainer = document.querySelector('.listagemContainer');


btnComprar.addEventListener('click',chamaComprar)
btnSortear.addEventListener('click',chamaSortear)
btnListar.addEventListener('click',chamaListagem)


function chamaComprar()
{
 fecharOpcoes();
 fechaBox();
 containerMoldal.style.display='flex';
 formComprar.style.display='flex';   
}

function chamaSortear()
{
    fecharOpcoes();
    fechaBox();
    containerMoldal.style.display='flex';
    modalSortear.style.display='flex';
}

function fecharOpcoes()
{
modalSortear.style.display='none';
formComprar.style.display='none'; 
listagemContainer.style.display='none';
listagemContainer.style.left='-100%';

}

function chamaListagem()
{
    fecharOpcoes();
    fechaBox();
    containerMoldal.style.display='flex';
    listagemContainer.style.display='flex';
    setTimeout(()=>{
    listagemContainer.style.left='0px';
    },100)

}