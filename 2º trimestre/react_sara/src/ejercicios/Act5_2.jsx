import React from "react";

function Act5_2({reyes})
{
    const eliminar = (i) =>
    {
        i.target.parentNode.remove();
    }
    return <>
        {reyes.filter(i => !i.nombre.includes("g")).
        map(i =>
        <div key={i.nombre}>
            {i.nombre}
            <button onClick={eliminar}>Borrar</button>
        </div>)}
    </>
}

export default Act5_2;