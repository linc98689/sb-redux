import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const input = document.querySelector("#todo-input");
    if (input.value === "")
      return;

    dispatch({
      type: "ADD_NEW",
      payload: input.value
    });
    input.value= "";

  };

  const handle_delete = (e)=>{
    const target = e.target;
    let key = target.parentElement.dataset.key;
    dispatch({
      type: "DELETE_ITEM",
      payload: key
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        My Todo List
      </header>
      {/* form to add new item */}
      <form className="App-form">
        <input type="text" id="todo-input" placeholder="write new todo here"></input>
        <button type="submit" onClick={handleSubmit}>ADD</button>
      </form>

      {/* list of items */}
      <div className="App-list">
        List of Todos
        <ul>
          {todos && Object.entries(todos).map(([key, value])=>(
            <li key={key} data-key={key}>{value} 
            <button onClick={handle_delete}>X</button></li>
          ))
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
