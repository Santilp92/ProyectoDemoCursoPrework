function segundoNumeroMayor (numeros){
    let primero = numeros [0]
    let segundo = 0;
    for (let i=0; i < numeros.length; i++ ){
        if (numeros [i] > primero){
            segundo = primero;
            primero = numeros [i]
        }
        if (numeros [i]> segundo && numeros[i]< primero){
            segundo = numeros [0];
        }
    }
    return segundo
}
let nums =[8,4,6,10,9,11]
console.log(segundoNumeroMayor (nums))
