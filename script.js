//EJercicio1 
console.log("Hola mundo");
//Ejercicio2
alert("Hola, soy Maya");
//Ejercicio3
var nom = "Maya";
var apellido = "Fernandez";
//Ejercicio4
alert(nom + " " + apellido);
var number1 = 30;
var number2 = 40;
var suma = number1 + number2;
console.log("la suma entre" + " " + number1 + " " + "más" + " "+ number2  +" " + "es" + " " +suma);
//Ejercicio5
var nota = prompt("introduce la nota del examen");
if (nota > 5 && nota <= 10){
    alert("Felicidades has aprobado el examen,tu nota es:"+ " "+ nota);
} else if(nota < 5 && nota >= 0){
    alert("Lo siento has suspendido, tu nota es"+ " "+ nota);
}else{
    alert("Has introducido un valor erróneo");
}
//Ejercicio6
function color(){
    var palabra = document.getElementById("demo").innerHTML;
    var replace = palabra.replace("blau","verd");
    document.getElementById("demo").innerHTML = replace;
}
function letters(){
    var palabra = document.getElementById("demo").innerHTML;
    var replace = palabra.replace(/[o]/gi,"u");
    document.getElementById("demo").innerHTML = replace;
}
//Ejercicio7
function objecte(){
    var objeto = ["taula", "cadira", "ordinador", "llibreta"];
    for ( i = 0; i <= objeto.length-1; i++){
        var posicion = [i];
        var resultado = objeto[i];
        console.log("L'objecte"+" "+ resultado + " "+"està a la posició"+" "+posicion);
    }
}
console.log(objecte());
//Ejercicio8
function calculadora(){
    var valor1 = parseInt(prompt("Introduce el primer valor"));
    var valor2 = parseInt(prompt("Introduce el segundo valor"));
    var suma = valor1 + valor2;
    var restar = valor1 - valor2;
    var multiplicar = valor1 * valor2;
    alert("El valor de la suma de" + " " + valor1 + " "+ "más"+ " " + valor2+ " "+"es de"+ " "+ suma);
}
console.log(calculadora());