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
    return new Promise((resolve, reject) => {
        if (!isNaN(inputEdad)) 
        {
            if (inputEdad >= 18) {
                resolve("Puede Pasar tronco! ");
            } else {
                reject('No puedes pasar tronco!');
            }
        } else {
            throw new Error ('¡Tronco! ¡Tronco! ¡Me estás cabreando!');
        }
    });
}

// No entiendo por qué siempre salta al error cuando trato de controlar que no sea valor nulo

document.getElementById("entrada").addEventListener('click', () => {
    disco(document.getElementById("inputEdad").value)
        .then((msg) => {console.log(msg);})
        .catch((error) => {console.log(error);});
});
