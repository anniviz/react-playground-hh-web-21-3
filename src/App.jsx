import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default () => {
  const [todos, setToDos] = useState([])
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Add todo
          <input name="todo" type="text" />
        </label>
        <button>Add</button>
      </form>
      <ul>
        {todos.map(({ text, isDone, id }) => (
          <li key={id}>
            {text} {isDone && '✅'}
          </li>
        ))}
      </ul>
    </div>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setToDos(['it works'])
    const form = event.target
    const input = form.elements.todo
    const newTodo = { text: input.value, isDone: false, id: uuidv4() }
    setToDos([...todos, newTodo])
    form.reset()
    input.focus()
  }
}
