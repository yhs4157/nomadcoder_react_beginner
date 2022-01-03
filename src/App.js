import styles from "./App.module.css";
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0); 
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1); 
  const onChange = (event) => setKeyword(event.target.value); 

  const [showing, setShowing] = useState(false); 
  const onShowClick = () => setShowing((prev) => !prev); 

  useEffect(()=> {
    console.log("I run only once.")
  }, []); 
  
  useEffect(() => {
    if(keyword !== "" &&keyword.length > 5) {
      console.log(`I run when 'keyword' changes.`);
    }
  }, [keyword]);

  useEffect(() => {
      console.log(`I run when 'counter' changes.`);
  }, [counter]);

  function Hello() {
    function byFn() {
      console.log("create :("); 
    }
    function hiFn() {
      console.log("create :)"); 
      return byFn; 
    }
    useEffect(hiFn, []);
    return <h1>Hello</h1>;
  }

  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <input 
        value={keyword}
        type="text" 
        placeholder="Search here" 
        onChange={onChange} 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {showing ? <Hello /> : null}
      
      <button 
        onClick={onShowClick}
      >
        {showing ? "Hide" : "Show"}
      </button>
    
    </div>
  );
}

export default App;
