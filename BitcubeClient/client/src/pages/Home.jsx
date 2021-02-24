import React, {useContext} from 'react'
import AddPost from '../components/AddPost';
import Container from '../components/Container';
import Posts from '../components/Posts';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Container marginTop={8}>
                <AddPost firstName={user.FirstName} />
                <Posts />
            </Container>
        </>
    )
}

export default Home;
