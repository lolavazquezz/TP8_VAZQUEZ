/*1. Calculadora de edad*/
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())){
        edad--;
    }
    return edad;
}
/*2. Tirando fruta*/
function verificarSiExiste(frutas, fruta) {
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].toLowerCase() === fruta.toLowerCase()) {
            return true;
        }
    }
    return false;
}
/*3. Comparando datos y tipos*/
//en utils
/*4. Yo objeto*/
function ingresarCiudad(){
    let mensaje="";
    const ciudad = {
        nombre: prompt("Ingrese nombre de la ciudad: "),
        fechaFundacion: prompt("Ingrese fecha de fundacion: "),
        poblacion: prompt("Ingrese polacion: "),
        extension: prompt("Ingrese extencion: ")
    }
    for (const propiedad in ciudad) {
        mensaje += `${propiedad}: ${ciudad[propiedad]}`+ "<br>";
    }
    return mensaje;
}
/*5. Doble de elementos*/
function calcularDoble(numeros){
    let dobles = [];
    for (i = 0; i < numeros.length; i++){
        dobles[i] = numeros[i]*2;
    }
    return dobles;
}
/*6. Triángulo de asteriscos*/
function primerTriangulo(){
    let mensaje = "";
    for (let i = 0; i < 5; i++){
        for (let x = 0; x < i+1; x++) mensaje+= "*";
        mensaje+= "<br>";
    }
    return mensaje;
}
function segundoTriangulo(){
    let mensaje = "";
    let h = 4;
    let g=4;
    for (let i = 0; i < 5; i++){
        h = g;
        while (h > 0){
            mensaje+= "-";
            h--;
        } 
        for (let x = 0; x < i+1; x++) mensaje+= "*";
        h = g;
        while (h > 0){
            mensaje+= "-";
            h--;
        } 
        mensaje+= "<br>";
        g--;
    }
    return mensaje;
}
/*7. Nombres con 'A'*/
function traerNombresConA(nombres){
    let mensaje = "Nombres que empiezan con A:" + "<br>";
    const array = nombres.split(', ');
    let nombresConA = [];
    let x = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i].toLowerCase().startsWith('a')){
            nombresConA[x] = array[i];
            x++;
        }
    }
    if (nombresConA.length > 0){
        for(let i = 0; i < nombresConA.length; i++) mensaje+= nombresConA[i] + "<br>";
    }
    else mensaje = "No se ingresaron nombres que empiezen con la letra A";
    return mensaje;
}
/*8. Reemplazar Palabras*/
function reemplazarPalabra(texto, palabra, palabraNueva){
    let v = texto.toLowerCase().indexOf(palabra.toLowerCase());
    let mensaje = "La palabra a reemplazar no se encuentra en el texto"
    if (v > -1){
        mensaje = "Nuevo texto: " + "<br>";
        mensaje+= texto.toLowerCase().replace(palabra.toLowerCase(), palabraNueva);
    }
    return mensaje;
}
/*9. Cortar texto*/
function nuevoTexto(texto, num){
    let mensaje = "Nuevo texto: " + "<br>";
    mensaje+= texto.slice(0, num);
    return mensaje;
}
/*10. String con separador*/
function separarTexto(lista){
    const array = lista.split(', ');
    let mensaje = "";
    for (let i = 0; i < array.length; i++){
        mensaje+= array[i] + " - ";
    }
    return mensaje;
}
/*11. Calculadora de Recaudación*/
function calcularTotal(lista){
    let array = lista.split(',');
    let p = [];
    let total = 0;
    for (const pedido of array){
        p = pedido.split(':');
        total+= parseInt(p[1]);
    }
    return total;
}