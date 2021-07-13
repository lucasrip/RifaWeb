const sortear = document.querySelector('.btnSortear');
const ganhador = document.querySelector('.ganhador');

sortear.addEventListener('click',()=>sortearValorRandom());

function sortearValorRandom()
{
 const valorAleatorio =Math.floor(Math.random() * 60);
 ganhador.innerHTML = valorAleatorio;
}
