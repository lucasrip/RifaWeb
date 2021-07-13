    function addEvento()
    {
     const {buttons,btnFechar} = mapeamentoDeDom();
    
     buttons.forEach((button,index)=>button.addEventListener('click',()=>eventoClickButtonRifa(button,index)));
     
     btnFechar.forEach((button)=>button.addEventListener('click',()=>fechaBox()))

     window.addEventListener('click',event =>{
        const elementosFechar =['container'];
        const condicao = elementosFechar.some((valor)=> valor === event.target.classList[0]);
        condicao? fechaBox():'';
     })

    }
    
    function eventoClickButtonRifa(button,index)
    {
        fechaBox();
        chamaBox(index);

        button.style.backgroundColor='#af5fe8 ';

    }


    function chamaBox(index)
    {
     const {caixa,triangulo} = encontraBox(index);
     caixa.style.display="flex";
     triangulo.style.display="flex";
   
    }

