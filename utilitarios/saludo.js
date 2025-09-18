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

    mostrarTextoEnCaja("txtnombre","")

}

