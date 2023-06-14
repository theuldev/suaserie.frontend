import React from 'react'
import "./EmptyInfo.css";
const EmptyInfo = () => {
  return (
    //  No caso da lista estar vazia. 
    <div className="tutorial">
      <div className="warning-wrapper">
        <span className="material-icons"> sentiment_dissatisfied </span>

        <span className="warning">Lista vazia!</span>
      </div>

      <div className="explanation">
        <div className="desktop">
          <div className="order">
            <span
            >Acesse o <span id="menu">menu acima</span>
              <span className="material-icons"> north </span>
            </span>


            <span>
              para ver as séries cadastradas e adicionar itens à sua
              lista!
            </span>

          </div>
          <hr id="warning-separator" />
          <div className="order">
            <span
            >Acesse o <span id="menu">menu lateral</span>
              <span className="material-icons"> west </span>
            </span>


            <span> para navegar pelas suas listas de séries!</span>
            <a href="">Outras dúvidas? Clique aqui!</a>
          </div>
        </div>

        <div className="mobile">
          <div className="order">
            <span
            >Acesse o <span id="menu">menu acima</span>
              <span className="material-icons"> north_east </span></span>


            <span>
              para ver as séries cadastradas e adicionar itens à sua
              lista!
            </span>

          </div>
          <hr id="warning-separator" />
          <div className="order">
            <span
            >Acesse o <span id="menu">menu abaixo</span>
              <span className="material-icons"> south </span></span>


            <span> para navegar pelas suas listas de séries!</span>
            <a href="">Outras dúvidas? Clique aqui!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyInfo;