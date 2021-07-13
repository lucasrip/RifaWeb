function mapeamentoDeDom()
{
 const btnFechar =document.querySelectorAll('.btnFechar');
 const buttons =document.querySelectorAll('.button');
 const caixasTabelas =document.querySelectorAll('.caixa');
 const triangulos =document.querySelectorAll('.triangulo');

 return{buttons,caixasTabelas,triangulos,btnFechar}
}

function encontraBox(index)
{
 const {caixasTabelas,triangulos} = mapeamentoDeDom();
 const caixa =document.getElementById(`${caixasTabelas[index].id}`);
 const triangulo =document.getElementById(`${triangulos[index].id}`);

return {caixa,triangulo}
}

function fechaBox()//alterar o estilo do bg
{
  const {caixasTabelas,triangulos,buttons}=mapeamentoDeDom();

  buttons.forEach(button=>button.style.backgroundColor = 'transparent');   
  caixasTabelas.forEach(caixa=>caixa.style.display='none');
  triangulos.forEach(triangulo=>triangulo.style.display='none');
}


function fecharMenu (event)
{
    const elementosFechar =['fecharCompra','fecharSortear','cancelarCompra','containerOpcoesMenu'];
    const condicao = elementosFechar.some((valor)=> valor === event.target.classList[0]);
    condicao?containerMoldal.style.display = 'none':'';
}



