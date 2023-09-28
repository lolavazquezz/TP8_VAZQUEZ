/*1. Calculadora de edad*/
function CalcularEdad(){
    let resultado = document.getElementById("resultado");
    const nombre = prompt("Ingrese su nombre"); 
    const fechaNac = prompt("Ingrese su fechaNacimiento (AAAA-MM-DD");
    const fechaNacimiento = new Date(fechaNac);
    const edad = calcularEdad(fechaNacimiento);
    const mensaje = "Hola "+ nombre + ", tienes " + edad + "años!";
    resultado.innerHTML = mensaje;
}
/*2. Tirando fruta*/
function tirandoFruta() {
    let resultado = document.getElementById("resultado");
    const fruta = prompt("Ingrese una fruta"); 
    const frutas = ["Banana", "Manzana", "Naranja", "Melon", "Sandia", "Frutilla", "Mandarina", "Kiwi", "Arandanos", "Durazno"];
    const encontrado = verificarSiExiste(frutas, fruta);
    let mensaje = "";
    if (encontrado) mensaje = "Sí, tenemos " + fruta + "!";
    else mensaje = "No, no tenemos " + fruta + "!";
    resultado.innerHTML = mensaje;
}
/*3. comparandoDatosTipos*/
function ComparandoDatosTipos() {
    let resultado = document.getElementById("resultado");
    let bool = 1 == '1';
    let mensajeA = "A) 10 es igual a '10' con ==  -> " + bool + "<br>";
    bool = 1 === '1';
    let mensajeB = "B) 10 es igual a '10' con ===  -> " + bool + "<br>";
    const num = 10.6;
    let tipoDato = (typeof num);
    let mensajeC = "C) 10.6 es del tipo de dato -> " + tipoDato + "<br>";
    bool = true == 1; 
    let mensajeD = "D) en JavaScript true es == 1  -> " + bool;
    resultado.innerHTML = mensajeA + mensajeB + mensajeC + mensajeD;
}

/*4. Yo objeto*/
function YoObjeto() {
    let mensaje = "";
    ingresarCiudad();
    resultado.innerHTML = mensaje;
}
/*5. Doble de elementos*/
function DobleElementos() {
    let mensaje = "";
    const numeros = [1, 2, 3, 4, 5];
    const array = calcularDoble(numeros);
    for (let i=0; i < array.length; i++) 
        mensaje+= array[i] + ", ";
    resultado.innerHTML = mensaje;
}
/*6. Triángulo de asteriscos*/
function TriánguloAsteriscos() {
    let triangulo1 = "";
    let triangulo2 = "";
    triangulo1 = primerTriangulo();
    triangulo2 = segundoTriangulo();
    resultado.innerHTML = triangulo1 + "<br>" + triangulo2;
}
/*7. Nombres con 'A'*/
function NombresConA() {
    const nombres = prompt("Ingrese una lista de nombres separados por coma");
    let mensaje = traerNombresConA(nombres); 
    resultado.innerHTML = mensaje;
}
/*8. Reemplazar Palabras*/
function ReemplazarPalabras() {
    let texto = prompt("Ingrese una oración");
    let palabra = prompt("Ingrese una palabra a reemplazar");
    let palabraNueva = prompt("Ingrese la palabra de reemplazo");
    let mensaje = reemplazarPalabra(texto, palabra, palabraNueva);
    resultado.innerHTML = mensaje;
}
/*9. Cortar texto*/
function CortarTexto() {
    let texto = prompt("Ingrese una oración");
    let numero = prompt("Ingrese un número");
    let mensaje = nuevoTexto(texto, numero);
    resultado.innerHTML = mensaje;
}
/*10. String con separador*/
function StringConSeparador() {
    const lista = prompt("Ingrese una lista de elementos separados por coma");
    let mensaje = separarTexto(lista);
    resultado.innerHTML = mensaje;
}
/*11. Calculadora de Recaudación*/
function CalculadoraRecaudación() {
    const objetos = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma. (nombre:total) Ejemplo: 'Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25'")
    let mensaje = calcularTotal(objetos);
    resultado.innerHTML = mensaje;
}