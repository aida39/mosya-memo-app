import React, { useEffect, useRef } from 'react';

const Form = ({ memo, updateMemo,deleteMemo }) => {
    const titleRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        if (memo) {
            titleRef.current.value = memo.title || "";
            textRef.current.value = memo.text || "";
        }
    }, [memo]);

    const handleClick = () => {
        if (memo?.id) {
            const title = titleRef.current.value || "";
            const text = textRef.current.value || "";
            updateMemo({ ...memo, title, text });
        }
    };

    const deleteClick = () => {
        if (memo?.id) {
            deleteMemo(memo.id);
        }
    };

    return (
        <div className='form'>
            <div className="title-area">
                <input
                    type="text"
                    className="form-title"
                    ref={titleRef}
                    placeholder="タイトルを入力"
                />
                <img src="./images/delete.svg" alt="trash-box" className='delete-icon' onClick={deleteClick} />
            </div>
            <div className="form-content">
                <textarea
                    className="form-text"
                    ref={textRef}
                    placeholder="メモを入力"
                />
                <button className="memo-button" onClick={handleClick}>保存</button>
            </div>
        </div>
    );
}

export default Form;
