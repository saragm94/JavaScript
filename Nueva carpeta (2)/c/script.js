var url ="https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/Alojamientos_turisticos/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json";
var apartamentos = [];
fetch(url)
    .then(res => res.json())
    .then(data => data.features.forEach(element => 
    {
        apartamentos.push(element);
        createTableRow(element.attributes, tableMain);
    })
);

//Función para mostrar los datos
function createTableRow(data, parent) 
{
    //Elementos de la fila
    const createTr = document.createElement("tr");
    const createTdName = document.createElement("td");
    const createTdDirection = document.createElement("td");
    const createTdTelephone = document.createElement("td");
    const createTdPlazas = document.createElement("td");

    //Atributos de la tabla
    createTr.className = "giveInfo";
    createTr.setAttribute("data-bs-toggle", "modal");
    createTr.setAttribute("data-bs-target", "#exampleModal");
    createTr.id = data.ID;
    createTr.setAttribute("onclick", "modalDates(this)");
    createTdName.innerText = data.NOMBRE;
    createTdDirection.innerText = data.DIRECCION;
    createTdTelephone.innerText = data.TELEFONO;
    createTdPlazas.innerText = data.PLAZAS;

    //Datos de la tabla
    parent.appendChild(createTr);
    createTr.appendChild(createTdName);
    createTr.appendChild(createTdDirection);
    createTr.appendChild(createTdTelephone);
    createTr.appendChild(createTdPlazas);
}

//Listener del search del Municipio
document.querySelector('#muni').addEventListener('click', function ()
{
    let text = document.querySelector('#muniInput');
    console.log(text.value);
    let rows = tableMain.getElementsByTagName("tr");
    const auxRows = rows.values();
    console.log(auxRows);
});

//Listener del search de la categoría
document.querySelector("#category").addEventListener("click", function () 
{
    let text = document.querySelector("#categoryInput");
    console.log(text.value);
});

//Function to update modal dates
function modalDates (dates)
 {
    let id = (dates.id)-1;
    console.log(apartamentos[dates.id]);
    //Vars to update modal
    let modalTitle = document.querySelector('#modalTitle');
    let modalType = document.querySelector('#modalType');
    let modalCategory = document.querySelector('#modalCategory');
    let modalMuni = document.querySelector('#modalMuni');
    let modalDirec = document.querySelector('#modalDirec');
    let modalPhone = document.querySelector('#modalPhone');
    let modalNum = document.querySelector('#modalNum');
    //Inserting the text into the modal
    modalTitle.innerHTML = apartamentos[id].attributes.NOMBRE;
    modalType.innerHTML = apartamentos[id].attributes.TIPO;
    modalCategory.innerHTML = apartamentos[id].attributes.Est_LLav;
    modalMuni.innerHTML = apartamentos[id].attributes.MUNICIPIO;
    modalDirec.innerHTML = apartamentos[id].attributes.DIRECCION;
    modalPhone.innerHTML = apartamentos[id].attributes.TELEFONO;
    modalNum.innerHTML = apartamentos[id].attributes.PLAZAS;
}