function ejercicio7()
{
  var texto = prompt("Escriba un texto: ");
  var i = 1;
  while(i <= 6)
  {
    document.write("<h" + i + ">" + texto + "</h" + i + ">")
    i++
  }
}
