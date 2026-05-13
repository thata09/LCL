import './Cadastro.css'

export default function Cadastro() {
  return (
    <div className="cadastro-app">
      <div className="cadastro-lado-amarelo"></div>

      <div className="cadastro-lado-cinza">
        <div className="cadastro-box">
          <h2>Criar conta</h2>
          <p>Cadastre-se para continuar no Snapchat</p>

          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="Usuário" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button>Cadastrar</button>

          <a href="#">Já tenho uma conta</a>
        </div>
      </div>
    </div>
  )
}
