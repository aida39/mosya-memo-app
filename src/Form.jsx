import React from 'react'

const Form = ({memo}) => {
    return (
        <div className='form'>
            <div className="title-area">
                <input type="text" className="form-title" value={memo?.title || ""}
                    readOnly />
                <img src="./images/delete.svg" alt="trash-box" className='delete-icon'/>
            </div>
            <div className="form-content">
                <textarea
                    className="form-text"
                    value={memo?.text || ""}
                    readOnly
                />
                <button className="memo-button">保存</button>
            </div>
        </div>
    )
}

export default Form