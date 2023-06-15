import React from 'react'
import "./EmptyInfo.css";
import { MdNorth, MdWest, MdNorthEast, MdSouth, MdSentimentDissatisfied } from 'react-icons/md';
const EmptyInfo = () => {
  return (
    //  No caso da lista estar vazia. 
    <div className="tutorial">
      <div className="warning-wrapper">
        <span className="material-icons"> <MdSentimentDissatisfied/> </span>

        <span className="warning">Lista vazia!</span>
      </div>

      <div className="explanation">
        <div className="desktop">
          <div className="order">
            <span className='text-wrapper'
            >Acesse o <span id="menu">menu acima</span>
              <span className="material-icons"> <MdNorth/> </span>
            </span>


            <span>
              para ver as séries cadastradas e adicionar itens à sua
              lista!
            </span>

          </div>
          
          <div className="order">
            <span className='text-wrapper side'
            > <span className="material-icons"> <MdWest/> </span> Acesse o <span id="menu">menu lateral</span>
              
            </span>


            <span> para navegar pelas suas listas de séries!</span>
            <a href="">Outras dúvidas? Clique aqui!</a>
          </div>
        </div>

        <div className="mobile">
          <div className="order">
            <span
            >Acesse o <span id="menu">menu acima</span>
              <span className="material-icons"> <MdNorthEast/> </span></span>


            <span>
              para ver as séries cadastradas e adicionar itens à sua
              lista!
            </span>

          </div>
        
          <div className="order">
            <span
            >Acesse o <span id="menu">menu abaixo</span>
              <span className="material-icons"> <MdSouth/> </span></span>


            <span> para navegar pelas suas listas de séries!</span>
            <a href="">Outras dúvidas? Clique aqui!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyInfo;