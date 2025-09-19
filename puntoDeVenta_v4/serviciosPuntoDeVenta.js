calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento =(monto * porcentajeDescuento) / 100;
    return valorDescuento;

}

calcularIVA = function(monto){
    let valorIVA = (monto * 12) / 100;
    return valorIVA;

}

calcularSubtotal = function(precio,cantidad){
    let valorSubtotal  = (precio * cantidad );
    return valorSubtotal;

}

calcularTotal = function(subtotal,descuento,IVA){
    let valorTota = (subtotal - descuento + IVA);
    return valorTota;

}