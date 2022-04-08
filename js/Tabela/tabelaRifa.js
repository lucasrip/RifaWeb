window.addEventListener('load',()=>criaTabela());

    function criaTabela()
    {
        const tabela = document.querySelector('.tabela'); 
        const getDetalhe=[]; 
        
        for(let i= 1 ;i<=60 ; i++)
        {
         getDetalhe.push(buscaDetalhes(i))

           tabela.innerHTML+= 
           `<div class="numeroRifa">
              <div class="caixa" id="caixa${i}" name="caixa${i}">
                     <img src="./img/fechar.png" class="btnFechar" name="fecha${i}"/>
                ${getDetalhe[i-1]}
              </div>
              <div class="triangulo" id="triangulo${i}"></div>
               <button class="button" id="botaoValorRifa${i}">${i}</button>
            </div>
           `;
        } 
     addEvento()
    }
   
   
