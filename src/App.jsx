import { useState } from "react";
import Card from './Card'

const ErrorMessage = () => {

  return (<p className="ErrorMsg">Por favor chequea que la informacion sea correcta</p>)
}



const App = () => {
  //Aqui deberias agregar los estados y los handlers para los inputs


  const [userName, setUserName] = useState("");
  const [libro, setLibro] = useState("");

  const [valido, setValido] = useState({
    userName: false,
    libro: false,
  });

  const [showCard, setShowCard] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleUserName = (e) => {
    const nombre = e.target.value;

    if (nombre.length > 3) {
      setValido({ ...valido, userName: true });
    } else {
      setValido({ ...valido, userName: false });
    }

    setUserName(nombre.trim());
  };

  const handleLibro = (e) => {
    const libro = e.target.value;

    if (libro.length >= 6) {
      setValido({ ...valido, libro: true });
    } else {
      setValido({ ...valido, libro: false });
    }

    setLibro(libro);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if(valido.userName && valido.libro){
      setShowCard(true)
    }
  }


  return (
    <div className="App">
      <h1>Cual es tu libro favorito?</h1>
      <form>
        <input onChange={handleUserName} value={userName} name='nombre' type="text" placeholder="Ingresa tu nombre"  ></input>
        <br></br>
        <input onChange={handleLibro} value={libro} name='' type="text"placeholder="Nombre del libro"></input>
        <br></br>
        <button onClick={handleSubmit} type="submit" >Submit</button>

      </form>

      {submitted && 
      <>
        {showCard ? <Card nombre={userName} libro={libro}/> : <ErrorMessage/>}
      </>
    }

    </div>
  );
}

export default App;
