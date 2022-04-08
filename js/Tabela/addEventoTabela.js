    function addEvento()
    {
     const {buttons,btnFechar} = mapeamentoDeDom();
    
     buttons.forEach((button,index)=>button.addEventListener('click',()=>eventoClickButtonRifa(index)));
     
     btnFechar.forEach((button)=>button.addEventListener('click',()=>fechaBox()))

     window.addEventListener('click',event =>{
        const elementosFechar =['container'];
        const condicao = elementosFechar.some((valor)=> valor === event.target.classList[0]);
        condicao? fechaBox():'';
     })

    }
    
    function eventoClickButtonRifa(index)
    {
        fechaBox();
        chamaBox(index);
    }

    function chamaBox(index)
    {
     const {caixa,triangulo} = encontraBox(index);
     caixa.style.display="flex";
     triangulo.style.display="flex";
    }

