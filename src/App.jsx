import { useState } from 'react'
import './App.css'
import {ColorRojo } from './Componentes/ColorRojo.jsx'
/*import {DarkWork } from './Componentes/DarkWork.jsx'
import {ColorWork } from './Componentes/ColorWork.jsx'
import {DarkPlay } from './Componentes/DarkPlay.jsx'
import {ColorPlay } from './Componentes/ColorPlay.jsx'
import {DarkStudy } from './Componentes/DarkStudy.jsx'
import {ColorStudy } from './Componentes/ColorStudy.jsx'
import {DarkExercise } from './Componentes/DarkExercise.jsx'
import {ColorExercise } from './Componentes/ColorExercise.jsx'
import {DarkSocial } from './Componentes/DarkSocial.jsx'
import {ColorSocial } from './Componentes/ColorSocial.jsx'
import {DarkSelfCare } from './Componentes/DarkSelfCare.jsx'
import {ColorSelfCare } from './Componentes/ColorSelfCare.jsx'*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorRojo/>

    </div>
  )
}

export default App

