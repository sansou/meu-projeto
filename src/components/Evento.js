function Evento({ numero }) {
  function meuEvento() {
    console.log(`Fui Ativado! ${numero}`)
  }

  return (
    <>
      <p>Clique aqui para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  )
}

export default Evento