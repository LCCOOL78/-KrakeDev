saludar=function(){
    // recuperar el valor de la caja de texto
    let nombre=recuperarTexto("txtnombre");
    // recuperar el valor de la caja de texto txt apellido
    let apellido=recuperarTexto("txtapellido");

    let edad = recuperarInt("txtedad");

    let estatura = recuperarFloat("txtestatura");

    let mensajeBienvenido ="Bienvenido "+nombre+" "+apellido

    mostrarTexto("lblResultado",mensajeBienvenido);

    mostrarImagen("imgSaludo","./imagenes/gif saludo.gif");

}

mostrarImagen = function(idComponente,rutaImagen){
     let componente;
    componente=document.getElementById(idComponente);
    componente.src = rutaImagen;

}

mostrarTexto = function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;

}

recuperarTexto=function(idComponente){
    let componente;
    let valoringresado;
    componente=document.getElementById(idComponente);
    valoringresado=componente.value;
    return valoringresado;


}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;

}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;

}