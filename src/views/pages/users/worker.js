import React, { Suspense, useEffect, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import { Avatar, Card, Typography } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Worker = () => {
    const [data, setData] = useState([]);
    const fetchWorkers = async () => {
        return await axios.get('http://127.0.0.1:5000/admin/workers');
    };

    const deleteWorker = async (id) => {
        await axios
            .delete(`http://127.0.0.1:5000/admin/workers/${id}`)
            .then((res) => res.status == 204 && setData(data.filter((item) => item._id !== id)));
    };
    useEffect(() => {
        console.log(data);
        fetchWorkers().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data.map((item, idx) => (
                <Card
                    key={idx}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 10px',
                        marginBottom: '4px'
                    }}
                >
                    <Avatar src={item.photo}></Avatar>
                    <Typography>{item.email}</Typography>
                    <Typography>
                        {item.nom} {item.prenom}
                    </Typography>
                    <Typography>{item.adresse}</Typography>
                    <Typography>{item.profession}</Typography>
                    <Typography>{item.avis}</Typography>
                    <div style={{ padding: 10, borderRadius: '50%', cursor: 'pointer' }}>
                        <IconTrash onClick={() => deleteWorker(item._id)} />
                    </div>
                </Card>
            ))}
        </>
    );
};

export default Worker;
