import React, { useState } from 'react'
import './dialog.css'
import Dialog from '@mui/material/Dialog';
import { Button, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { setUserLoginTrue } from '../../app/Slices/userCheckLogin';
import { useDispatch } from 'react-redux';

export const LoginDialog = (props) => {

    const [userName, setUserNme] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const notify_success = () => toast.success("User Logged In", {
        position: 'top-center',
        autoClose: 1000
    });

    const notify_fail = () => toast.error("User Not Found", {
        position: 'top-center',
        autoClose: 1000
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await axios.post('http://localhost:3000/login', { userName, password }, { withCredentials: true });

        const status = resp.data.status;

        if (status === "success") {
            dispatch(setUserLoginTrue(true));
            notify_success()
            setUserNme("")
            setPassword("")
            setTimeout(() => {
                props.setOpen(false)
            }, 1000);
        }
        else {
            notify_fail()
        }


    }

    return (
        <>
            <Dialog PaperProps={{ id: 'dialog' }} onClose={() => props.setOpen(false)} open={props.open}>
                <DialogTitle textAlign={'center'} fontSize={'23px'} color={'white'}>Login</DialogTitle>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 4,
                        borderRadius: 2
                    }}
                >
                    <TextField style={{ margin: '10px 0px' }}
                        value={userName}
                        onChange={(e) => setUserNme(e.target.value)}
                        className='textinput' inputProps={{ minLength: 5 }} type='text' id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField style={{ margin: '10px 0px' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='textinput' type='password' id="outlined-basic" label="Password" variant="outlined" required />
                    <Button
                        style={{ marginTop: '10px', borderRadius: '20px', maxWidth: '200px', backgroundColor: '#1e1e1e' }}
                        type="submit"
                        variant="contained"
                    >
                        Login
                    </Button>
                </Box>
            </Dialog>
        </>
    )
}
