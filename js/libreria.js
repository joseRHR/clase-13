function calcular_mayor(){
            
    //Leer los datos ingresados
    let xn1 = parseFloat(document.getElementById("txtN1").value);
    let xn2 = parseFloat(document.getElementById("txtN2").value);
    let xn3 = parseFloat(document.getElementById("txtN3").value);
    //Definir una variable que guarde el mayor
    let xm = 0; //inicializar
    //validacion
    if (xn1 > 0 && xn2 > 0 && xn3 > 0) {
        if (xn1 > xn2){
            xm = xn1;
        }else{
            xm = xn2;
        }
        if (xn3 > xm){
            xm = xn3
        }
        //5. MOSTRAR RESULTADO
        document.getElementById("txtRes").value= xm;
    }else{
        alert("Verificar Numero, deben ser positivos");
    }
}
function calcular_menor(){
    let xn1 = parseFloat(document.getElementById("txtN1").value);
    let xn2 = parseFloat(document.getElementById("txtN2").value);
    let xn3 = parseFloat(document.getElementById("txtN3").value);
    let xmenor = 0;
    if (xn1 > 0 && xn2 > 0 && xn3 > 0) {
        if (xn1 < xn2){
            xmenor = xn1;
        }else{
            xmenor = xn2;
        }
        if (xn3 < xmenor){
            xmenor = xn3
        }
        document.getElementById("txtRes").value= xmenor;
    }else{
        alert("Verificar Numero, deben ser positivos");
    }
}