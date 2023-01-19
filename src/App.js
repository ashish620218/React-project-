import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [isshown, setIsshown] = useState(false);

  const [name , setName] = useState('')

  const handleClick = event => {
   
    setIsshown(true);

  }
  const handleChange = (event) => {
    setName(event.target.value);
    setIsshown(false)
  };

  return (
    <div>
        <h1>Web Development Assignment</h1>
        <p>Enter you name: <input value={name} onChange={handleChange}>

        </input> <button type='submit' onClick={handleClick}>Login</button></p>

        {/* 👇️ show elements on click */}
        {isshown && <Welcome name={name}/>}
        <p>Assignment done by Ashish Kumar (12015585) </p>
    </div>
  );
}

export default App;