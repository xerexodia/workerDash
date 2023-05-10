import React, { Suspense, useEffect, useState } from 'react';
import { Avatar, Card, Typography } from '@mui/material';
import axios from 'axios';
import { useStateContext } from 'store/context';
const Posts = () => {
    const { user } = useStateContext();
    console.log(user);
    const [data, setData] = useState([]);
    const fetchPosts = async () => {
        return await axios.get('http://127.0.0.1:5000/admin/posts');
    };

    const deletePost = async (id) => {
        await axios
            .delete(`http://127.0.0.1:5000/admin/posts/${id}`)
            .then((res) => res.status == 204 && setData(data.filter((item) => item._id !== id)));
    };
    useEffect(() => {
        fetchPosts().then((res) => setData(res.data));
    }, []);
    return (
        <div
            style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap',
                alignItems: 'center',
                paddingTop: '60px',
                justifyContent: 'space-evenly'
            }}
        >
            {data.map((item, idx) => (
                <Card
                    key={idx}
                    sx={{
                        width: 'fit-content',
                        gap: '8px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        width: '300px'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                        <img src={item.photo} alt="dqs" style={{ width: 100, height: 80, borderRadius: '13px' }} />
                        <span>{item.title}</span>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
                        <span>
                            posted by: {item.clientId?.nom} {item.clientId?.prenom}
                        </span>
                        <span>posted at: {item.createdAt}</span>
                        <span>status: {item.status}</span>
                    </div>
                    <div style={{ marginTop: '15px', height: '60px', display: 'flex', flexDirection: 'column' }}>
                        <span>Description:</span>
                        <span>{item.description}</span>
                    </div>
                    <button
                        onClick={() => deletePost(item._id)}
                        style={{
                            padding: '8px',
                            border: '1px solid #6a44b7',
                            borderRadius: '6px',
                            backgroundColor: '#ede7f6',
                            color: '#6a44b7',
                            cursor: 'pointer'
                        }}
                    >
                        delete
                    </button>
                </Card>
            ))}
        </div>
    );
};

export default Posts;
