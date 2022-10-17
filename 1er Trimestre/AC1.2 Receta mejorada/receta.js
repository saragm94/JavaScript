var comensales;
var laminas;
var salsa;
var bechamel;
var queso;
var mantequilla;
var array_ingredientes;
var array_ingredientes_nuevos = [];
var array_ingredientes_nuevos2 = [];
var totalarray;

const BotonMsg = () => {alert('A Garfield le encanta la lasaña');document.getElementById('garfield').style.maxHeight = "200px";}

//Valores iniciales de la receta, ya que no se utiliza sql, se crea una función
function cantidades()
{
  comensales = 6;
  laminas = 12;
  salsa = 800;
  bechamel = 400;
  queso = 120;
  mantequilla = 1;
  array_ingredientes = [comensales,laminas,salsa,bechamel,queso,mantequilla];
  totalarray = array_ingredientes.length;
  CambiarComensales();
}

function NuevoComensal()
{
  comensales = prompt("Ingresa los comensales: ");
  //Comprobaciones de que es un número positivo y entero
  if (comensales > 0)
  {
    CambiarComensales();
  }
  if (comensales < 0)
  {
    alert("Solo se pueden introducir números positivos.");
  }
  if (comensales / 1 == 0)
  {
    alert("Solo se pueden introducir números enteros.");
  }
  if (isNaN(comensales))
  {
    alert("Solo se pueden introducir números.");
  }
}

//Modificación según los comensales
function CambiarComensales()
{
    //Se crean varios arrays para que a la hora de modificar distintos comensales, no se altere mucho la receta (va acumulando los decimales y deja de ser exacta)
    array_ingredientes_nuevos = [];
    array_ingredientes_nuevos2 = [];
    //Se divide entre 6 porque la receta es para 6 personas. Así tenemos los ingredientes de una ración.
    for(let i = 0; i < totalarray; i++)
    {
      array_ingredientes_nuevos[i] = (array_ingredientes[i]/6);
      //Usamos "toFixed" para ajustar a dos decimales
      array_ingredientes_nuevos[i] = parseFloat(array_ingredientes_nuevos[i]).toFixed(2);
    }
    for(let i = 0; i < totalarray; i++)
    {
      array_ingredientes_nuevos2[i] = (array_ingredientes_nuevos[i]*comensales);
    }
  EscribirCantidades();
}

//actualización de la receta
function EscribirCantidades()
{
  //Habría que buscar una manera más lógica de mostrar las cantidades
  document.getElementById("comensal").innerHTML = array_ingredientes_nuevos2[0];
  document.getElementById("laminas").innerHTML = array_ingredientes_nuevos2[1];
  document.getElementById("salsa").innerHTML = array_ingredientes_nuevos2[2];
  document.getElementById("bechamel").innerHTML = array_ingredientes_nuevos2[3];
  document.getElementById("queso").innerHTML = array_ingredientes_nuevos2[4];
  document.getElementById("mantequilla").innerHTML = array_ingredientes_nuevos2[5];
}
