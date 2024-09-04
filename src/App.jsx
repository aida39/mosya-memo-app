import './App.css'
import './reset.css'
import Form from "./Form.jsx";
import SideMenu from "./SideMenu.jsx";
import { useState} from 'react';

function App() {

  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <div className='app'>
      <SideMenu setSelectedMemo={setSelectedMemo} />
      <Form memo={selectedMemo} />
    </div>
  )
}

export default App
