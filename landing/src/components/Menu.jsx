import style from './Menu.module.css'

export default function Menu(){
    return (
        <div className={style["menu"]}>

                <img src="src\assets\img\logo_alferi_hotel_icone.svg" alt="Logo" />     
                
                  
                <p>
                    <a href="/">Home</a>    
                </p>
                <p> 
                    <a href="/reserva">Reserva</a> 
                </p>
                <p> 
                    <a href="/fotos">Fotos</a> 
                </p>
                <p> 
                    <a href="/sobre">Sobre</a> 
                </p>
                <p> 
                    <a href="/contato">Contato</a> 
                </p>
                <button onClick={() => window.location.href='/perfil'}>
                    <div className={style["img"]}>
                        <img src="src/assets/img/do-utilizador.png" alt="perfil" />
                    </div>
                </button>
        </div>
    )
}