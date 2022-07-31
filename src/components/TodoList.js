import React from 'react'

export default function TodoList( {list} ) {
  return (
    <div>
        {
            list.map((todo) =>{
                return <li key={todo.id}>{todo.name}</li>
            })
        }


    </div>
  )
}
