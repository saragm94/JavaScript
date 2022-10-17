//EJERCICIO 1 LISTO
function fincurso()
{
  var x = document.getElementById("fin_curso");
  if(window.getComputedStyle(x).display === "none")
  {
    var hoy = new Date();
    var vacaciones = new Date(2023,06,24);
    var espera = vacaciones.getTime() - hoy.getTime();
    espera = Math.round(espera/(1000 * 60 * 60 * 24));
    document.getElementById('fin_curso').innerHTML = "<h4>Tiempo hasta las vacaciones:</h4></br>";
    document.getElementById('fin_curso').innerHTML += "<h5>" + espera + " días </h5>";
    document.getElementById("fin_curso").style.display = "block";
  }else if (window.getComputedStyle(x).display === "block")
  {
    document.getElementById("fin_curso").style.display = "none";
  }
}


//EJERCICIO 2 TERMINADO
function domingos()
{
  var y = document.getElementById("domingos");
  if(window.getComputedStyle(y).display === "none")
  {
    document.getElementById("domingos").style.display = "block";
  }else if (window.getComputedStyle(y).display === "block")
  {
    document.getElementById("domingos").style.display = "none";
    document.getElementById("domingos_resultado").style.display = "none";
  }
}
function domingos_calcular()
{
  //Año que se termina de contar
  var fin = new Date();
  var anio_fin = 2100;
  fin.setFullYear(2100,11,31);
  //Fecha que se introduce
  var cumple_dia = new Date(document.form_cumple.cumple.value);
  //separamos el año
  var anio_hoy = cumple_dia.getFullYear();
   var contador = 0;
  for(var i = anio_hoy; i <= anio_fin; i++)
  {
    cumple_dia = new Date(i+"-"+(cumple_dia.getMonth()+1)+"-"+cumple_dia.getDate());
    if (cumple_dia.getDay() == 0)
    {
      contador++;
    }
  }
  document.getElementById("domingos_resultado").innerHTML = contador;
  document.getElementById("domingos_resultado").style.display = "block";
}



//EJERCICIO 3 LISTO
function formato_fechas()
{
  var y = document.getElementById("formato_fechas");
  if(window.getComputedStyle(y).display === "none")
  {
    document.getElementById("formato_fechas").style.display = "block";
  }else if (window.getComputedStyle(y).display === "block")
  {
    document.getElementById("formato_fechas").style.display = "none";
    document.getElementById("formato_fechas_resultado").style.display = "none";
  }
}
function formato_fechas_calcular()
{
  var hoy = new Date();
  var mes_hoy = hoy.getMonth();
  var semana_hoy = hoy.getDay();
  var op = document.form_fechas.formato.value;
  var semana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
  var mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  switch (op)
  {
    case "short":
      document.getElementById('formato_fechas').innerHTML += "<h5 class='mt-4'>" + hoy.getDate() + "/" + (hoy.getMonth()+1) + "/" + hoy.getFullYear() + "</h5>";
      break;
    case "long-es":
      document.getElementById('formato_fechas').innerHTML += "<h5 class='mt-4'>" + semana[semana_hoy-1] + ", " + hoy.getDate() + " de " + mes[mes_hoy] + " de " + hoy.getFullYear() + "</h5>";
      break;
    case "long-en":
      document.getElementById('formato_fechas').innerHTML += "<h5 class='mt-4'>" + week[semana_hoy-1] + ", " + month[mes_hoy] + " " + hoy.getDate() + ", " + hoy.getFullYear() + "</h5>";
      break;
  }
}

//EJERCICIO 4 LISTO
function formato_horas()
{
  var y = document.getElementById("formato_horas");
  if(window.getComputedStyle(y).display === "none")
  {
    document.getElementById("formato_horas").style.display = "block";
  }else if (window.getComputedStyle(y).display === "block")
  {
    document.getElementById("formato_horas").style.display = "none";
    document.getElementById("formato_horas_resultado").style.display = "none";
  }
}
function formato_horas_calcular()
{
  var hoy = new Date();
  var op = document.form_horas.formato.value;
  switch (op)
  {
    case "24h":
      document.getElementById('formato_horas').innerHTML += "<h5 class='mt-4'>" + hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "</h5>";
      break;
    case "am-pm":
      var hora = hoy.getHours();
      if( hora < 12)
      {
        document.getElementById('formato_horas').innerHTML += "<h5 class='mt-4'>" + hora + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "AM</h5>";
      }
      if( hora = 12)
      {
        document.getElementById('formato_horas').innerHTML += "<h5 class='mt-4'>" + hora + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "PM</h5>";
      }
      if( hora > 12)
      {
        hora = hora - 12;
        document.getElementById('formato_horas').innerHTML += "<h5 class='mt-4'>" + hora + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "PM</h5>";
      }
      
      break;
  }  
}
