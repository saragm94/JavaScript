const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
function ejer1()
{
    document.getElementById("ejer1").style.display = "block";

    //Copiamos el array para trabajar con este
    const paises1 = paises;
    document.getElementById('ejer1').innerHTML += '<p>Número de elementos del array: <b>' + paises1.length + '</b></p>';
    document.getElementById('ejer1').innerHTML += '<p>Todos los elementos del array: ' + paises1 + '</p>';

    //array inverso
    var inver = paises1.reverse();
    document.getElementById('ejer1').innerHTML += '<p>Array a la inversa: ' + inver + '</p>';

    //array alfabéticamente
    var alfab = paises1.sort();
    document.getElementById('ejer1').innerHTML += '<p>Array ordenado alfabéticamente: ' + alfab + '</p>';

    //añadir algo al principio del array
    var princ = paises1;
    princ.splice(0,0,'<b>String al principio</b>');
    document.getElementById('ejer1').innerHTML += '<p>Añadido elemento al principio: ' + princ + '</p>';

    //Añadir al final del array
    var final = paises1;
    final.push("<b>String al final</b>");
    document.getElementById('ejer1').innerHTML += '<p>Añadido elemento al final: ' + final + '</p>' ;

    //Borrar primer elemento del array y mostrarlo
    var princ_eliminar = paises1.shift();
    document.getElementById('ejer1').innerHTML += '<p>Se borró: ' + princ_eliminar + ' del array, el array final es: ' + paises1 + '</p>' ;

    //Borrar ultimo elemento del array y mostrarlo
    var final_eliminar = paises1.pop();
    document.getElementById('ejer1').innerHTML += '<p>Se borró: ' + final_eliminar + ' del array, el array final es: ' + paises1 + '</p>' ;

    //Mostrar elemento por posición introducida
    var posi = prompt("Introduce posición que deseas ver");
    document.getElementById('ejer1').innerHTML += "<p>El elemento en la posición <b>" + posi + "</b> del array es: <b>" + paises1[posi] + "</b></p>";

    //Mostrar posición del elemento
    var ele = prompt("Introduce el elemento del que quieres saber la posición");
    var ele_num = paises1.indexOf(ele);
    document.getElementById('ejer1').innerHTML += "<p>La posición del elemento <b>" + ele + "</b> del array es: <b>" + ele_num + "</b></p>";

    //Mostrar elementos en intervalo
    var inter_ini = prompt("Introduce desde dónde quieres que empiece el intervalo");
    var inter_fin = prompt("Introduce desde dónde quieres que acabe el intervalo");
    var inter = paises1.slice(inter_ini, inter_fin);
    document.getElementById('ejer1').innerHTML += "<p>Los elementos entre la posición <b>" + inter_ini + "</b> y <b>" + inter_fin + "</b> del array son: " + inter + "</p>";
}

function ejer2()
{
    document.getElementById("ejer2").style.display = "block";

    //Total de países
}