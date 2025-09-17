calcularValorDescuento=function(monto, porcentajeDescuento){
    let ValordeDescuento;

    ValordeDescuento=(monto * porcentajeDescuento) / 100;

    return ValordeDescuento;

}

// Retorna el valor del IVA

calcularIVA=function(monto){
    let porcentajeIVA = 12;
    return(monto * porcentajeIVA) / 100;

}

//Calcular subtotal 

calcularSubtotal=function(precio, cantidad){
    return precio * cantidad;

}

calcularTotal=function(subtotal, descuento, IVA){
    return subtotal - descuento + IVA;

}
