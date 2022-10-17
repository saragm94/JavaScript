var dninum;
var dnilet;
var calc;
var letra;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function dni()
{
  dninum = prompt("Ingresa el número del DNI: ");
  dnilet = prompt("Ingresa la letra del DNI: ");
  comprobar();
}

function comprobar()
{
  if(dninum <= 0 || dninum >= 99999999 || dninum.length > 8)
  {
    alert("Debe introducir un número válido");
  }
  if(dninum.length == 8)
  {
    calc = dninum%23;
    letra = letras[calc];
    if(letra == dnilet)
    {
      alert("La letra está bien");
    }else{
      alert("La letra está mal introducida");
    }
  }
}
