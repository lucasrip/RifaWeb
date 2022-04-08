function storage(){};

storage.prototype.carregarUsuarios = function()
{
   const lista = JSON.parse(localStorage.getItem('usuario'));
 return lista
}

storage.prototype.carregaRifas = function()
{
   const lista = JSON.parse(localStorage.getItem('rifas'));
 return  lista
}

storage.prototype.salvarUsuarios = function(dataValue)
{
   const listaUsuarios =storageRifa.carregarUsuarios()||[];
   localStorage.setItem('usuario',JSON.stringify([...listaUsuarios,dataValue]));
}

storage.prototype.salvarRifas = function(rifas)
{
   const listaRifa =storageRifa.carregaRifas()||[];
   localStorage.setItem('rifas',JSON.stringify([...listaRifa,...rifas].sort()));
}



const  storageRifa = new storage();
const data =  storageRifa.carregarUsuarios()||[];
