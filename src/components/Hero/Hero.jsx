import React, { useState } from "react"
import "./hero.css"
import logo from "../../assets/logoGB.svg"
import { AiOutlineFileText } from "react-icons/ai"

const Hero = () => {
  const [jsonData, setJsonData] = useState([])

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const json = JSON.parse(event.target.result)
      if (Array.isArray(json)) {
        // добавляем проверку на то, что json является массивом
        const itemsArray = json.map((item) => ({
          login: item.login,
          password: item.password,
          itemDescription: item.itemDescription,
        }))
        setJsonData(itemsArray)
      } else {
        alert("Invalid JSON data")
      }
    }

    reader.readAsText(file) // чтения содержимого выбранного файла в формате текста
  }

  // Делаем вывод на новую страницу
  const openNewTab = () => {
    if (jsonData.length === 0) {
      return
    }
    const newWindow = window.open("")
    newWindow.document.write(
      "<html><head><title>Данные из файла</title></head><body>"
    )
    newWindow.document.write("<div><h3>Данные из файла:</h3></div>")
    newWindow.document.write("<div>")
    jsonData.forEach((item) => {
      newWindow.document.write("<p>Login: " + item.login + "</p>")
      newWindow.document.write("<p>Password: " + item.password + "</p>")
      newWindow.document.write(
        "<p>Description: " + item.itemDescription + "</p>"
      )
    })
    newWindow.document.write("</div>")
    newWindow.document.write("</body></html>")
  }

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
          <button className='header__button' onClick={openNewTab}>
            ПАРСИТЬ
          </button>
        </div>
        <div className='main'>
          {/* С помощью закомитенного кода данные могут выводиться прямо на месте ввода */}
          {/* {jsonData.length > 0 ? (
            <div className='content'>
              <h3>Данные из файла:</h3>
              {jsonData.map((item, index) => (
                <div key={index}>
                  <div>{item.login}</div>
                  <div>{item.password}</div>
                </div>
              ))}
            </div>
          ) : ( */}
          <div className='content'>
            <AiOutlineFileText size={80} />
            <h1 className='content__text'>Перетащите файл</h1>
            <p className='content__subtext'>Или нажмите "Выбрать файл"</p>
            <div className='content__buttons'>
              <button type='button' className='content__button'>
                <label htmlFor='file'>
                  <input
                    id='file'
                    type='file'
                    style={{ display: "none" }}
                    onChange={handleFileUpload} // добавляем обработчик handleFileUpload
                  />
                  Выберите файл
                </label>
              </button>
            </div>
          </div>
          {/* )} */}
        </div>
        <div className='footer'>
          <p className='footer__text'>
            Файл JSON для проверки работоспособности лежит в репозитории. <br />{" "}
            Так же, при необходимости можно добавить новые данные для парсинга.(
            В функции openNewTab можно снять коммиты с других полей ) Если не
            открывает в новом окне, значит включена защита браузера(в строке
            поиска браузера появится соответствующий значёк)
            <br /> Первый опыт написания парсера, строго не судите)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
