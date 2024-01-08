import React from 'react';
import {useUnit} from "effector-react";
import $store, {addTodo, setNewTodo} from './store'
const App = () => {
    const store = useUnit($store)
  return (
      <div>
        <p>TODO</p>
          <input
              placeholder='New Todo'
              value={store.newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={()=> addTodo()}>add Todo</button>

          <div>
              {store.todos.map((todo: {id: number, text: string}) => (
                  <div key={todo.id}>
                      <input type="checkbox"/>
                      <input value={todo.text}/>
                      <button>delete</button>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default App;
