import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import './App.css';
import { useState } from 'react';

function App() {
  const [nameAndFamily, setNameAndFamily] = useState("")
  return (
    <>
      <div className="App">
        <Header nameAndFamily={nameAndFamily} />
        <Main setNameAndFamily={setNameAndFamily} />
        <Footer />
      </div>
    </>
  );
}

export default App;
