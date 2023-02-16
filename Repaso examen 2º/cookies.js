// Función para obtener el valor de una cookie
function obtenerCookie(nombre) {
    var valor = "; " + document.cookie;
    var partes = valor.split("; " + nombre + "=");
    if (partes.length == 2) {
      return partes.pop().split(";").shift();
    }
  }
  
  // Función para establecer el valor de una cookie
  function establecerCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expira + "; path=/";
  }
  
  // Obtener el número actual de visitas
  var contador = obtenerCookie("contador");
  if (contador) {
    contador = parseInt(contador) + 1;
  } else {
    contador = 1;
  }
  
  // Establecer el valor de la cookie
  establecerCookie("contador", contador, 365);
  
  // Mostrar el contador en la página
  document.getElementById("contador").innerHTML = contador;
  