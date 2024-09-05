import './App.css'
import './reset.css'
import Form from "./Form.jsx";
import SideMenu from "./SideMenu.jsx";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [memos, setMemos] = useState([
    { id: uuidv4(), text: "初期データ", title: "テスト用初期データ" }
  ]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const updateMemo = (updatedMemo) => {
    setMemos((prevMemos) => {
      const updatedMemos = prevMemos.map((memo) =>
        memo.id === updatedMemo.id ? updatedMemo : memo
      );
      return updatedMemos;
    });
  };

  const addMemo = () => {
    const newMemo = { id: uuidv4(), text: "", title: "" };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  };

  const deleteMemo = (id) => {
    if (window.confirm('このメモを削除しますか？')) {
      setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
      if (selectedMemo && selectedMemo.id === id) {
        setSelectedMemo(null);
      }
    }
  };

  const [search, setSearch] = useState("");
  const filteredMemos = memos.filter((memo) =>
    memo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='app'>
      <SideMenu
        memos={filteredMemos}
        selectedMemo={selectedMemo}
        setSelectedMemo={setSelectedMemo}
        addMemo={addMemo}
        search={search}
        setSearch={setSearch}
      />
      <Form memo={selectedMemo} updateMemo={updateMemo} deleteMemo={deleteMemo} />
    </div>
  );
}

export default App;
