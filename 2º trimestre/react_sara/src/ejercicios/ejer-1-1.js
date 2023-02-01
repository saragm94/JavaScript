import img0 from './img/rey_atanagildo.png';
import img1 from './img/rey_leogivildo.png';
import img2 from './img/rey_sisebuto.png';
import './style_sara.css';

function App() {
  let nombres = ['Atanagildo', 'Leogivildo', 'Sisebuto'];
 
  return (
    <div className="container">
      <title>Proyecto React Sara</title>
      <div className='caja_reyes'>
        <img src={img0} alt={nombres[0]}/>
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja_reyes'>
        <img src={img1} alt={nombres[1]}/>
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja_reyes'>
        <img src={img2} alt={nombres[2]}/>
        <div className='nombre'>{nombres[2]}</div>
        </div>
    </div>
  );
}
