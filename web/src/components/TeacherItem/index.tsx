import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/31242886?s=460&u=b40d824aedefcef0e7aafd1b28d30fbb3d056f55&v=4" alt="Edson Boldrini" />
        <div>
          <strong>Edson Boldrini</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta de Matemática
          <br /><br />
          Apaixonado por números
        </p>

      <footer>
        <p>
          Preço/hora
            <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;