import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
let cont = 0
function App() {
  const  [tasks, setTasks] = useState([
    {
      idTask:1,
      description:"Hoña"
    }
  ]
   

  ) 

const inputText = useRef('')

const handleSetTask = () =>{
    cont++
    let newTask = {
      idTask:cont,
      description:inputText.current.value
    }
    setTasks([...tasks,newTask])


}




  return (
    <>
      <input ref={inputText} id='taskInput' type="text" placeholder='Ingrese la tarea' />
      <button onClick={handleSetTask} id='taskButton'>Crear Tarea</button>
      <hr />
      <div className='listTask'>
        {tasks.map(x =>(
          <h3 key={x.idTask}>{x.description}</h3>
        ))

        }
        
      </div>
    </>
  )
}

export default App
