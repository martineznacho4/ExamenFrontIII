//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre, libro}) {
  return (
    <div className="SuccessCard">
      <p>Gracias {nombre}!</p>
      <p>Registramos que tu libro favorito es {libro}</p>
    </div>
    
  );
}

export default Card;
