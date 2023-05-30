import img0 from './img/rey_atanagildo.png';
import img1 from './img/rey_leogivildo.png';
import img2 from './img/rey_sisebuto.png';
import rey from './img/rey_incognito.png';
import './style_sara.css';
import { useState } from 'react';

function App() {
  const reyesGodos = 
  [
    {
      nombre: "Ataúlfo",
      aficion: "Comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "Leer Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "La cría del escarabajo en almíbar",
    }
  ]
  
  const cambio = () => 
  {
    setContador(contador + 1);
    if(contador + 1 >= reyesGodos.length)
    {
      setContador(0);
    }
    setMensaje(<h2>La afición principal de <span className="rojo">
      {reyesGodos[contador].nombre}</span> es <span className='verde'>
        {reyesGodos[contador].aficion}</span></h2>)
  }

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();

  return (
    <>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  );
}

export default App;
