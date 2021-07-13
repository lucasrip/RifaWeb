 const inputs = document.querySelectorAll('input');

 inputs[0].addEventListener('keyup',(input)=>input.target.value = toStringNome(input.target.value),false);
 
 inputs[1].addEventListener('keypress',(input)=>
 {
 input.target.value = permiteNumeros(input.target.value)
 input.target.value = mascaraTell(input.target.value)
 },false);
 
 for(let i = 3;i<inputs.length;i++)
 {
  inputs[i].addEventListener('keyup',(input)=>input.target.value = permiteNumeros(input.target.value),false);
 }

 function mascaraTell (value)
 {
   return value
   .replace('','+')
   .replace(/(\d{2})/,'$1(')
   .replace(/(\(\d{2})/,'$1)')
   .replace(/(\d{5})/,'$1-')
   .replace(/(-\d{4})\d+?$/,'$1');
}

const permiteNumeros =(value)=>value.replace(/\D/g,'');

function toStringNome(value)
{
  return value
  .replace(/(\d)/,'')
  .replace(/\b([a-zA-Z])$/,(value = '$1') =>value.toUpperCase());  
}
