import img0 from './img/rey_atanagildo.png';
import img1 from './img/rey_leogivildo.png';
import { useRef } from 'react';
import './style_sara.css';

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  function incrementar(i)
  {
    i.target.innerHTML = Number(i.target.innerHTML)+1;
    if(i.target.innerHTML>=10)
    {
      i.target.innerHTML=1;
    }
    if(i.target.innerHTML>=8)
    {
      i.target.style.backgroundColor = "red";
    }else{
      i.target.style.backgroundColor = "white";
    }
  }
  const convertir = () =>  {refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;}
  const cambiar = (j) =>  
  {
    if(j.tarjet.src.includes('Atanagildo'))
    {
      j.target.src = img0
    }else{
      j.target.src = img1
    }
    j.target.src = img0;
  }
  const lectura=(i)=>{refCaja.current.innerHTML = i.taget.innerHTML.value};
  
  return (
    <>
    <div ref={refCaja} className="caja_reyes" onClick={incrementar}>1</div>
    <button onClick={convertir}>Aceptar</button>
    <div><img onClick={cambiar} src={img0} alt="Atanagildo"/></div>
    <input onChange={lectura} className="campo"/>
    </>
  );
}

export default App;
