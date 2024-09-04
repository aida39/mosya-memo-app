import React from 'react';

const SideMenu = ({ memos, selectedMemo, setSelectedMemo, addMemo }) => {
    return (
        <div className='side-menu'>
            <div className="header">
                <div className="header-title">
                    <img src="./images/memo-icon.svg" alt="memo-icon" className="memo-icon" />
                    <h1 className='app-title'>MemoApp</h1>
                </div>
                <span className='add-icon' onClick={addMemo}>+</span>
            </div>
            <div className="memo-list">
                <input type="text" className="memo-search" placeholder='Search memos...' />
                {memos.map((memo) => (
                    <div 
                        className={`memo-item ${selectedMemo && selectedMemo.id === memo.id ? 'selected' : ''}`}
                        key={memo.id} 
                        onClick={() => setSelectedMemo(memo)}
                    >
                        <img src="./images/memo.svg" alt="memo" />
                        <span className='memo-title'>{memo.title || "タイトルなし"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideMenu;
