import { useState } from "react";
import './Listagem.css'


export default function Listagem() {

    return (
      <main>
           <h1>Listagem</h1>
           
           <table border="1">
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Senha</td>
                    <td>Editar</td>
                    <td>Excluir</td>
                </tr>

                <tr>
                    <td>Thalita</td>
                    <td>thalita@gmail.com</td>
                    <td>1234</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>

                <tr>
                    <td>Laura</td>
                    <td>laurao@gmail.com</td>
                    <td>4321</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>

                <tr>
                    <td>Ellen</td>
                    <td>ellen@gmail.com</td>
                    <td>1357</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>

                
                <tr>
                    <td>Ana Julia</td>
                    <td>anajulia@gmail.com</td>
                    <td>2021</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>

                  <tr>
                    <td>Luiza</td>
                    <td>luluiza@gmail.com</td>
                    <td>7894</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>

                  <tr>
                    <td>Vinicius Brazão</td>
                    <td>viniciusbrazao@gmail.com</td>
                    <td>vnsbrz08</td>
                    <td>📝</td>
                    <td>🗑️</td>
                </tr>
           </table>

        </main>
    )
}