import img0 from './img/rey_atanagildo.png';
import img1 from './img/rey_leogivildo.png';
import img2 from './img/rey_sisebuto.png';
import rey from './img/rey_incognito.png';
import './style_sara.css';

function App() {
  let nombres = ['Atanagildo', 'Leogivildo', 'Sisebuto'];  
  const cambiarImagen=(i)=>
  {
    if(i.target.src.includes("incognito"))
    {
      i.target.stye.visibility = "hidden";
    }else{
      i.target.src = rey;
    }
    i.target.parentNode.style.backgroundColor = 'white';
  }
  const cambiarTexto=(i)=>
  {
    if(i.target.innerHTML === "Visto")
    {
      i.target.innerHTML = "";
    }else{
      i.target.innerHTML = "Visto";
    }
  }
  return (
    <div className="container">
      <title>Proyecto React Sara</title>
      <div className='caja_reyes'>
        <img onClick={cambiarImagen} src={img0} alt=''/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja_reyes'>
        <img onClick={cambiarImagen} src={img1} alt=''/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja_reyes'>
        <img onClick={cambiarImagen} src={img2} alt=''/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[2]}</div>
        </div>
    </div>
  );
}

export default App;
