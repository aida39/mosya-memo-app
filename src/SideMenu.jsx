import React from 'react'

const SideMenu = () => {
    return (
        <div className='side-menu'>
            <div className="header">
                <div className="header-title">
                    <img src="./images/memo-icon.svg" alt="memo-icon" className="memo-icon" />
                    <h1 className='app-title'>MemoApp</h1>
                </div>
                <span className='add-icon'>+</span>
            </div>
            <div className="memo-list">
                <input type="text" className="memo-search" placeholder='Search memos...' />
                <div className="memo-item">
                    <img src="./images/memo.svg" alt="memo" />
                    <span className='memo-title'>タイトルなし</span>
                </div>
                <button className='memo-button'>Add Memo</button>

            </div>
        </div>
    )
}

export default SideMenu