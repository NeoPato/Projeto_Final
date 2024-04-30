import style from './Menu.module.css'

export default function Menu(){
    return (
        <div className={style["wrap-menu"]}>

                <h2>Reserva para Curtir</h2>      
                <a href="/perfil">
                    <div className={style["wrap_img"]}>
                        <img src="src\assets\img\do-utilizador.png" alt="perfil"/>
                    </div>
                </a>   
                <p> 
                    <a href="/contato">Contato</a> 
                </p>
                <p> 
                    <a href="/sobre">Sobre</a> 
                </p>  
                <p> 
                    <a href="/fotos">Fotos</a> 
                </p>
                <p> 
                    <a href="/reserva">Reserva</a> 
                </p>
                <p>
                    <a href="/">Home</a>    
                </p>
        </div>
    )
}