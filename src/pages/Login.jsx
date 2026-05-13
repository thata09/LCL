import './Login.css'

export default function App() {
  return (
    <div className="app">
      <div className="lado-amarelo"></div>

      <div className="lado-cinza">
        <div className="box">
          <h2>Fazer login</h2>
          <p>Entre para continuar no Snapchat</p>

          <input type="text" placeholder="Usuário ou e-mail" />
          <input type="password" placeholder="Senha" />

          <a href="#">Esqueceu sua senha?</a>

          <button>Entrar</button>
        </div>
      </div>
    </div>
  )
}
