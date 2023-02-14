color = ""; //variable del color
fino= true; //grosor pincel
nodoCambio= ""; //nodo pinchado
noEntre= true; //variable que controla que no se entre en la funcion de cambiar el grosor
mouse = localStorage.getItem("mouse");//control del ratón

if(mouse == null || mouse == undefined)
{
	mouse= 'no';
}
function tabla()
{
	tabla= document.createElement("table");
	tabla.setAttribute("class", "tablerodibujo");
	
	for(i=0; i<30; i++)
	{
		tr = document.createElement("tr");
		for(j=0; j<30; j++)
		{
			td = document.createElement("td");
			if(mouse == 'si')
			{
				td.setAttribute("onmouseover", "cambiar(this)");
			}
			else
			{
				td.setAttribute("onclick", "cambiar(this)");
			}
			td.setAttribute("onmousedown", "activar(true)");
			td.setAttribute("onmouseup", "activar(false)");
			tr.appendChild(td);
		}		
		tabla.appendChild(tr);
	}
	tabla.appendChild(tr);
	div = document.getElementById("zonadibujo");
	div.appendChild(tabla);
	seleccion("color1");
	activar(false);
}
function seleccion(clase)
{
	j=1;
	color = clase;
	papa = document.getElementById("colores"); 
	td = papa.childNodes.length;
	color = clase + " seleccionado";
	for(i=0; i<td; i++)
	{
		if(papa.childNodes[i].tagName == "td" || papa.childNodes[i].tagName== "TD")
		{
			colore = "color"+j;
			hijoTd = papa.childNodes[i];
			hijoTd.setAttribute("class", colore);
			j++;
		}
	}
	objetivo = document.getElementsByClassName(clase)[0];
	objetivo.setAttribute("class", color);
}
function cambiar(nodo)
{
	nodo.setAttribute("class", color);
	nodoCambio = nodo;
	if(fino == false)
	{
		granPintada();
	}
}
function colores()
{
	if(fino == true)
	{
		fino= false;
		document.getElementById("grueso").innerHTML = "Disminuir el grosor";
	}
	else
	{
		fino = true;
		document.getElementById("grueso").innerHTML = "Aumentar grosor";
	}
}
//pincel grande
function granPintada()
{
	papa = nodoCambio.parentNode;
	index = Array.prototype.indexOf.call(papa.children, nodoCambio);
	papa.childNodes.item(index).className= color;
	tio = papa.nextElementSibling;
	tio2 = papa.previousElementSibling;
	
	//tr siguiente
	if(tio != null)
	{
		if(tio.childNodes[index-1] !=null)
		{
			tio.childNodes[index-1].className= color;
		}
		if(tio.childNodes[index] !=null)
		{
			tio.childNodes[index].className= color;
		}
		if(tio.childNodes[index +1] !=null)
		{
			tio.childNodes[index +1].className= color;
		}
	}
	//tr anterior
	if(tio2 != null)	
	{
		if(tio2.childNodes[index] !=null)
		{
			tio2.childNodes[index].className= color;
		}
		if(tio2.childNodes[index +1] !=null)
		{
			tio2.childNodes[index +1].className= color;
		}
		if(tio2.childNodes[index -1] !=null)
		{
			tio2.childNodes[index -1].className= color;
		}
	}
	if(nodoCambio.nextElementSibling != null)
	{
		nodoCambio.nextElementSibling.className = color;
	}
	if(nodoCambio.previousElementSibling != null)
	{
		nodoCambio.previousElementSibling.className = color;
	}
}
function cambiarDeClase()
{
	aceptar= confirm("Si cambia de modo se recargará y se perderá el dibujo que haya hecho.\n¿Desea recargar la página?") ;
	if(aceptar == true)
	{
		if(mouse == 'no')
		{
			mouse = 'si';
		}
		else
		{
			mouse = 'no';
		}
		localStorage.setItem("mouse", mouse);
		location.reload();
	}
}
function activar(valor)
{
	pincel = document.getElementById("pincel");
	if(valor == true || mouse == 'si')
	{
		pincel.innerHTML = "Estado del pincel: Activado";
	}
	else
	{
		pincel.innerHTML ="Estado del pincel: Desactivado";
	}
}