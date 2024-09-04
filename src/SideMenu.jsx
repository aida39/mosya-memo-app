import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

const SideMenu = ({ setSelectedMemo }) => {
    const [memos, setMemos] = useState([
        { id: uuidv4(), text: "初期データ", title: "テスト用初期データ" }
    ]);

    // const memoNameRef = useRef();

    const handleAddMemo = () => {
        // const name = memoNameRef.current.value
        // if (name === "") return
        setMemos((prevmemos) => {
            return [...prevmemos, { id: uuidv4(), text: "text", title: "test" }]
        })
    }

    const handleMemoClick = (memo) => {
        setSelectedMemo(memo);
    }

    return (
        <div className='side-menu'>
            <div className="header">
                <div className="header-title">
                    <img src="./images/memo-icon.svg" alt="memo-icon" className="memo-icon" />
                    <h1 className='app-title'>MemoApp</h1>
                </div>
                <span className='add-icon' onClick={handleAddMemo}>+</span>
            </div>
            <div className="memo-list">
                <input type="text" className="memo-search" placeholder='Search memos...' />
                {memos.map((memo) => (
                    <div className="memo-item" key={memo.id} onClick={() => handleMemoClick(memo)}>
                        <img src="./images/memo.svg" alt="memo" />
                        <span className='memo-title'>{memo.title ?? "タイトルなし"}</span>
                    </div>
                ))
                }
                <button className='memo-button' onClick={handleAddMemo}>Add Memo</button>

            </div>
        </div>
    )
}

export default SideMenu