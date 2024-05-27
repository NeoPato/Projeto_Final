import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import style from './Home.module.css';
import Menu from './components/Menu';

export default function Home() {
  return(
    <>
      <div className={style["home"]}>
          <Menu/>
          <div>
            <h4>Aproveite suas férias com os hotéis Alferi</h4>
            <h1>deixe-nos planejar suas férias perfeitas</h1>
            <div className={style["pesquisar"]}>
              <input type="text" id='pesquisar' placeholder='Procure a cidade desejada aqui'/>
              <button> </button>
            </div>
          </div>
      </div>
    </>
  )
}