window.addEventListener('load',()=>criaTabela());
     
    function criaTabela()
    {
        const tabela = document.querySelector('.tabela'); 
        
        for(let i= 1 ;i<=60 ; i++)
        {
           tabela.innerHTML+= 
           `<div class="numeroRifa">
              <div class="caixa" id="caixa${i}" name="caixa${i}">
                  <div class="tituloRifa">
                    <span class="logoBalao">
                     <img src="./img/Rifa.svg">
                    </span>
                    <span class="btnFechar" name="fecha${i}"> 
                     <img src="./img/fechar.png">
                    </span>
                  </div>
              </div>

              <div class="triangulo" id="triangulo${i}"></div>
               <button class="button" id="botaoValorRifa${i}">${i}</button>
            </div>
           `;
        }
     addEvento()
    }
 
    