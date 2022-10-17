function ejercicio9()
{
  var num = prompt("Introduzca un número para hacer una cuenta atrás: ");
  var i = num;
  while(i > 0)
  {
    document.write("<p>" + i + "</p>");
    i--;
  }
  while(i <= num)
  {
    document.write("<p>" + i + "</p>");
    i++;
  }
}
