const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
function ejer1() {
  document.getElementById("ejer1").style.display = "block";

  //Copiamos el array para trabajar con este
  const paises1 = paises;
  document.getElementById("ejer1").innerHTML +=
    "<p>Número de elementos del array: <b>" + paises1.length + "</b></p>";
  document.getElementById("ejer1").innerHTML +=
    "<p>Todos los elementos del array: " + paises1 + "</p>";

  //array inverso
  var inver = paises1.reverse();
  document.getElementById("ejer1").innerHTML +=
    "<p>Array a la inversa: " + inver + "</p>";

  //array alfabéticamente
  var alfab = paises1.sort();
  document.getElementById("ejer1").innerHTML +=
    "<p>Array ordenado alfabéticamente: " + alfab + "</p>";

  //añadir algo al principio del array
  var princ = paises1;
  princ.splice(0, 0, "<b>String al principio</b>");
  document.getElementById("ejer1").innerHTML +=
    "<p>Añadido elemento al principio: " + princ + "</p>";

  //Añadir al final del array
  var final = paises1;
  final.push("<b>String al final</b>");
  document.getElementById("ejer1").innerHTML +=
    "<p>Añadido elemento al final: " + final + "</p>";

  //Borrar primer elemento del array y mostrarlo
  var princ_eliminar = paises1.shift();
  document.getElementById("ejer1").innerHTML +=
    "<p>Se borró: " +
    princ_eliminar +
    " del array, el array final es: " +
    paises1 +
    "</p>";

  //Borrar ultimo elemento del array y mostrarlo
  var final_eliminar = paises1.pop();
  document.getElementById("ejer1").innerHTML +=
    "<p>Se borró: " +
    final_eliminar +
    " del array, el array final es: " +
    paises1 +
    "</p>";

  //Mostrar elemento por posición introducida
  var posi = prompt("Introduce posición que deseas ver");
  document.getElementById("ejer1").innerHTML +=
    "<p>El elemento en la posición <b>" +
    posi +
    "</b> del array es: <b>" +
    paises1[posi] +
    "</b></p>";

  //Mostrar posición del elemento
  var ele = prompt("Introduce el elemento del que quieres saber la posición");
  var ele_num = paises1.indexOf(ele);
  document.getElementById("ejer1").innerHTML +=
    "<p>La posición del elemento <b>" +
    ele +
    "</b> del array es: <b>" +
    ele_num +
    "</b></p>";

  //Mostrar elementos en intervalo
  var inter_ini = prompt(
    "Introduce desde dónde quieres que empiece el intervalo"
  );
  var inter_fin = prompt(
    "Introduce desde dónde quieres que acabe el intervalo"
  );
  var inter = paises1.slice(inter_ini, inter_fin);
  document.getElementById("ejer1").innerHTML +=
    "<p>Los elementos entre la posición <b>" +
    inter_ini +
    "</b> y <b>" +
    inter_fin +
    "</b> del array son: " +
    inter +
    "</p>";
}

//Repetimos funciones anteriores, si
function ejer2() {
  const paises2 = paises;
  document.getElementById("ejer2").style.display = "block";
  var op = prompt(
    `Elige una opción: \n 
      1 - Mostrar número de países. \n 
      2 - Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente). \n 
      3 - Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin). \n 
      4 - Añadir un país (y le preguntará si quiere añadir al principio o al final). \n 
      5 - Borrar un país (y le preguntará si quiere borrar al principio o al final). \n 
      6 - Consultar un país (y le preguntará si quiere consultar por posición o por nombre). \n 
      7 - Todas las operaciones que se realicen se irán mostrando en la página con su título.`
  );
  switch (op) {
    case "1":
      document.getElementById("ejer2").innerHTML = "El total de países es: " + paises2.length;
      break;
    case "2":
      var orden = prompt("¿Orden ascendente o descendente? (asc/des)");
      if (orden == 'asc')
      {
        document.getElementById("ejer2").innerHTML = paises2.sort();
      }else{
        var pais_desc = paises2.sort();
        pais_desc = pais_desc.reverse();
        document.getElementById("ejer2").innerHTML = pais_desc;
      }
      break;
    case "3":
      var ini = prompt("Introduce desde dónde quieres que empiece el intervalo");
      var fin = prompt("Introduce desde dónde quieres que acabe el intervalo");
      document.getElementById("ejer2").innerHTML = "<p>El primer elemento es: " + paises2[ini] + "</p><p>El segundo elemento es: " + paises2[fin] + "</p>";
      break;
    case "4":
      var paises_add = paises2;
      var pais_nuevo = prompt("Introduce pais nuevo");
      var pais_add = prompt("¿Añadir al principio o al final? (pri/fin)");
      if (pais_add == 'pri')
      {
        paises_add.splice(0,0,pais_nuevo)
        document.getElementById("ejer2").innerHTML = paises_add;
      }else{
        var paises_fin = paises2;
        paises_fin.push(pais_nuevo);
        document.getElementById("ejer2").innerHTML = paises_fin;
      }
      break;
    case "5":
      var paises_del = paises2;
      var pais_add = prompt("¿Borrar al principio o al final? (pri/fin)");
      if (pais_add == 'pri')
      {
        paises_del.shift();
        document.getElementById("ejer2").innerHTML = paises_del;
      }else{
        paises_del.reverse();
        paises_del.shift();
        paises_del.reverse();
        document.getElementById("ejer2").innerHTML = paises_del;
      }
      break;
    case "6":
      var paises_cons = paises2;
      var pais_cons = prompt("¿Consultar por número o nombre? (num/nom)");
      if (pais_cons == 'num')
      {
        var pais_num = prompt("Introduce posición a consultar");
        document.getElementById("ejer2").innerHTML = paises_cons[pais_num];
      }else{
        var pais_nom = prompt("Introduce pais a consultar posición");
        paises_cons = paises_cons.indexOf(pais_nom);
        document.getElementById("ejer2").innerHTML = paises_cons;
      }
      break;
  }
}