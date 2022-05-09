import React from 'react'
import Todo from './Todo'

//rfc for shortcut

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
      return <Todo todo={todo} />
    })
  )
}
