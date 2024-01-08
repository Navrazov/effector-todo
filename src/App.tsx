import React from 'react';
import {useUnit} from "effector-react";
import $store, {addTodo, remove, setNewTodo, toggle, update} from './store'
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
              {store.todos.map((todo) => (
                  <div key={todo.id}>
                      <input
                          type="checkbox"
                          onClick={() => toggle(todo.id)}
                          checked={todo.done}
                      />
                      <input
                          value={todo.text}
                          onChange={(e) => update({id: todo.id, text: e.target.value})}
                      />
                      <button onClick={()=> remove(todo.id)}>
                          delete
                      </button>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default App;
