import {useState} from "react"

function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(nome)
        console.log(`Usuário ${nome} cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState("Gabriela")
    const [senha, SetSenha] = useState('')

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e)=> SetSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
            <p>Nome: {nome}</p>
            <p>Senha: {senha}</p>
        </div>
    )
}

export default Formulario 