import React from 'react'
import './skeleton.css'
import Skeleton from '@mui/material/Skeleton';

export const Skeleton_ = () => {
    return (
        <div id='sk-box'>
            <div style={{ marginLeft: '23px', display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ borderRadius: '10px', width: '70px', height: '70px', overflow: 'hidden', position: 'relative' }}>
                    <Skeleton style={{ backgroundColor: '#737373' }} variant="rounded" id='sk-image' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px', height: '65%' }}>
                    <Skeleton style={{ minWidth: '15rem', fontSize: '16px', backgroundColor: '#737373' }} variant='rounded' height={16} />
                    <Skeleton style={{ minWidth: '15rem', fontSize: '16px', backgroundColor: '#737373' }} variant='rounded' height={16} />
                </div>
            </div>
            <div style={{ padding: '5px 10px', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <Skeleton style={{ minWidth: '4rem', fontSize: '16px', backgroundColor: '#737373' }} variant='rounded' height={16} />
                <div id='s-i-cont' onClick={() => handleClick()} style={{ marginLeft: '30px', cursor: 'pointer', height: '50px', width: '50px', backgroundColor: 'white', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Skeleton style={{ backgroundColor: '#737373' }} variant="circular" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}
