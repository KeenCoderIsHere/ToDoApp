import { useState } from 'react'
import './App.css'
import Header from './header'

function App() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState("")

  const addItem = () => {
    if (inputValue.length > 0) {
      const newItem = {
        id: (new Date()).toLocaleString(),
        task: inputValue,
        done: false
      }
      setItems([...items, newItem])
      setInputValue('')
    } else {
      alert('Enter any task!')
    }
  }
    function CircularProgress({ progress, color }) {
    return (
      <div
        className="circular"
        style={{
          background: `conic-gradient(${color} 0% ${progress}%, #333 ${progress}% 100%)`
        }}
      >
        <div className="inner">{progress}%</div>
      </div>
    );
  }
  const deleteItem = (idToDelete) => {
    const newItems = items.filter((item) => item.id !== idToDelete)
    setItems(newItems)
  }
  function roundToFixed(num, decimals) {
    return roundTo(num, decimals).toFixed(decimals);
  }
  const markAllAsDone = () => {
    const updatedItems = items.map(item => ({
      ...item,
      done: true
    }))
    setItems(updatedItems)
  }

  return (
    <>
      <Header />
      <div className='input-container'>
        <input
          placeholder='Add item'
          className='input-text-box'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='add-button'
          onClick={addItem}
        >
          Add Task
        </button>

        <button
          onClick={markAllAsDone}
          className='mark-all-as-done'
        >Mark all as done</button>
      </div>

      <ul      >
        {items.map((item) => {
          return <li
            key={item.id}
            style={{
              fontFamily: "Montserrat",
              color: 'black',
              backgroundColor: '#f9f9f9',
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '8px',
              fontWeight: "500",
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'max-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <input
              type='checkbox'
              checked={item.done}
              onChange={(e) => {
                const updatedItems = items.map(it =>
                  it.id === item.id ? { ...it, done: e.target.checked } : it
                )
                setItems(updatedItems)
              }}
            />
            <div className='item-task'>{item.task}</div>
            <button
            id='status'
            style={{
              backgroundColor: item.done ? "#38cb82" : "blue"
            }}
            >
              {item.done ? "Completed" : "Pending"}
            </button>
            <button
              className='delete-item'
              onClick={() => { deleteItem(item.id) }}
            >Delete</button>
            <p style={{fontSize: '12px'}}>Date Created : { item.id }</p>
          </li>
        })}
      </ul>
        <div className='task-status'>
          <div className='completed1'>
          <CircularProgress progress={Math.round(((items.filter(item => item.done).length)/(items.length))*100)} color={'#38cb82'}/>
          <div><div className="green-dot"></div>Completed</div>
          </div>
          <div className='pending1'>
          <CircularProgress progress={Math.round(((items.filter(item => !item.done).length)/(items.length))*100)} color={'blue'}/>
          <div><div className='blue-dot'></div>Pending</div>
          </div>
          </div>
    </>
  )
}

export default App
