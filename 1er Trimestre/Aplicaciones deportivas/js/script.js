//Funciones para mostrar solo el apartado que se elija
function inicio()
{
  document.getElementsByName('IMC')[0].style.display = 'none';
  document.getElementsByName('IMC')[1].style.display = 'none';
  document.getElementsByName('FCM')[0].style.display = 'none';
  document.getElementsByName('FCM')[1].style.display = 'none';
  document.getElementsByName('EDAD')[0].style.display = 'none';
//  document.getElementsByName('EDAD')[1].style.display = 'none';
  resultados();
}
function showIMC()
{
  document.getElementsByName('IMC')[0].style.display = 'block';
  document.getElementsByName('IMC')[1].style.display = 'block';
  document.getElementsByName('FCM')[0].style.display = 'none';
  document.getElementsByName('FCM')[1].style.display = 'none';
  document.getElementsByName('EDAD')[0].style.display = 'none';
  //document.getElementsByName('EDAD')[1].style.display = 'none';
  resultados();
}
function showFCM()
{
  document.getElementsByName('IMC')[0].style.display = 'none';
  document.getElementsByName('IMC')[1].style.display = 'none';
  document.getElementsByName('FCM')[0].style.display = 'block';
  document.getElementsByName('FCM')[1].style.display = 'block';
  document.getElementsByName('EDAD')[0].style.display = 'none';
//  document.getElementsByName('EDAD')[1].style.display = 'none';
  resultados();
}
function showEDAD()
{
  document.getElementsByName('IMC')[0].style.display = 'none';
  document.getElementsByName('IMC')[1].style.display = 'none';
  document.getElementsByName('FCM')[0].style.display = 'none';
  document.getElementsByName('FCM')[1].style.display = 'none';
  document.getElementsByName('EDAD')[0].style.display = 'block';
  //  document.getElementsByName('EDAD')[1].style.display = 'block';
  resultados();
}
var IMCtotal = "a";
var FCMtotal;
var EDADtotal;
var IMCaltura;
var IMCpeso;
//Esta función mostrará los resultados calculados en una columna a la derecha de la pantalla
function resultados()
{
  if(IMCtotal != null ||IMCtotal != null || IMCtotal != null)
  {
    document.getElementById("resultados").style.display = "block";
    if(IMCtotal != null)
    {
        document.getElementById("IMCresultado").style.display = "block";
    }
    if(FCMtotal != null)
    {
        document.getElementById("FMCresultado").style.display = 'block';
    }
    if(EDADtotal != null)
    {
      document.getElementById("EDADresultado").style.display = 'block';
    }
  }
}

//$(document).ready(function(){$("#myModal").modal('show');});

//FUNCIÓN PARA CÁLCULO DE IMC
function IMC()
{

}
