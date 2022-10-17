function ejercicio3()
{
  var num1 = parseInt(prompt("Escriba un número: "));
  var num2 = parseInt(prompt("Escriba otro número: "));
  if(num1 > num2)
  {
    alert("El primer número es mayor que el segundo.");
  }else if (num2 > num1)
    {
        alert("El segundo número es mayor que el primero.");
    }else
      {
        alert("Los números son iguales.");
  }
}
