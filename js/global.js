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

function fechaBox()
{
  const {caixasTabelas,triangulos}=mapeamentoDeDom(); 
  caixasTabelas.forEach(caixa=>caixa.style.display='none');
  triangulos.forEach(triangulo=>triangulo.style.display='none');
}


function fecharMenu (event)
{
    const elementosFechar =['fecharCompra','fecharSortear','cancelarCompra','containerOpcoesMenu','fecharLista'];
    const condicao = elementosFechar.some((valor)=> valor === event.target.classList[0]);
    condicao?containerMoldal.style.display = 'none':'';
}

function buscaDetalhes(i,listagem=false)
{ 
  const rifasCompradas = storageRifa.carregaRifas()||[];
 
  const detalhes = data&& data.filter((item)=>{
   if(parseInt(item.rifa1) === i || parseInt(item.rifa2) === i || parseInt(item.rifa3) === i)
   return item
   });
  
   const {nome,tell,email,rifa1,rifa2,rifa3}= detalhes[0]||{nome:'',tell:'',email:'',rifa1:'',rifa2:'',rifa3:''};
    
   return parseInt(rifasCompradas[i-1]) === i?`
   <div class="itemDetalhe">
     ${listagem? "<strong>Cadastro N"+i+"</strong>":""}
     <span>
      <strong>Nome</strong>
      ${nome}
     </span>
     <span>
      <strong>Email</strong>
      ${email}
     </span>
     <span>
      <strong>Tell</strong>
      ${tell}
     </span>
     <span>
      <strong>Rifas</strong>
      ${rifa1+' '+rifa2+' '+ rifa3}
     </span>
     ${listagem?`
     <div class="iconsUser">
        <img src="img/apagar.svg" id="apagar" alt="icone para apagar"/>
     </div>
     `:""}
   </div>
   `:`<strong class="naoComprado">${listagem? i:''} Não comprado ainda</strong>`
}

