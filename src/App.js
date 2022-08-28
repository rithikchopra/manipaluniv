import { useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage';

function App() {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const handleChangeDisplayOverlay = () => {
    setDisplayOverlay(!displayOverlay);
  }
  return (
    <div className="App">
        <Homepage displayOverlay={displayOverlay}/>
        {/* <SubPage displayOverlay={displayOverlay}/> */}
    </div>
  );
}

export default App;
