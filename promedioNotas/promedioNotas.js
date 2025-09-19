calcularPromedioNotas = function(){
    let nota1 = recuperarFloat("txt1");
    let nota2 = recuperarFloat("txt2");
    let nota3 = recuperarFloat("txt3");

    let promedio = calcularPromedio(nota1,nota2,nota3);
    let promedioformateado = promedio.toFixed(2);

    mostrarTexto("lblpromedio",promedioformateado);
    if(promedioformateado>7){
        mostrarImagen("imgExito","./imagenes/gif soy el exito.gif");

    }else{
        mostrarImagen("imgFra","./imagenes/gif soy un fra.gif");
    }

    return promedioformateado;

}