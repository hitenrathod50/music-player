import React, { useState } from 'react'
import { SearchBox } from '../SearchBox/SearchBox'
import Button from '@mui/material/Button';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { SignUpDialog } from '../Dialogs/SignUpDialog';
import { LoginDialog } from '../Dialogs/LoginDialog';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserLarge } from "react-icons/fa6";
import { Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import { setUserLoginFalse, setUserLoginTrue } from '../../app/Slices/userCheckLogin';

export const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const checkLogin = useSelector(state => state.checkLogin.value)

    const [signUpDialog, setSignUpDialog] = useState(false)
    const [loginDialog, setloginDialog] = useState(false)

    const handleClick = () => {
        navigate('/');
    };

    const openMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        setAnchorEl(null);
        navigate('/profile')
    }

    const logoutCurrentUser = async () => {
        const resp = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
        dispatch(setUserLoginFalse());
        setAnchorEl(null);
        navigate("/")
    }

    return (
        <nav style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
                <img style={{ cursor: 'pointer' }} src="logo.svg" alt="" onClick={handleClick} />
            </div>

            <SearchBox />
            <SignUpDialog open={signUpDialog} setOpen={setSignUpDialog} />
            <LoginDialog open={loginDialog} setOpen={setloginDialog} />
            {
                checkLogin ?
                    <>
                        <div onClick={openMenuClick} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#2d2d2d', borderRadius: '100%', margin: '0px 20px' }}>
                            <FaUserLarge style={{ fontSize: '23px', margin: '0px 2px' }} />
                        </div>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >

                            <MenuItem onClick={handleProfileClick}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={logoutCurrentUser}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                    :
                    <>
                        <Button onClick={() => setSignUpDialog(true)} id='signup' variant="contained">Sign up</Button>
                        <Button onClick={() => setloginDialog(true)} id='login' variant="contained">Log in</Button>
                    </>
            }
        </nav>
    )
}
