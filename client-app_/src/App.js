import { useEffect, useState } from 'react'
import './App.css';

const  App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("/api/users/")
      .then((res) => res.json())
      .then((data) => (data = setState(data)));
  }, [])

  
    


  return (
    <div className="App">
      <ul>
        {state.map(item => <li>{item.Name}</li>)}
      </ul>
    </div>
  );
}

export default App;
