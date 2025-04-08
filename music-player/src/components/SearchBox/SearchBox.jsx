import React from 'react'
import './search.css'
import { useDispatch } from 'react-redux'
import { setSearchText } from '../../app/Slices/searchSlice'
import { useNavigate } from 'react-router-dom'

export const SearchBox = () => {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    return (
        <div style={{ margin: 'auto' }}>
            <input
                onFocus={() => navigate('/search')}
                // onBlur={() => navigate('/')}
                id='searchbox'
                type="text"
                placeholder="What do you want to play?"
                onChange={(event) => dispatch(setSearchText({ value: event.target.value }))}
            />

        </div>
    )
}
