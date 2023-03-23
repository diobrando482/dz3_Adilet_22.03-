import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      title: 'Coding',
      completed: false
    },
    {
      id: 2,
      title: 'Eat',
      completed: false
    },
    {
      id: 3,
      title: 'Sleep',
      completed: false
    },
    {
      id: 4,
      title: 'Coding',
      completed: false
    },

  ])

  const handleShow = () => setShow(!show)

  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);
    console.log(newTask, 'new task');
  }

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState,
      {
        id: tasks.length + 1 ,
        title: newTask,
        completed: false
      }]);
    handleShow();
  }

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
      <div className="App">
        {show && <Modal
            handleChangeCheck={handleChangeCheck}
            handleAdd={handleAddTask}
            handleShow={handleShow}
        />}

        <Button handleClick={handleShow}>
          Открыть модалку
        </Button>

        <TaskList
            handleDelete={handleDelete}
            list={tasks}
        />
      </div>
  );
}

export default App;



