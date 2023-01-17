function revisar()
{
    var table = document.getElementById("ver");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    const promesa = new Promise(function(resolve, reject)
    {
        nota = Math.floor(Math.random()*11);
        if(nota >= 5)
        {
            resolve("Aprobado");
        }else{
            reject("Suspendido");
        }
        console.log(nota);
    });
    
    promesa
        .then((resolveMsg) => {cell1.innerHTML = (resolveMsg); cell2.innerHTML = nota;})
        .catch((err) => {alert(err); cell1.innerHTML = (err); cell2.innerHTML = nota;});
    
    console.log(promesa);
}

function disco(edad)
{
    //var edad = document.getElementById("edad");
    console.log(edad);
}