function ejercicio6()
{
  var texto = prompt("Escriba un texto: ");
  for(var i = 1; i <= 6; i++)
  {
    document.write("<h" + i + ">" + texto + "</h" + i + ">")
  }
}
