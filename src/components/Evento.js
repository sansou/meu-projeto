import Button from "./evento/Button"
function Evento({ numero }) {
  function meuEvento() {
    console.log('Ativando primeiro evento')
  }
  function segundoEvento() {
    console.log('Ativando segundo evento')
  }

  return (
    <>
      <p>Clique aqui para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </>
  )
}

export default Evento