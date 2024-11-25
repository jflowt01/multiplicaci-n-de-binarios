
//Conversion de binario a decimal
let bn = prompt("Ingresa el numero binario"); // Numero en binario
let bnar = bn.split(''); //areglo del numero binario
let e = bnar.length; // Longitud del num binario
let n = 0; // Posicion del digito
let d = 0; // Valor en decimal

//Condicion para saber si lo ingresado por el usuario es valido.
//se busca si el arreglo contiene los digitos 1 o 0 que son los validos.
if (bnar.some(digito => digito !== '0' && digito !== '1')){
    //si no es un binario, se manda un mesaje que se ingrese un numero valido.
    console.log("Ingresa un número binario válido (solo 0 y 1).");
}else{
    //mientras la posicion es menor a la longitud del array
    while(n<e){
        //se recorre cada digito de derecha a izquierda
        let ud = parseInt(bnar[e - 1 - n]);
        //al ultimo digito se multiplica por 2 a la posicion
        d = d + (ud*2**n)
        //se incrementa la posicion del digito
        n++
    }
    //se muestra el resultado
    

}

//Conversion de binario a decimal
let bn1 = prompt("Ingresa el numero binario"); // Numero en binario
let bnar1 = bn1.split(''); //areglo del numero binario
let e1 = bnar1.length; // Longitud del num binario
let n1 = 0; // Posicion del digito
let d1 = 0; // Valor en decimal

//Condicion para saber si lo ingresado por el usuario es valido.
//se busca si el arreglo contiene los digitos 1 o 0 que son los validos.
if (bnar1.some(digito => digito !== '0' && digito !== '1')){
    //si no es un binario, se manda un mesaje que se ingrese un numero valido.
    console.log("Ingresa un número binario válido (solo 0 y 1).");
}else{
    //mientras la posicion es menor a la longitud del array
    while(n1<e1){
        //se recorre cada digito de derecha a izquierda
        let ud = parseInt(bnar1[e1 - 1 - n1]);
        //al ultimo digito se multiplica por 2 a la posicion
        d1 = d1 + (ud*2**n1)
        //se incrementa la posicion del digito
        n1++
    }
    //se muestra el resultado

}
let multi = d * d1;// Se hace una variable que hace la multiplicacion

//Definimos una variable vacía en donde se estará agregando unos y ceros.
let Bin = '';
//Pedimos al usuario que ingrese un número decimal para convertir a binario.
let n0 = multi
//Hacemos una condición en donde si el número ingresado es cero, la consola mostrará un 0.
if(n0 <= 0){
    console.log("El número en binario convertido es: 0");
//Hacemos otra condición si no cumple con la primera.
}else{
    //Mientras el número ingresado sea mayor a cero,
    while (n0 > 0) {
        /*Se ejecutará una operación en donde se sacará el modulo 2 del número ingresado y se le agregará 
        la variable de la cadena a la que se le estarán agregando los números, y esto se guardará en la misma variable.*/
        Bin = (n0 % 2) + Bin;
        /*Hacemos una operación/función en donde el resultado del modulo se le hará un redondeo al número 
        hacia abajo hasta el múltiplo entero más cercano. Esto se hace para seguir la lógica de conversiones binarias.*/
        n0 = Math.floor(n0 / 2);
    }
    //La consola va a mostrar los números de la conversión realizada.
    console.log(`El resultado de la multiplicacion es: ${Bin}`);
}



//Fin