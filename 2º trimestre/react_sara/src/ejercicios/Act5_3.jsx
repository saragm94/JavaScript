import React from "react";

function Act5_3({reyes})
{
    const resultado = reyes.find(i => i.nombre.substring(0,1) === "e" || i.nombre.substring(0,1) === "E")
    return <>
        {
            resultado === undefined ? "No se ha encontrado" : resultado.nombre
        }
    </>
}

export default Act5_3;