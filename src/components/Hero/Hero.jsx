import React from "react"
import "./hero.css"
import logo from "../../assets/logoGB.svg"
import { AiOutlineFileText } from "react-icons/ai"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='header'>
          <div className='header__title'>
            <img className='header__title_img' src={logo} alt='logo' />
            <div className='header__content'>
              <h2 className='header__text'>GB parser</h2>
              <p className='header__subtext'>Импорт данных</p>
            </div>
          </div>
          <button className='header__button'>ПАРСИТЬ</button>
        </div>
        <div className='main'>
          <div className='content'>
            <AiOutlineFileText size={80} />
            <h1 className='content__text'>Перетащите файл</h1>
            <p className='content__subtext'>Или нажмите "Выбрать файл"</p>
            <div className='content__buttons'>
              <button type="button" className='content__button'>
                <label htmlFor='file'>
                  <input id='file' type='file' style={{ display: "none" }} />
                  Выберите файл
                </label>
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <textarea className="footer__area" placeholder="Ведите или вставьте данные" ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Hero
