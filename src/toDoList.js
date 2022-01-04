import {useState} from "react"; 

function toDoList() {
  const [toDo, setToDo] = useState(""); 
  const [toDos, setToDos] = useState([]); 
  const onChange = (event) => {
    setToDo(event.target.value); 
  }
  const onSubmit = (event) => {
    event.preventDefault(); 
    if(toDo==="") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo(""); 
  };
  console.log(toDos); 
  return (
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        onChange={onChange}
        value={toDo}
        type="text" 
        placeholder="Write your to do..." 
      />
      <button>
        Add To Do
      </button>
    </form>
    <hr />
    {toDos.map((item, index) => 
      <li key={index}>
        {item.toUpperCase()}
      </li>
      )}
  </div>
  );
}

export default toDoList; 