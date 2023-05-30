import React from "react";

function Act5_1({reyes})
{
    const resultado = reyes.map(i => 
    <div key={i.nombre} className="caja_reyes">
        <span className="rojo">
            {i.nombre.toUpperCase()}
        </span>
        ha comido {i.reinado*i.vacasComidas/365}
        vacas en sus {i.reinado} años de reinado
        <img src={"https://www.html6.es/img/rey_" + i.nombre.toLowerCase()+".png"} alt='rey'/>
    </div>);
    return <>
        {resultado}
    </>
}

export default Act5_1;