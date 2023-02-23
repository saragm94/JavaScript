class Disco 
{
    nombre;
    grupo;
    anio;
    tipo;
    localizacion;
    prestado;

    constructor(nombre, grupo, anio, tipo, localizacion) 
    {
      this.nombre = nombre;
      this.grupo = grupo;
      this.anio = anio;
      this.tipo = tipo;
      this.localizacion = localizacion;
      this.prestado = false;
    }

    getNombre() {return this.nombre;}
    getGrupo() {return this.grupo;}
    getAnio() {return this.anio;}
    getTipo() {return this.tipo;}
    getLocalizacion() {return this.localizacion;}
    getPrestado() {return this.prestado;}

    setNombre(nombre) {this.nombre = nombre;}
    setGrupo(grupo) {this.grupo = grupo;}
    setAnio(anio) {this.anio = anio;}
    setTipo(tipo) {this.tipo = tipo;}
    setLocalizacion(localizacion) {this.localizacion = localizacion;}
    setPrestado(prestado) {this.prestado = prestado;}
    toString() {}
}

var discos = [];
  
function mostrar()
{
    document.getElementById("mostrar").style.display = 'none';
    document.getElementById("intervaloDiv").style.display = 'none';
    document.getElementById("anadir").style.display = 'none';
    document.getElementById("borrar").style.display = 'none';
    document.getElementById("consultar").style.display = 'none';
}
  
function insertarDiscosFinal(nombre, grupo, anio, tipo, localizacion)
{
    let control = false;
    for (let i = 0; i < discos.length; i++)
    {
      if (discos[i].localizacion == localizacion)
      {
        control = true;
      }
    }
    if (!control)
    {
      discos.push(new Disco(nombre, grupo, anio, tipo, localizacion));
    }
}
  
function insertarDiscos(nombre, grupo, anio, tipo, localizacion)
{
    let control = false;
    for (let i = 0; i < discos.length; i++)
    {
        if (discos[i].localizacion == localizacion)
        {
            control = true;
            break;
        }
    }
    if (!control)
    {
        discos.unshift(new Disco(nombre, grupo, anio, tipo, localizacion));
    }
}

function recogidaDatos()
{
    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("grupo").value;
    let anio = document.getElementById("anio").value;
    let tipo = document.getElementById("tipo").value;
    let localizacion = document.getElementById("localizacion").value;
    insertarDiscos(nombre, grupo, anio, tipo, localizacion);
}

function recogidaDatosFinal()
{
    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("grupo").value;
    let anio = document.getElementById("anio").value;
    let tipo = document.getElementById("tipo").value;
    let localizacion = document.getElementById("localizacion").value;
    insertarDiscosFinal(nombre, grupo, anio, tipo, localizacion);
    mostrar();
}
    
function verDiscos()
{
     mostrar();
    document.getElementById('tablaTodo').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
    document.getElementById("mostrar").style.display = 'block';
    for (var i = 0; i < discos.length; i++)
    {
        document.getElementById('tablaTodo').innerHTML += `
        <tr>
            <td>` + discos[i].nombre + `</td>
            <td>` + discos[i].grupo + `</td>
            <td>` + discos[i].anio + `</td>
            <td>` + discos[i].tipo + `</td>
            <td>` + discos[i].localizacion + `</td>
        "</tr>`;
    }
}
  
function opcionConsultar()
{
     mostrar();
     document.getElementById("consultar").style.display = 'block';
    inputMostrarNombre.addEventListener("input", generarTablaNombre);
    function generarTablaNombre()
    {
        document.getElementById('tablaNombre').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
        let nombre = inputMostrarNombre.value;
        let control = false;
        for (var i = 0; i < discos.length; i++)
        {
            if (discos[i].nombre == nombre)
            {
                document.getElementById('tablaNombre').innerHTML += `
                <tr>
                    <td>` + discos[i].nombre + `</td>
                    <td>` + discos[i].grupo + `</td>
                    <td>` + discos[i].anio + `</td>
                    <td>` + discos[i].tipo + `</td>
                    <td>` + discos[i].localizacion + `</td>
                </tr>`;
                control = true;
            }
        }
    }
}

function borrar()
{
    let localizacionBorrar = document.getElementById("inputBorrar").value;
    let auxBooleana = false;
    for (let i = 0; i < discos.length; i++) 
    {
        if (discos[i].localizacion == localizacionBorrar)
        {
            discos.splice(i,1);
            auxBooleana = true;
            break;
        }
    }
    verDiscos();
}

function opcionIntervalo()
{
    mostrar()
    document.getElementById("intervaloDiv").style.display = 'block';
    intervalo.addEventListener("input", eventoIntervalo);
    function eventoIntervalo()
    {
        let intervalo = (document.getElementById("intervalo").value);
        let numeros = intervalo.split("-");
        let regex = /\d+-\d+/;
        document.getElementById('tablaIntervalo').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
        if (regex.test(intervalo) && numeros[1] < discos.length) 
        {
            for (var i = numeros[0]; i <= numeros[1]; i++)
            {
                document.getElementById('tablaIntervalo').innerHTML += `
                <tr>
                    <td>` + discos[i].nombre + `</td>
                    <td>` + discos[i].grupo + `</td>
                    <td>` + discos[i].anio + `</td>
                    <td>` + discos[i].tipo + `</td>
                    <td>` + discos[i].localizacion + `</td>
                </tr>`;
            }
        }
    }
    verDiscos();
}

function invertirDiscos()
{
    discos.reverse();
    verDiscos();
}

function opcionesAnadir()
{
    mostrar();
    document.getElementById("anadir").style.display = 'block';
}

function opcionBorrar()
{
    mostrar();
    document.getElementById("borrar").style.display = 'block';
}