function todos()
{
  var x = document.getElementById("todos_usuarios");
  if(window.getComputedStyle(x).display === "none")
  {
    document.getElementById("todos_usuarios").style.display = "block";
  }else if (window.getComputedStyle(x).display === "block")
  {
    document.getElementById("todos_usuarios").style.display = "none";
    document.getElementById("todos_usuarios_resultado").style.display = "none";
  }
}
function todos_calcular()
{
  document.getElementById("todos_usuarios_resultado").style.display = "block";
  var usuarios_nombre = document.form_todos.usuarios_nombre.value;
  var usuarios_apellido = document.form_todos.usuarios_apellido.value;
  var nombre_completo = usuarios_nombre + usuarios_apellido;
  var apellido1 = usuarios_apellido.split([' '],1);
  var apellido2 = usuarios_apellido.split([' ']).slice(1);
  var usuario = usuarios_nombre.slice(0,2)+apellido1+apellido2[0].slice(0,1);
  var usuario_comp = usuarios_nombre.slice(0,3)+apellido1[0].slice(0,2)+apellido2[0].slice(0,2);
  document.getElementById('nombre_longitud').innerHTML = nombre_completo.length;
  document.getElementById('nombre_minus').innerHTML =  usuarios_nombre.toLowerCase() + ' ' + usuarios_apellido.toLowerCase();
  document.getElementById('nombre_mayus').innerHTML =  usuarios_nombre.toUpperCase() + ' ' + usuarios_apellido.toUpperCase();
  document.getElementById('nombre').innerHTML = usuarios_nombre;
  document.getElementById('apellido1').innerHTML = apellido1;
  document.getElementById('apellido2').innerHTML = apellido2;
  document.getElementById('usuario').innerHTML = usuario;
  document.getElementById('usuario_comp').innerHTML = usuario_comp;
}



function provincia()
{
  var y = document.getElementById("provincia_usuarios");
  if(window.getComputedStyle(y).display === "none")
  {
    document.getElementById("provincia_usuarios").style.display = "block";
    provincia_elegir();
  }else if (window.getComputedStyle(y).display === "block")
  {
    document.getElementById("provincia_usuarios").style.display = "none";
    document.getElementById("todos_provincia_resultado").style.display = "none";
  }
}
function provincia_elegir()
{
  var usuarios = [['Laura','Santander','50'],['Álvaro','Castro','50'],['Igor','Castro','60'],['Ivan','Santander','40'],['Mónica','Zamora','30'],['Javi','Bilbao','30'],['David','Bilbao','50'],['José Luis','Bilbao','60']];
  var provincias = [];
  var select = document.getElementById('select_provincia');
  for (var i = 0; i < usuarios.length; i++)
  {
    provincias[i] = usuarios[i][1];

  }
  var provincias_def = provincias.filter((x,i)=> provincias.indexOf(x)===i);
  for (var i = 0; i < provincias_def.length; i++)
  {
    var opt = document.createElement('option');
    opt.value = provincias_def[i];
    opt.innerHTML = provincias_def[i];
    select.appendChild(opt);
  }
}
function provincia_resultado()
{

}



function cuota()
{
  var y = document.getElementById("cuota_usuarios");
  if(window.getComputedStyle(y).display === "none")
  {
    document.getElementById("cuota_usuarios").style.display = "block";
  }else if (window.getComputedStyle(y).display === "block")
  {
    document.getElementById("cuota_usuarios").style.display = "none";
  }
}
