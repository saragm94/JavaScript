import './style_sara.css';
import Act6_1 from "./Act6_1";

function App() {
    const [chiste, setChiste]=useState("");
    const otro= ()=>{
    const url="https://api.icndb.com/jokes/random"
    const peticion=fetch(url);
    peticion
    .then (datos => datos. json () )
    .then (lectura => setChiste (lectura.value. joke))
    .catch (console.log)
    }
    useEffect ( ()=> {
    otro();
},[])
    return (
        <>
        {chiste}
        <button onclick={otro}>Otro chiste</button>
        </>
    );
}
    
export default App;