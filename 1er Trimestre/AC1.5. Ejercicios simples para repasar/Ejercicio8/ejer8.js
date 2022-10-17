function ejercicio8()
{
  var num = prompt("Introduzca un número para hacer una cuenta atrás: ");
  for(var i = num; i > 0; i--)
  {
    document.write("<p>" + i + "</p>")
  }
  for(i; i <= num; i++)
  {
    document.write("<p>" + i + "</p>")
  }
}
