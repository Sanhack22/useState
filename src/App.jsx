import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        idTask: 1,
        description: "Lavar Platos"
      },
      {
        idTask: 2,
        description: "Tender Cama"
      }
    ]

  ) 

const myReference = useRef('AMEE')

const handleSetTask = () =>{
  const newTask = TextTask.current.value;
  console.log(newTask);

}




  return (
    <>
      <input ref={myReference} id='taskInput' type="text" placeholder='Ingrese la tarea' />

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
