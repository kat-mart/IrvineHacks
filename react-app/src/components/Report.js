import './Report.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Report({ reports, setReports }) {
    const [add, setAdd] = useState(false);
    const [reply, setReply] = useState(false);
    const [text, setText] = useState(null);
    const [date, setDate] = useState(new Date());
    const [replyIndex, setReplyIndex] = useState(null);

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
        setReports((prevReports) => [{text, date, replies: []}, ...prevReports]);
        setAdd(false);    
        setText(null);
    }

    const handleReply = (index) => {
        setReply(true);
        setReplyIndex(index);
    }

    const handlePostReply = (index) => {
        setReports((prevReports) => {
            return prevReports.map((report, i) => {
                if (i === index) {
                    return {
                        ...report,
                        replies: [...report.replies, {text, date}],
                    };
                }
                return report; 
            });
        });

        setReply(false);
        setReplyIndex(null);
        setText(null);
    }

    return (
        <>
        <div className='container'>
            <h1 className='report-header'>Report a Medical Incident</h1>
            <h3>Share your experiences to help reduce mistakes and protect patients.</h3>
            <button onClick={handleAdd}>+ New Report</button>
            <div className='text-editor'>
                {add && 
                    <>
                    <ReactQuill
                        value={text}
                        onChange={value => setText(value)}
                    />
                    <button onClick={handlePost}>Post</button>
                    </>
                }
                <ul>
                    {reports.map((report, index) => (
                        <li className='reports' key={index}>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: report.text }} />
                                <small>{report.date.toLocaleString()}</small>
                            </div>
                            <button onClick={() => handleReply(index)}>Reply</button>

                            {reply && replyIndex === index &&
                            <>
                            <ReactQuill
                                value={text}
                                onChange={value => setText(value)}
                            />
                            <button onClick={() => handlePostReply(index)}>Post</button>
                            </>
                            }   

                            {report.replies.map((reply, index) => (
                                <li className='replies' key={index}>
                                    <div>
                                        <p dangerouslySetInnerHTML={{ __html: reply.text }} />
                                        <small>{reply.date.toLocaleString()}</small>
                                    </div>
                                </li>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};