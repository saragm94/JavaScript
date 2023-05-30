import React from "react";

function Act5_4({reyes})
{
    const suma=(i)=>{++i.target.innerHTML}
    const resultado = reyes.filter(i => i.reinado > 10 && i.vacasComidas > 10).map(i =>
        <div key={i.nombre}>
            {i.nombre}
            <div onClick={suma}>
                0
            </div>
        </div>)
    return <>
        {resultado}
    </>
}

export default Act5_4;