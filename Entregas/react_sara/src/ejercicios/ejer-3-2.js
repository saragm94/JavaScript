import img0 from './img/rey_atanagildo.png';
import img1 from './img/rey_leogivildo.png';
import img2 from './img/rey_sisebuto.png';
import rey from './img/rey_incognito.png';
import './style_sara.css';
import { useState } from 'react';

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]
  const [cantidad, setCantidad] = useState(0);
  const [res1, setRes1] = useState(0);
  const [res2, setRes2] = useState(0);
  const [res3, setRes3] = useState(0);
  const [res4, setRes4] = useState(0);
  
  const modificar = (i) =>
  {
    setCantidad(i.target.value);
    setRes1(i.target.value*cambios[1].cambio);
    setRes2(i.target.value*cambios[2].cambio);
    setRes3(i.target.value*cambios[3].cambio);
    setRes4(i.target.value*cambios[4].cambio);
  }
  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/>

        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={res1} readOnly/> 

        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={res2} readOnly/> 

        <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={res3} readOnly/> 

        <label htmlFor="u4">{cambios[4].moneda}</label>
        <input id="u4" type="number" value={res4} readOnly/>  
    </>
  )
}

export default App;