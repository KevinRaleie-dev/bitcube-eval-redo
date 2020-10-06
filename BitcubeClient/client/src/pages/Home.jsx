import React, { useContext } from 'react'
import Container from '../components/Container';
import Nav from '../components/Nav';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Nav />
            <Container>
                <h1>Home</h1>
                <h3>Welcome, {user.FirstName}</h3>
            </Container>
        </>
    )
}

export default Home;
