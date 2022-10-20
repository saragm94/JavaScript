function ejer1()
{
    var ventana = window.open("ejer1.html", "", "width=800,height=600");
}
function ejer1_datos()
{
    document.getElementById('datos').innerHTML += "<b>URL completa:</b> " + window.location.href + "</br>";
    document.getElementById('datos').innerHTML += "<b>Protocolo utilizado:</b> " + window.location.protocol + "</br>";
    document.getElementById('datos').innerHTML += "<b>Nombre en código del navegador:</b> " +  window.navigator.userAgent + "</br>";
    document.getElementById('datos').innerHTML += "<b>JAVA disponible:</b> " +  navigator.javaEnabled() + "</br>";
    document.getElementById('datos').innerHTML += "<iframe src='https://www.google.es'></iframe>" ;
}
function ejer2()
{

}