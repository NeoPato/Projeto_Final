import Menu from "./Menu";
import style from "./Login.module.css" 


export default function Login(){
    return(
            <div>
                <Menu/>
                <h1>Login</h1>
                <div>
                    <h3>Nome</h3>
                    <input type="text" placeholder='Nome do Usuário'/>
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="text" placeholder="Email do Usuário" />
                </div>
                <div>
                    <h3>Senha</h3>
                    <input type="text" placeholder="Senha do Usuário"/>
                </div>
            </div>
    );
}