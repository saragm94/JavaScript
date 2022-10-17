var palabras = ["coche","autopista","mesa","ordenador","ventana"];
//almacenamos la longitud del array
var palabras_long = palabras.length;
//elegimos aleatoriamente la palabra que vamos a utilizar
var random = Math.floor(Math.random() * palabras_long) + 1;
//Restamos uno ya que los arrays comienzan en 0 y el contador de longitud de un array en 1
random = random - 1;
var elegida = palabras[random];
var elegida_long = elegida.length;
//Contador de tiempo (90seg)
var tiempo_limite = setTimeout(gameover, 90000);

//Array con la palabra elegida. Cada letra es una posición del array
var array_palabra = [];
var array_oculta = [];
elegida = elegida.toString();
for(var a = 0; a < elegida_long; a++)
{
  array_palabra[a] = elegida.charAt(a);
}
for(var b = 0; b < elegida_long; b++)
{
  array_oculta[b] = "_";
}
//Ahorcado
var array_intento = [];
var vidas = 10;
//Tenemos dos arrays, uno con la palabra segmentada y otro con las letras por adivinar
function comprobar()
{
  if(vidas > 0)
  {
    var intento = prompt("Introduzca una palabra");
    intento = intento.toString();
    for(var c = 0; c < intento.length; c++)
    {
      array_intento[c] = intento.charAt(c);
    }
    //Comprobación de los arrays
    document.write("<h2> ");
    //Utilizamos este for para comprobar cada letra del array y se muestran por pantalla las que coinciden
    for(var j = 0; j < elegida.length; j++)
    {
      if(array_palabra[j] == array_intento[j])
      {
        array_oculta[j] = array_palabra[j];
      }
      document.write(" ");
      document.write(array_oculta[j]);
    }
    document.write(" </h2> <h3>Vidas restantes:" + vidas + "</h3>");
    if(array_palabra.toString() != array_oculta.toString())
    {
      intentar();
    }
    if(array_palabra.toString() == array_oculta.toString())
    {
      document.write("<h3>Felicidades, ganaste</h3>");
      clearTimeout(tiempo_limite);
    }
    vidas--;
  }else if (vidas <=0) {
    document.write("<h3>Has perdido todas tus vidas</h3>");
    clearTimeout(tiempo_limite);
  }
}
function intentar()
{
  document.write('<button type="button" name="button" onclick="limpiar()">Intentar</button>');
}
//Para que no se acumule basura en pantalla, limpiamos el contenido del html con cada intento
function limpiar()
{
  document.body.innerHTML = '';
  comprobar();
}
function gameover()
{
  alert("Te has quedado sin tiempo.");
  window.location.reload();
}

//http://demo.st-marron.info/roulette/sample/demo.html
