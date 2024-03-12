import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Boton } from './Components/Boton/Boton'
import { NavBar } from './Components/NavBar/NavBar'
import './App.css'
import { Main } from './Components/Layouts/Main/Main'
import { CardTask } from './Components/CardTask/CardTask'

import { DivNewTask } from './Components/DivNewTask/DivNewTask'

let cont = 0
function App() {
  const [tasks, setTasks] = useState([
    {
      idTask: cont,
      name: "Aseo",
      description: "Lavar Platos"
    }
  ]
  )
  const [tasksArchive, setArchive] = useState([

  ])

  const inputText = useRef('')
  const inputTextName = useRef('')




  function cleanInputs() {
    inputText.current.value = ''
    inputTextName.current.value = ''
  }
  const handleSetTask = () => {
    cont++
    let newTask = {
      idTask: cont,
      name: inputTextName.current.value,
      description: inputText.current.value
    }
    setTasks([...tasks, newTask])
    cleanInputs()
  }

  const archive = (id, name, description) => {
    const taskToArchive = tasks.find(task => task.idTask === id);


    if (taskToArchive) {
      const taskToArchive = tasks.find(task => task.idTask === id);

      let newTaskArchive = {
        idTask: taskToArchive.idTask,
        name: taskToArchive.name,
        description: taskToArchive.description
      }

      setArchive([...tasksArchive, newTaskArchive]);
    }
  }
  return (
    <>

      <Main>
        <NavBar>
          <Boton funcion={handleSetTask} id='' text='Ver Tareras Pendientes' />
          <Boton funcion={handleSetTask} id='' text='Ver Tareas Archivadas' />
          <Boton funcion={handleSetTask} id='' text='Ver Todas Las Tareas' />
        </NavBar>
        <DivNewTask>
          <input ref={inputTextName} id='taskInput' type="text" placeholder='Nombre De La Tarea' />
          <textarea type="text" ref={inputText} id='taskDescription' placeholder='Ingrese La Descripcion' />
        </DivNewTask>
        <Boton funcion={handleSetTask} id='taskButton' text='Crear Tarea' />

        <div className='listTask'>
          {tasks.map(x => (
        <CardTask onClick={() => archive(x.idTask, x.name, x.description)} key={x.idTask} title={x.name} description={x.description} text='Archivar' />
    ))}

        </div>
         <div className='listTask'>
        {tasksArchive.map(x => (
            <CardTask key={x.idTask} title={x.name} description={x.description} text='Archivar' /*a={archive(x.idTask,x.name,x.description)}*/ />
          ))}
        </div>
      </Main>
    </>

  )
}

export default App
