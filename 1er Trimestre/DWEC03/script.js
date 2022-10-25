function ejer1()
{
    var ventana = window.open("ejer1.html", "", "width=800,height=600");
}
function ejer1_datos()
{
    document.getElementById('datos').innerHTML += "<b>URL completa:</b> " + window.location.href + "</br>";
    document.getElementById('datos').innerHTML += "<b>Protocolo utilizado:</b> " + window.location.protocol + "</br>";
    document.getElementById('datos').innerHTML += "<b>Nombre en código del navegador:</b> " +  window.navigator.userAgent + "</br>";
    document.getElementById('datos').innerHTML += "<b>JAVA disponible:</b> " +  navigator.javaEnabled() + "</br>";
    document.getElementById('datos').innerHTML += "<iframe width='800' height='600' src='https://www.google.es/output=embed'></iframe>" ;
}
function ejer2()
{
    var ventana = window.open("ejer2.html", "", "width=800,height=600");
}
function ejer2_datos()
{
    document.getElementById('ejercicio2').innerHTML += "<h1>TAREA DWEC03</h1>";
    document.getElementById('ejercicio2').innerHTML +=
    '<form action="ejer2.hmtl" method="post" name="formu" onsubmit ="return false"></br>' +
        '<label for="nombre">Introduce tu nombre y apellidos: <input type="text" name="nombre"/></label></br>' +
        '<label for="dia">Introduce tu día de nacimiento: <input type="number" name="dia"/></label></br>' +
        '<label for="mes">Introduce tu mes de nacimiento: <input type="number" name="mes"/></label></br>' +
        '<label for="anio">Introduce tu año de nacimiento: <input type="number" name="anio"/></label></br>' +
        '<input class="mt-4 btn btn-info" type="submit" value="Enviar" onclick="ejer2_resultado()"></br>' +
    '</form>';
}
function ejer2_resultado()
{
    //Nombre
    var nombre = document.formu.nombre.value;
        //Para ignorar los espacios y cuente los carácteres
    var a = nombre.split(' ').join('');
    var b = a.replace( /\s/g, '');
    var long = b.length;
    //Primera A
    var posia;
    for(var i = 0; i < long; i++)
    {
        if(b[i] === 'a' || b[i] === 'A')
        {
            posia = i;
            posia = posia + 1;
            i = long;
        }
    }
    //Última A
    var ulti;
    for(var k = long; k >= 0 ; --k)
    {
        if(b[k] === 'a' || b[k] === 'A')
        {
            ulti = k;
            ulti = ulti + 1;
            k = -1;
        }
    }
    //Nombre sin las 3 primeras letras
    var letras = nombre.substring(3);
    //Nombre en mayúsculas
    var mayus = nombre.toUpperCase();
    //Edad
    var anio = document.formu.anio.value;
    var hoy = new Date().getFullYear();
    var edad = hoy - anio;
    //Fecha nacimiento
    var dia = document.formu.dia.value;
    var mes = document.formu.mes.value;
    //Coseno
    var coseno = Math.cos(180);
    //Numero mayor
    var numeros = '34,67,23,75,35,19';
    numeros = numeros.split(',').sort();
    var mayor = numeros[numeros.length-1];
    //Número int aleatorio
    var ale = Math.floor(Math.random() * 101);
    document.getElementById('ejercicio2').innerHTML += "Buenos días, <b>" + nombre + "</b></br>" + 
    "Tu nombre tiene: <b>" + b.length + "</b> caracteres.</br>" +
    "La primera letra A de tu nombre está en la posición: <b>" + posia + "</b></br>" +
    "La última letra A de tu nombre está en la posición: <b>" + ulti + "</b></br>" + 
    "Tu nombre menos las 3 primeras letras es: <b>" + letras + "</b></br>" +
    "Tu nombre todo en mayúsculas es: <b>" + mayus + "</b></br>" + 
    "Tu nombre edad es de: <b>" + edad + "</b> años</br>" +
    "Naciste un feliz un: <b>" + dia + "/" + mes + "</b> del año " + anio + "</br>" +
    "El coseno de 180 es: <b>" + coseno + "</b></br>" + 
    "El número mayor de (34,67,23,75,35,19) es: <b>" + mayor + "</b></br>" +
    "Ejemplo de número al azar: <b>" + ale + "</b>";
}