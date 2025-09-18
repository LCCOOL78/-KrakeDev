saludar=function(){
    // recuperar el valor de la caja de texto
    let nombre=recuperarTexto("txtnombre");
    // recuperar el valor de la caja de texto txt apellido
    let apellido=recuperarTexto("txtapellido");
    

}

recuperarTexto=function(idComponente){
    let componente;
    let valoringresado;
    componente=document.getElementById(idComponente);
    valoringresado=componente.value;
    return valoringresado;


}