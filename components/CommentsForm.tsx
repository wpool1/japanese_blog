import React, { useRef, useState, useEffect } from 'react'

import { submitComment } from '../services';

/*
export const CommentsForm = ( {slug}: {slug: any}  ) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    })

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };

        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">コメントを追加…</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea 
                    ref={commentEl} 
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="コメント"
                    name="comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input 
                    type="text"
                    ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="名前"
                    name="name"
                />
                <input 
                    type="text"
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Eメール"
                    name="email"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
                    <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">次回コメントをするときにEメールと名前を覚えておく</label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">全ての欄の記入が必要です</p>}
            <div className="mt-8">
                <button 
                    type="button" 
                    onClick={handleCommentSubmission}
                    className="transition duration-400 transform hover:bg-orange-400 inline-block bg-gray-200 text-lg font-medium rounded-full text-gray-500 hover:text-white px-8 py-2 cursor-pointer"
                >
                投稿する
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">コメントは正常に送信されました。これからレビューが行われますので、コメント欄に表示されるまで時間少しかかります。</span>}
            </div>
        </div>
    )
}
*/