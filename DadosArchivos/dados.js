jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblNumero","ES MAYOR A 3");
        cambiarTexto("lblNumero","GANASTE"); 
        
    }else{
        cambiarTexto("lblNumero","ES MENOR A 3");
        cambiarTexto("lblNumero","ESTAS DE MALAS"); 
         
    }
    
    
    
}

// crear uan funcion lanzar dado 
// no recibe parametros 
// retorna un numero aletario entre 1 y 6

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); // entre 0 y 1 
    numeroMultiplicado = aleatorio*6;
    
    numeroEntero = parseInt(numeroMultiplicado);// hasta aqui esta entre 0 y 5 
    
    valorDado = numeroEntero+1; // aqui ya nos sale numero entre 0 y 6 

    return valorDado;
    

}

