import Menu from "./Menu";
import style from "./>Cadastro.module.css" 

export default function Cadastro(){
    return(
        <div>
            <h1>Cadastro</h1>
            <div>
                <div>
                    <h3>Nome</h3>
                    <input type="text" placeholder='Nome do Usuário'/>
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="text" placeholder="Email do Usuário" />
                </div>
                <div>
                    <h3>CPF</h3>
                    <input type="number" placeholder="CPF do Usuário" />
                </div>
                <div>
                    <h3>Telefone</h3>
                    <input type="number" placeholder="Telefone do Usuário"/>
                </div>
                <div>
                    <h3>Senha</h3>
                    <input type="text" placeholder="Senha do Usuário"/>
                </div>
            </div>
        </div>
    );
}