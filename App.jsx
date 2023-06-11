import React from 'react'
import './App.css'

function App() {
  return (
    <div className='MainContent'>
      <section class="contenido">
        <h1>REGISTRO DE NOVEDAD</h1>
          <form action="" method='POST'>
          <div class="con">
            <label htmlFor="">Fecha de la novedad:</label>
            <input type="date" />
          </div>
          <div class="con">
            <label htmlFor="">ID-Radioperador:</label>
            <input type="text" placeholder='25552255' />
          </div>
          <div class="con">
            <label htmlFor="">Empresa:</label>
            <select required>
              <option>FERRETEROS SAS</option>
              <option>PALOQUEMAO</option>
              <option>PUNTO SAN JUAN</option>
            </select>
          </div>
          <label htmlFor="">Tipo de novedad:</label>
          <select required name="" id="">
            <option>HURTO</option>
            <option>ACCIDENTE</option>
            <option>ESCOLTA</option>
          </select>
          <div class="con">
            <label htmlFor="">ID-Motorizado:</label>
            <select required>
              <option>425637</option>
              <option>895623</option>
              <option>215487</option>
            </select>
          </div>
          <label htmlFor="area">Descripcion de la novedad:</label>
          <div class="conten">
            <textarea name="" id="" cols="30" rows="10" placeholder='Describe lo ocurrido:'></textarea>
          </div>
          <label htmlFor="">Evidencia de la novedad:</label>
          <input type="file" name="archivo" ></input>
          <div class="content">
            <input class="enviar" type="button" value="Enviar registro" />
          </div>
        </form>
        <footer>
          <p>2023-Todos los derechos reservados</p>
          <a href="#">Contacta a los desarrolladores</a>

        </footer>
      </section >
    </div>
  )
}
export default App