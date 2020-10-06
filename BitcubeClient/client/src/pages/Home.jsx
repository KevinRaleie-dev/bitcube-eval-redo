import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>Home</h1>
            <h3>Welcome, {user.FirstName}</h3>
        </div>
    )
}

export default Home;
