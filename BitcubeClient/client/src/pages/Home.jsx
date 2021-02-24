import React, { useContext } from 'react'
import Container from '../components/Container';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Container marginTop={8}>
                <h1>Home</h1>
                <h3>Welcome, {user.FirstName}</h3>
            </Container>
        </>
    )
}

export default Home;
