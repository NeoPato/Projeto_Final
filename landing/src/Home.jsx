import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import style from './Home.module.css';
import Menu from './components/Menu';

export default function Home() {
  return(
    <>
      <div className={style["wrap_home"]}>
          <Menu/>
          <div>
            <div className={style["wrap_pesquisar"]}>
              <input type="text" id='pesquisar' placeholder='Procure a cidade desejada aqui'/>
              <button> </button>
            </div>
          </div>
      </div>
    </>
  )
}