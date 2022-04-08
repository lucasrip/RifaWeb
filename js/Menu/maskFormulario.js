
 camposComprador[0].addEventListener('keyup',(input)=>
 {
   input.target.value = toStringNome(input.target.value);
 },false);

 camposComprador[1].addEventListener('keypress',(input)=>
 {
  input.target.value = mascaraTell(input.target.value)
 },false);
  

 function mascaraTell (value)
 {
   return value
   .replace(/\D/g,'')
   .replace('','+')
   .replace(/(\d{2})/,'$1(')
   .replace(/(\(\d{2})/,'$1)')
   .replace(/(\d{5})/,'$1-')
   .replace(/(-\d{4})\d+?$/,'$1');
}

function toStringNome(value)
{
  return value
  .replace(/(\d)/,'')
  .replace(/\b([a-zA-Z])$/,(value = '$1') =>value.toUpperCase());  
}

