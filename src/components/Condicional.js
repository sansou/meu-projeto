import { useState } from "react"

function Condicional() {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function sendMail(e) {
    e.preventDefault()
    setUserEmail(email)
    console.log("Testando");
  }

  function limparEmail() {
    setUserEmail('')
  }

  return (
    <>
      <h2>Cadastre o seu E-mail:</h2>
      <form>
        <input type="email" placeholder="Digite o seu email ..." onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={sendMail}>Enviar e-mail</button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é : {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </>
  )
}

export default Condicional