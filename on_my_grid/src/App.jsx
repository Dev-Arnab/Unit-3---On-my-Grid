import { useState } from 'react';
import './App.css';
import BaristaForm from './components/BaristaForm';

function App() {

  return(
    <div className='title-container'>
      <h1 className='title'>On My Grid</h1>
      <p>So you think you can barista? Let's put that to the test...</p>
      <BaristaForm />
    </div>
    
  )
}

export default App;
