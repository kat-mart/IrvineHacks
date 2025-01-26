import './Report.css';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Report({ reports, setReports }) {
    const [add, setAdd] = useState(false);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());
    const [replyIndex, setReplyIndex] = useState(null);
    const [replyText, setReplyText] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    const handleAdd = () => {
        setAdd(true);
    }

    const handlePost = () => {
        if (text.trim()) {
            setReports((prevReports) => [
                { text, date, replies: [] },
                ...prevReports,
            ]);
            setAdd(false);
            setText('');
        }
    }

    const handleReply = (index) => {
        setReplyIndex(index);
        setReplyText('');
    }

    const handlePostReply = (index) => {
        if (replyText.trim()) {
            setReports((prevReports) => {
                return prevReports.map((report, i) => {
                    if (i === index) {
                        return {
                            ...report,
                            replies: [
                                ...report.replies,
                                { text: replyText, date }
                            ],
                        };
                    }
                    return report;
                });
            });
            setReplyText('');
            setReplyIndex(null);
        }
    }

    return (
        <div className='container'>
            <h1 className='report-header'>Report a Medical Incident</h1>
            <p>Share your experiences to help reduce mistakes and protect patients.</p>
            <button className='report-button' onClick={handleAdd}>+ New Report</button>
            <div className='text-editor'>
                {add && (
                    <>
                        <ReactQuill value={text} onChange={setText} />
                        <button className='reply-button' onClick={handlePost}>Post</button>
                    </>
                )}
                <ul>
                    {reports.map((report, index) => (
                        <li className='reports' key={index}>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: report.text }} />
                                <small>{report.date.toLocaleString()}</small>
                            </div>
                            <button className='reply-button' onClick={() => handleReply(index)}>Reply</button>

                            {replyIndex === index && (
                                <>
                                    <ReactQuill
                                        value={replyText}
                                        onChange={setReplyText}
                                    />
                                    <button className='reply-button' onClick={() => handlePostReply(index)}>Post</button>
                                </>
                            )}

                            {report.replies.length > 0 && (
                                <ul className='replies'>
                                    {report.replies.map((reply, replyIndex) => (
                                        <li key={replyIndex}>
                                            <div>
                                                <p dangerouslySetInnerHTML={{ __html: reply.text }} />
                                                <small>{reply.date.toLocaleString()}</small>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
